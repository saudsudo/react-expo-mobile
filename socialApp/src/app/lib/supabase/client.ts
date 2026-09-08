import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient} from '@supabase/supabase-js'


const supabaseURL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supaBaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANONYMOUS_KEY!;

export const supabase = createClient(supabaseURL, supaBaseAnonKey);