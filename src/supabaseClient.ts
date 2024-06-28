import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fkrmxbkqlhuusuthpmgd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrcm14YmtxbGh1dXN1dGhwbWdkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTQyNzEzMywiZXhwIjoyMDM1MDAzMTMzfQ.oG25a91QB6hHOfTuKF9ZP8BrC0AgQRQOrIhdxKLO1YY';

export const supabase = createClient(supabaseUrl, supabaseKey);
