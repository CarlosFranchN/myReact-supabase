
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ytabyfdnpzqccxsfantj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0YWJ5ZmRucHpxY2N4c2ZhbnRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NjY3MzQsImV4cCI6MjA0NzA0MjczNH0.feVRQBaTaEatsVG9XK4t162-65IogKVRz1hbNMabCec'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase