import React from "react";
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
   useFonts,
   DancingScript_700Bold
} from '@expo-google-fonts/dancing-script';

import sampleTextStyles from "../styles/sampleText.styles";

interface SampleText {
   children: string
}

const SampleText: React.FC<SampleText> = ({ children }) => {

   let [fontsLoaded] = useFonts({ DancingScript_700Bold });

   return (!fontsLoaded) ?
      <AppLoading /> :
      (
         <Text
            style={[sampleTextStyles.text, { fontFamily: "DancingScript_700Bold" }]}
         >{children}
         </Text>
      )
}

export default SampleText;