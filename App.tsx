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
          <InfoContainer />
        </View>
      ) : (
        <View style={styles.qrContainer}>
          <QrCodes />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 299,
  },
  infoContainer: {},
  qrContainer: {
    flex: 2,
  },
});
