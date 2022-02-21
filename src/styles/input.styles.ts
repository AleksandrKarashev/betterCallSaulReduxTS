import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

const inputStyles = StyleSheet.create({
   input: {
      marginVertical: 5,
      padding: 10,
      fontSize: 18,
      fontWeight: "500",
      borderWidth: 1,
      borderRadius: 3,
      color: colors.red,
      backgroundColor: colors.brown,
   }
});

export default inputStyles;