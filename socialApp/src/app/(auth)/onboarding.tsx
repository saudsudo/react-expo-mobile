import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ActivityIndicator, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from 'expo-image-picker'
import { Image } from "expo-image";


export default function OnboardingScreen() {
    const [isLoading, setisLoading] = useState(false);
const [profileImg, setprofileImg] = useState<string|null>(null);
    const handleSetup = () =>{
           setisLoading(true);
      //  setisLoading(false);
    }

    const pickCamera = async ()=>{
      
  const {status} = await ImagePicker.requestCameraPermissionsAsync();
        if(status !== 'granted'){
            Alert.alert('Permission error', 'Kindly privde the Camera permission to continue for Profile');
        return;
        }

        const imageData = await ImagePicker.launchCameraAsync({
          
                allowsEditing: true,
                aspect:[1,1],
                quality:0.8
        })

        if(!imageData.canceled && imageData.assets[0]){
            setprofileImg(imageData.assets[0].uri);
        }
    }

  const  showImagePickrModal = () =>{
        Alert.alert('Set Profile Image', 'Choose an option',[
           {text:'Cancel', style:'cancel'},
            {text:'Camera', onPress:pickCamera},
             {text:'Media Gallery', onPress:pickImage},
            
        ])
    }

    const pickImage = async () =>{
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(status !== 'granted'){
            Alert.alert('Permission error', 'Kindly provide the permission to continue');
        return;
        }

        const imageData = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:['images'],
                allowsEditing: true,
                aspect:[1,1],
                quality:0.8
        })
        if(!imageData.canceled && imageData.assets[0]){
            setprofileImg(imageData.assets[0].uri);
        }


    }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text style={styles.title}>Complete your profile</Text>
            <Text style={styles.subTitle}>Add your information to get started </Text>
  <View style={styles.form}>
    <TouchableOpacity style = {styles.imageContainer}
    onPress={()=>{
       // pickImage();
       showImagePickrModal();
    }}>
         {profileImg ? (<Image 
         source={{uri: profileImg}}
         style = {styles.placeholderImg}
         />)
         :  
          (<View style = {styles.placeholderImg}>
            <Text style = {styles.placeholderTxt}>+</Text>
        </View>)
        }
      
        <View style = {styles.editBadge}>
           <Text style = {styles.editTxt} >Edit </Text>
        </View>
    </TouchableOpacity>
        <TextInput
                  style={styles.input}
                  placeholder="Full name"
                  autoCapitalize="words"
                  keyboardType="default"
                  placeholderTextColor={" #a89c9c"}
                ></TextInput>

                 <TextInput
                  style={styles.input}
                  placeholder="username"
                  keyboardType="default"
                  placeholderTextColor={" #a89c9c"}
                ></TextInput>

                 <TouchableOpacity
                              onPress={() => {
                             handleSetup();

                              }}
                              style={styles.signButton}
                            >
                              {isLoading ? (
                                <ActivityIndicator size={20}></ActivityIndicator>
                              ) : (
                                <Text style={styles.signText}>Complete Setup  </Text>
                              )}
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
    fontWeight: "700",
    fontSize: 35,
    alignSelf: "center",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '300',
    padding: 5,
    color: "grey",
    alignSelf: "center",
  
  },

  form: {
    marginTop:10,
    width: "100%",
   alignItems:'center'
  },
  imageContainer:{
marginBottom:32,
position:'relative',

  },
  placeholderImg:{
width:120,
height:120,
position:'relative',
backgroundColor:'#f1f1f1',
borderRadius:60,
textAlign:'center',
alignItems:'center',
justifyContent:'center',
borderColor:'#080808',
borderWidth:1, 
borderStyle:'dashed'
  },
  placeholderTxt:{
        fontSize:52,
        color:'grey',
  },
  editBadge:{
position:'absolute',
bottom:0,
right:0,
paddingHorizontal:12,
paddingVertical:6,
backgroundColor:'black',
borderRadius:22
  },
  editTxt:{
        color: 'white',
        fontSize:15,
        fontWeight:"400"
  },


  input: {
    borderWidth: 1,
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
    width:'80%'
  },
  txtInfo: {
    margin: 5,
    fontSize: 20,
  },
  txtInfoSign: {
    fontWeight: 700,
  },
  signButton: {
    backgroundColor: "black",
    padding: 15,
    margin: 3,
    borderRadius: 15,
    borderWidth: 1,
    width: "81%",
  },
  signText: {
    color: "white",
    fontWeight: 500,
    alignSelf: "center",
    
  },
});
