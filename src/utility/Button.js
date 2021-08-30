import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as GS from "./GeneralStyles";
import Colors from "./Colors";

const Button = ({text,Press}) => {
  return (
    <TouchableOpacity
      onPress={Press}
      style={[
        GS.Colour( Colors.lightgray ),
        GS.Radius(5, 5, 5, 5),
        {marginHorizontal:10,padding:10,marginTop:20}
      ]}>
      <Text style={[GS.font(16, Colors.white,"center",null)]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
