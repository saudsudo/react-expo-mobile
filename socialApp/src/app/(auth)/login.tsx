import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../context/authContext";
export default function loginScreen() {
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
    const router  = useRouter();
    const {signIn} = useAuth();

     const handleLogin = async () => {
        if (!email || !password) {
          Alert.alert("Error", "Please fill the details");
        }
      
    
        setisLoading(true);
        try {
          await signIn(email, password);
    
          router.push('/(tabs)');
        } catch (error) {
          console.log("error"+error);
        //  alert("error"+error);
          Alert.alert("Error", "Error Signin");
        } finally {
          setisLoading(false);
        }
      };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text style={styles.title}>Welcome Back !</Text>

          <View style={styles.form}>
            <Text style={styles.subTitle}>Sign in to Continue </Text>
            <TextInput
              style={styles.input}
              placeholder="Email ... "
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              placeholderTextColor={" #999"}
              value={email}
              onChangeText={setEmail}
            ></TextInput>

            <TextInput
              style={styles.input}
              placeholder="Password ... "
              autoCapitalize="none"
              autoComplete="password"
              secureTextEntry
               value={password}
              onChangeText={setPassword}
            ></TextInput>
        <TouchableOpacity onPress={()=>{
        
          handleLogin();
        }}
        style = {styles.signButton}
        >
          {isLoading? (<ActivityIndicator size={24}/>):  (<Text  style={styles.signText}>Sign in </Text>) }
           
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>{
             router.push('/(auth)/signup');
        }}
        >
<Text    style={styles.txtInfo}>
           Dont have an account? <Text  style={styles.txtInfoSign}>Sign up! </Text>
            </Text>
        </TouchableOpacity>
            
          
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "900",
    fontSize: 40,
    padding: 5,
    alignSelf:'center'
  },
  subTitle: {
    fontSize: 25,
    fontWeight:300,
    padding: 5,
    color: "grey",
    alignSelf:'center',
    margin:10
  },

  form: {
    width: "85%",
    margin: 5,
    padding: 5,
    fontSize: 20,
    marginLeft:30
  },
  input: {
    borderWidth: 1,
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
  
    
  },
  txtInfo:{
   margin:5,
   fontSize:20,
   alignSelf:'center'
  },
  txtInfoSign:{
    fontWeight:700
  },
  signButton:{
    backgroundColor:"black",
    padding:15,
    margin:3,
    borderRadius:15,
    borderWidth:1,
    width:'98%'
  },
  signText:{
    color:'white',
    fontWeight:500,
    alignSelf:'center'
  }
});
