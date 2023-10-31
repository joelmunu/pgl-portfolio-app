import { StyleSheet, View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import appColors from "../assets/styles/appColors";

type QrProps = {
  changeColor: Boolean;
};

const QrCodes = (props: QrProps) => {

  const {changeColor} = props;

  return (
    <View style={styles.bodyStyles}>
        <Text style={changeColor ? ({...styles.text, ...styles.darkText}) : (styles.text)}>GitHub de Manu</Text>
        <QRCode value="https://github.com/Maanuuu2310" color="white" backgroundColor="black"/>
        <Text style={changeColor ? ({...styles.text, ...styles.darkText}) : (styles.text)}>GitHub de Joel</Text>
        <QRCode value="https://github.com/joelmunu" color="white" backgroundColor="black"/>
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
  },
  darkText: {
    color: appColors.textColorDark
  }
});
