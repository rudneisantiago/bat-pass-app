import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    borderColor: '#FFF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: '#4D4D4D'
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    flexDirection: 'column'
  }
});