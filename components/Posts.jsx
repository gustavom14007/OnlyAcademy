import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, Alert } from "react-native";
import { supabase } from "/GIT/OnlyAcademy/src/supabaseClient";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const initialPostState = {
    user_id: "",
    content: "",
  };

  const [postState, setPostState] = useState(initialPostState);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("id", { ascending: false }); // Ordena por ID de forma descendente (último post primeiro)
      if (error) throw error;
      setPosts(data);
    } catch (error) {
      Alert.alert("Error fetching posts", error.message);
    }
  };

  const handleInputChange = (key, value) => {
    setPostState({ ...postState, [key]: value });
  };

  const addPost = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .insert([
          {
            user_id: postState.user_id,
            content: postState.content,
          }
        ])
        .select("*");
      if (error) throw error;
      if (!data) throw new Error("No data returned from insert");

      fetchPosts();

      setPostState(initialPostState);
    } catch (error) {
      Alert.alert("Error adding post", error.message);
      console.error("Error adding post:", error);
    }
  };

  const updatePost = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .update({
          user_id: postState.user_id,
          content: postState.content,
        })
        .eq("id", selectedPost.id)
        .select("*");
      if (error) throw error;
      if (!data) throw new Error("No data returned from update");

      fetchPosts();

      setPostState(initialPostState);
      setSelectedPost(null);
    } catch (error) {
      Alert.alert("Error updating post", error.message);
      console.error("Error updating post:", error);
    }
  };

  const deletePost = async (id) => {
    try {
      const { error } = await supabase.from("posts").delete().eq("id", id);
      if (error) throw error;

      fetchPosts();
    } catch (error) {
      Alert.alert("Error deleting post", error.message);
      console.error("Error deleting post:", error);
    }
  };

  const selectPost = (post) => {
    setSelectedPost(post);
    setPostState({
      user_id: post.user_id,
      content: post.content,
    });
  };

  const renderPostItem = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.userName}>{item.user_id}</Text>
      <Text style={styles.postContent}>{item.content}</Text>
      <View style={styles.postActions}>
        <Button title="Edit" onPress={() => selectPost(item)} />
        <Button title="Delete" onPress={() => deletePost(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPostItem}
        style={styles.postList}
      />
      <TextInput
        style={styles.input}
        placeholder="User ID"
        value={postState.user_id}
        onChangeText={(text) => handleInputChange("user_id", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Content"
        value={postState.content}
        onChangeText={(text) => handleInputChange("content", text)}
        multiline
      />
      <Button
        title={selectedPost ? "Update Post" : "Add Post"}
        onPress={selectedPost ? updatePost : addPost}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  postContainer: {
    backgroundColor: "#ffffff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  userName: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  postContent: {
    fontSize: 16,
    marginBottom: 10,
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  postList: {
    marginBottom: 20,
  },
};

export default Posts;
