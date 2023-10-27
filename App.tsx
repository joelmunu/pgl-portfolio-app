import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import QrCodes from "./components/QrCodes";
import InfoContainer from "./components/InfoContainer";


export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);

  return (
    <View style={styles.container}>
      <Header setDisplayMyQR={setDisplayMyQR} />
      {displayMyQR ? (
        <View style={styles.infoContainer}>
          <InfoContainer/>
        </View>
      ) : (
        <QrCodes />
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
  infoContainer: {
    flex: 2
  }
});
