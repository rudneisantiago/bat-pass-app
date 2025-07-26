import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./Style";
import { BatButton, BatLogo, BatTextInput } from "../../components";

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      <View style={styles.inputContainer}>
        <BatButton />
      </View>
      <StatusBar style="light" />
    </View>
  );
}
