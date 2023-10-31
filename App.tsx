import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import QrCodes from "./components/QrCodes";
import InfoContainer from "./components/InfoContainer";
import appColors from "./assets/styles/appColors";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [changeColor, setChangeColor] = useState(false);

  return (
    <View style={changeColor ? (styles.containerDark) : (styles.container)}>
      <View style={styles.headerContainer}>
        <Header setDisplayMyQR={setDisplayMyQR} setChangeColor={setChangeColor} changeColor={changeColor}/>
      </View>
      {displayMyQR ? (
        <View style={styles.infoContainer}>
          <InfoContainer changeColor={changeColor}/>
        </View>
      ) : (
        <View style={{marginTop: -550}}>
          <QrCodes changeColor={changeColor}/>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerDark: {
    backgroundColor: appColors.backgroundDark,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyStyles: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  headerContainer: {
    width: "100%",
    position: "absolute",
    flex: 1
  },
  infoContainer: {
    marginTop: 250,
  }
});
