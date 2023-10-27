import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

const QrCodes = () => {
  return (
    <View style={styles.bodyStyles}>
      <View style={styles.qrStyles}>
        <QRCode value="https://github.com/adhernea" />
      </View>
    </View>
  );
};

export default QrCodes;

const styles = StyleSheet.create({
  bodyStyles: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  qrStyles: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
