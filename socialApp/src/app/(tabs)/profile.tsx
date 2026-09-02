import { Text, View, StyleSheet  } from "react-native";


export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle1}>Profile Page </Text>
   
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


});
