import { StyleSheet, Text, View, ScrollView } from "react-native";
import appColors from "../assets/styles/appColors";

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
            <Text style={styles.hobbiesStyle}>Informática</Text>
            <Text style={styles.hobbiesStyle}>
              Ver producciones audiovisuales de alta calidad
            </Text>
            <Text style={styles.hobbiesStyle}>Ver la kinli</Text>
            <Text style={styles.hobbiesStyle}>
              Coches y simuladores de conducción
            </Text>
            <Text style={styles.hobbiesStyle}>Agapornis</Text>
            <Text style={styles.hobbiesStyle}>Aviación</Text>
            <Text style={styles.hobbiesStyle}>McDonald's</Text>
            <Text style={styles.hobbiesStyle}>
              Escuchar producciones musicales de alta calidad en formato
              original sin comprimir
            </Text>
            <Text style={styles.hobbiesStyle}>Ir al gimnsasio y correr</Text>
            <Text style={styles.hobbiesStyle}>
              Y sobretodo producciones audiovisiales de la mejor de las
              calidades
            </Text>
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
    color: appColors.description,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: appColors.Silver,
  },
  titleStyle: {
    color: appColors.titleColor,
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
});
