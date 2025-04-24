import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text } from 'react-native';
import { Image } from 'react-native';

export default function HomePage() {
  return (
    <View style={styles.container}>
    <LinearGradient
      colors={['#1a0033', '#a347e3', '#ff00b3', '#ff5e00']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <Image source={require("../../assets/images/logo.png")} style={styles.logo}/>
      <View style={styles.textContainer}>
        <Text style={styles.subText}>Artificial Intelligence</Text>
        <Text style={[styles.subText, styles.subTextleft]}>Workshop & Arena</Text>
      </View>
      <Text style={styles.welcomeText}>Welcome to the AIWA React Native Starter Kit</Text>
    </LinearGradient>
  </View>)
}

const styles = StyleSheet.create({
  textContainer:{
    padding: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    marginBottom: 20,
    fontFamily: "HelveticanowBlack"
  },
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100
  },
  subText: {
    fontSize: 14,
    color: 'white',
    fontStyle: 'italic',
    fontFamily: "HelveticanowBoldItalic"
  },
  subTextleft:{
    paddingLeft: 80
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
});