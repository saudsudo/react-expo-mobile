import { Color, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../context/authContext";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();
  const { signUp } = useAuth();

  useEffect(() => {
    router.push("/(auth)/onboarding");
  }, []);

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill the details");
    }
    if (password.length < 3) {
      Alert.alert("Error", "Password should not be less than 3");
    }

    setisLoading(true);
    try {
      await signUp(email, password);
    } catch (error) {
      Alert.alert("Error", "Error signup");
    } finally {
      setisLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text style={styles.title}>Sign Up</Text>

          <View style={styles.form}>
            <Text style={styles.subTitle}>Create your account! </Text>
            {/* <TextInput
              style={styles.input}
              placeholder="Name "
              autoCapitalize="none"
              autoComplete='username'
              keyboardType='default'
              placeholderTextColor={" #999"}
            ></TextInput> */}
            {/* <TextInput
              style={styles.input}
              placeholder="Contact "
              autoCapitalize="none"
              keyboardType='number-pad'
              placeholderTextColor={" #999"}
            ></TextInput>
             <TextInput
              style={styles.input}
              placeholder="City "
              autoCapitalize="none"
              keyboardType='default'
              placeholderTextColor={" #999"}
            ></TextInput> */}

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

            <TouchableOpacity
              onPress={() => {
                handleSignup();
              }}
              style={styles.signButton}
            >
              {isLoading ? (
                <ActivityIndicator size={20}></ActivityIndicator>
              ) : (
                <Text style={styles.signText}>Sign up </Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                router.push("/(auth)/login");
              }}
            >
              <Text style={styles.txtInfo}>
                Already have an Account ?{" "}
                <Text style={styles.txtInfoSign}>Sign in !</Text>
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
    alignSelf: "center",
  },
  subTitle: {
    fontSize: 25,
    fontWeight: '300',
    padding: 5,
    color: "grey",
    alignSelf: "center",
    margin: 10,
  },

  form: {
    width: "85%",
    margin: 5,
    padding: 5,
    fontSize: 20,
    marginLeft: 30,
  },
  input: {
    borderWidth: 1,
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
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
    width: "98%",
  },
  signText: {
    color: "white",
    fontWeight: 500,
    alignSelf: "center",
  },
});
