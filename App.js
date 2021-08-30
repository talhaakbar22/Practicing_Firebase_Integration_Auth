// import React from "react";
// import { Text, View, SafeAreaView, TextInput } from "react-native";
// import Button from "./src/utility/Button";
//
// const Home = () => {
//   return (
//     <SafeAreaView style={{ backgroundColor: "red", flex: 1, justifyContent: "space-between", flexDirection: "row" }}>
//       <View style={{ backgroundColor: "green",opacity:0.2 }}>
//         <Text>adadadadada</Text>
//       </View>
//       <View style={{ backgroundColor: "gray",opacity:0.4 }}>
//         <Text>adadadadada</Text>
//         <TextInput
//           placeholder={"Hello"}
//           inlineImageLeft='search_icon'
//         />
//       </View>
//
//     </SafeAreaView>
//   );
// };
// export default Home;
//This is an example code to show Image Icon in TextInput//
import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Button from "./src/utility/Button";
import EditText from "./src/utility/EditText";
import { AuthContext, AuthProvider } from "./src/navigation/AuthProvider";
import auth from "@react-native-firebase/auth";

const App = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");


  const register = async (email,password)=>{
    try {
      // await auth().createUserWithEmailAndPassword(email,password);
      await auth().signInWithEmailAndPassword(email,password);
      await alert('success')

    }catch (e) {
      console.log(e);
    }
  }
  return (
    <AuthProvider>
    <View style={styles.container}>
      <EditText ImageSource={require("./img.png")} PlaceHolder={"Enter Email"} image={true} onChange={(text)=>{setEmail(text)}}/>
      <EditText PlaceHolder={"Enter Password"} onChange={(text1)=>{setPassword(text1)}}/>
      <Button Press={()=>{register(email, password)}} text={"Submit"}/>
      <Button Press={()=>{alert(JSON.stringify(auth.EmailAuthProvider}} text={"Submit"}/>

    </View>
    </AuthProvider>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "green"
  },
});
