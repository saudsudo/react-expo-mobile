import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function loginScreen() {
    const router  = useRouter();
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
            ></TextInput>

            <TextInput
              style={styles.input}
              placeholder="Password ... "
              autoCapitalize="none"
              autoComplete="password"
              secureTextEntry
            ></TextInput>
        <TouchableOpacity onPress={()=>{
          //    router.push('/(auth)/signup');
        }}
        style = {styles.signButton}
        >
            <Text  style={styles.signText}>Sign in </Text>
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
