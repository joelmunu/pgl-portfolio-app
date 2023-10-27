import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import Description from "./components/Description";
import HobbiesList from "./components/HobbiesList";
import QrCodes from "./components/QrCodes";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);

  return (
    <View style={styles.container}>
      <Header setDisplayMyQR={setDisplayMyQR} />
      {displayMyQR ? (
        <View style={styles.bodyStyles}>
          <Description />
          <HobbiesList />
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
});
