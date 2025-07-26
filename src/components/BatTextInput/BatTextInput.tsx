import React from "react";
import { TextInput, View } from "react-native";

import { styles } from "./BatTextInputStyles";

interface BatTextInputProps {
  pass: string;
}

export function BatTextInput(props: BatTextInputProps) {
  return (
    <TextInput style={styles.input} placeholder="pass" value={props.pass} />
  );
}
