import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Header from "./components/Header";
import { useState } from "react";
import Description from "./components/Description";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);

  return (
    <View style={styles.container}>
      <Header setDisplayMyQR={setDisplayMyQR} />
      {displayMyQR ? (
        <View style={styles.bodystails}>
          <Description />
          <View>
            <Text
              style={{
                color: "beriblak",
                fontWeight: "900",
                textTransform: "capitalize",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              cosas que me gustan mucho:
            </Text>
            <ScrollView style={{ padding: 10 }}>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                Salir a pasear
              </Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Senderismo</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                Ir a la playita
              </Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                Domingos de misa
              </Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                La guitarrita
              </Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                El monte con lluvia
              </Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Viajar</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                Música variadita
              </Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Anime</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Ducharme</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Videojuegos</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                Ir de cenar romántica
              </Text>
            </ScrollView>
          </View>
        </View>
      ) : (
        <View style={styles.bodystails}>
          <View style={styles.CentrarcodigoQR}>
            <QRCode value="https://github.com/adhernea" />
          </View>
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
  topContainer: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  firsttoprowContainer: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  rowTopSecondContainer: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonruta: {
    width: "50%",
  },
  bodystails: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  cosasQmeGustanMuxoEstails: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
  },
  CentrarcodigoQR: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
