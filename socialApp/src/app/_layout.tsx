import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "./context/authContext";


export default function RootLayout() {
 
function RouteGuard(){
   const router = useRouter();
  const {user} = useAuth();
  const segments  = useSegments();

  const isAuthGroup =segments[0] ==="(auth)";
const isTabGroup =segments[0] ==="(tabs)";


  useEffect(()=>{

    if(!user){
      if(!isAuthGroup){
router.replace('/(auth)/login');
      }


    }
    else{
      if(!isTabGroup){
 router.replace('/(tabs)');
      }
       

    }

  },[user, segments, router]);
  return(
<Stack screenOptions={{ 
      headerShown:false,
      animation:'simple_push'
      }}>
    <Stack.Screen name="(tabs)" />
     <Stack.Screen name="(auth)" />
    </Stack>
  );
}
  

 

  return (
    <AuthProvider>

   <RouteGuard/>
    
     </AuthProvider>
  );
}
