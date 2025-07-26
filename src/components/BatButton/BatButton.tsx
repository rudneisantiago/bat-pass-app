import React, { useState } from "react";
import { Pressable, Text } from "react-native";

import { styles } from "./BatButtonStyles";
import { BatTextInput } from "../BatTextInput/BatTextInput";

export function BatButton() {
  const [pass, setPass] = useState("");

  function handleGenerateButton() {
    setPass("xupisco");
  }

  function handleCopyButton() {
    setPass("");
  }

  return (
    <>
      <BatTextInput pass={pass} />
      <Pressable
        style={styles.pressable}
        accessibilityLabel="Clique aqui para gerar"
        onPress={handleGenerateButton}
      >
        <Text style={styles.text}>🦇 Gerar</Text>
      </Pressable>
      <Pressable
        style={styles.pressable}
        accessibilityLabel="Clique aqui para copiar"
        onPress={handleCopyButton}
      >
        <Text style={styles.text}>Copiar 🦇</Text>
      </Pressable>
    </>
  );
}
