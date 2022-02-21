import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

const customButtonStyles = StyleSheet.create({
   customButton: {
      marginVertical: 10,
      padding: 10,
      alignItems: "center",
      borderRadius: 5,
      backgroundColor: colors.choco
   },
   customButtonDisabled: {
      opacity: 0.6
   },
   textButton: {
      fontSize: 20,
      color: colors.wheat
   }
});

export default customButtonStyles;