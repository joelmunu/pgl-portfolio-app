import { StyleSheet, Text, View, ScrollView } from "react-native";

type infoProps = {
  changeUser: Boolean;
};

const HobbiesList = (props: infoProps) => {
  return (
    <View>
      {props.changeUser ? (
        <View>
          <Text style={styles.titleStyle}>cosas que me gustan mucho:</Text>
          <ScrollView style={{ padding: 10 }}>
            <Text style={styles.hobbiesStyle}>Ir al cine</Text>
            <Text style={styles.hobbiesStyle}>Ver series</Text>
            <Text style={styles.hobbiesStyle}>Ver F1</Text>
            <Text style={styles.hobbiesStyle}>Viajar</Text>
            <Text style={styles.hobbiesStyle}>Escuchar Música</Text>
            <Text style={styles.hobbiesStyle}>Ver documentales</Text>
            <Text style={styles.hobbiesStyle}>Ducharme</Text>
            <Text style={styles.hobbiesStyle}>
              Videojuegos en especial el Papers Please
            </Text>
            <Text style={styles.hobbiesStyle}>
              Me gusta por si no lo dije el papers please
            </Text>
          </ScrollView>
        </View>
      ) : (
        <View>
          <Text style={styles.titleStyle}>cosas que me gustan mucho:</Text>
          <ScrollView style={{ padding: 10 }}>
            <Text style={styles.hobbiesStyle}>Salir a pasear</Text>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default HobbiesList;

const styles = StyleSheet.create({
  hobbiesStyle: {
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
  titleStyle: {
    color: "black",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
});
