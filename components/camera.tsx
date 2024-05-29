import React, { useState, useEffect, useRef } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Platform, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [facing, setFacing] = useState(CameraType.back);
  const [permission, setPermission] = useState<boolean | null>(null);
  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === 'granted');
    })();
  }, []);

  if (permission === null) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={() => Camera.requestCameraPermissionsAsync().then(({ status }) => setPermission(status === 'granted'))} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  // Conditionally render the Camera component only on mobile platforms
  return (
    <View style={styles.container}>
      {Platform.OS !== 'web' ? (
        <Camera style={styles.camera} type={facing} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      ) : (
        <Text>Camera is not supported on web platform</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
