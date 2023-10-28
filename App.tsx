import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import QrCodes from "./components/QrCodes";
import InfoContainer from "./components/InfoContainer";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header setDisplayMyQR={setDisplayMyQR} />
      </View>
      {displayMyQR ? (
        <View style={styles.infoContainer}>
          <InfoContainer/>
        </View>
      ) : (
        <View style={{marginTop: -550}}>
          <QrCodes />
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
