import React, { useState } from "react";
import { Text, View, SafeAreaView, TextInput, Image } from "react-native";

const EditText = ({ImageSource,PlaceHolder,image,onChange}) => {
  return (
    <SafeAreaView>
      <View style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 0.5,
        borderColor: "#000",
        height: 40,
        borderRadius: 5,
        margin: 10,
      }}>
        {image &&
        <Image
          source={ImageSource}
          style={{
            padding: 12,
            margin: 5,
            height: 25,
            width: 25,
            resizeMode: "stretch",
            alignItems: "center",
          }}
        />
        }
        <TextInput
          style={{ flex: 1 }}
          placeholder={PlaceHolder}
          underlineColorAndroid="transparent"
          onChangeText={onChange}
        />
      </View>
    </SafeAreaView>
  );
};
export default EditText;
