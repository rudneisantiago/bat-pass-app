import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from './Style';
import { BatLogo } from "../../components/BatLogo/BatLogo";

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      <Text>I'm Batman! 🦇</Text>
      <StatusBar style="auto" />
    </View>
  )
}
