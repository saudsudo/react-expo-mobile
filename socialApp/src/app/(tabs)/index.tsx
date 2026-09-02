import { Text,Button, View, StyleSheet, TextInput, ActivityIndicator,  } from "react-native";
import { Image } from "expo-image";
import { Link, useRoute, useRouter } from "expo-router";


export default function Index() {

  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle1}>Home Page </Text>
   
    
      {/* <TextInput placeholder="hello1"
       style={{ width: 100, height: 100 }}
      /> */}
    {/* //  <ActivityIndicator size={"large"}/> */}

      {/* <Link href='/about' > press here </Link>
     <Button title="Press TO Navigate" onPress={()=>{
       router.push('/about');
      
       
     }}></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle1:{
    color:"red"
  },
  textTitle3:{
    color:"green"
  },textTitle2:{
    color:"blue"
  },textTitle4:{
    color:"grey"
  },textTitle5:{
    color:"yellow"
  }

});
