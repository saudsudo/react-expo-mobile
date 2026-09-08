import { Stack } from "expo-router";
import { useState } from "react";

export default function authlayout(){
    const [login, setlogin] = useState(false);
return(
    <Stack screenOptions={{  headerShown:false,
      animation:'fade',
    }}>
        <Stack.Screen name = 'login'/>
        <Stack.Screen name = 'signup'/>
    </Stack>
);
}