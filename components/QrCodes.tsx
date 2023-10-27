import { StyleSheet, View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";

const QrCodes = () => {
  return (
    <View style={styles.bodyStyles}>
      <View style={styles.qrStyles}>
        <Text style={styles.text}>GitHub de Manu</Text>
        <QRCode value="https://github.com/Maanuuu2310" />
      </View>
      <View style={styles.qrStyles}>
        <Text style={styles.text}>GitHub de Joel</Text>
        <QRCode value="https://github.com/joelmunu" />
      </View>
    </View>
  );
};

export default QrCodes;

const styles = StyleSheet.create({
  bodyStyles: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  },
  qrStyles: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  text: {
    marginBottom: 10,
    fontSize: 16
  }
});
