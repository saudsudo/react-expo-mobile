import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { AuthProvider } from "./context/authContext";


export default function RootLayout() {
  const router = useRouter();

  const isAuth = false;

  useEffect(()=>{

    if(isAuth){
router.replace('/(tabs)');

    }
    else{
        router.replace('/(auth)/login');

    }

  },[isAuth])

 

  return (
    <AuthProvider>

   
    <Stack screenOptions={{ 
      headerShown:false,
      animation:'simple_push'
      }}>
    <Stack.Screen name="(tabs)" />
     <Stack.Screen name="(auth)" />
    </Stack>
     </AuthProvider>
  );
}
