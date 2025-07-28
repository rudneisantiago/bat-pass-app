import React, { useState } from "react";
import { Pressable, Text, ToastAndroid } from "react-native";
import * as Clipboard from 'expo-clipboard'

import { styles } from "./BatButtonStyles";
import { BatTextInput } from "../BatTextInput/BatTextInput";
import generatePass from "../../services/passwordService";

export function BatButton() {
  const [pass, setPass] = useState("");

  function handleGenerateButton() {
    const generateToken = generatePass();
    setPass(generateToken);
  }

  async function handleCopyButton() {
    await Clipboard.setStringAsync(pass)
    ToastAndroid.show('Senha copiada!', 50)
  }

  return (
    <>
      <BatTextInput pass={pass} />
      <Pressable
        style={styles.pressable}
        accessibilityLabel="Clique aqui para gerar"
        onPress={handleGenerateButton}
      >
        <Text style={styles.text}>Gerar Senha</Text>
      </Pressable>
      <Pressable
        style={styles.pressable}
        accessibilityLabel="Clique aqui para copiar"
        onPress={handleCopyButton}
      >
        <Text style={styles.text}>🦇 Copiar 🦇</Text>
      </Pressable>
    </>
  );
}
