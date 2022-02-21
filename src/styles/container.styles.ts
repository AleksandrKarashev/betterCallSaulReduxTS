import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

const containerStyles = StyleSheet.create({
   container: {
      display: 'flex',
      flexGrow: 1,
      flexDirection: "column",
      justifyContent: "center",
      paddingHorizontal: 25,
      backgroundColor: colors.sand
   }
})

export default containerStyles;