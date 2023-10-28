import { StyleSheet, View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";

const QrCodes = () => {
  return (
    <View style={styles.bodyStyles}>
        <Text style={styles.text}>GitHub de Manu</Text>
        <QRCode value="https://github.com/Maanuuu2310" />
        <Text style={styles.text}>GitHub de Joel</Text>
        <QRCode value="https://github.com/joelmunu" />
    </View>
  );
};

export default QrCodes;

const styles = StyleSheet.create({
  bodyStyles: {
    width: "100%",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
    marginTop: 200,
  },
  text: {
    marginBottom: 10,
    marginTop: 50,
    fontSize: 16,
  }
});
