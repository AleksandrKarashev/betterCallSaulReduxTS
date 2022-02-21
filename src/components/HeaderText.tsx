import React from "react";
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
   useFonts,
   DancingScript_700Bold
} from '@expo-google-fonts/dancing-script';

import headerTextStyles from "../styles/headerText.styles";

interface IHeaderText {
   children: string
}

const HeaderText: React.FC<IHeaderText> = ({ children }) => {

   let [fontsLoaded] = useFonts({ DancingScript_700Bold });

   return (!fontsLoaded) ?
      <AppLoading /> :
      (
         <Text
            style={[headerTextStyles.header, { fontFamily: "DancingScript_700Bold" }]}
         >{children}
         </Text>
      )
}

export default HeaderText;