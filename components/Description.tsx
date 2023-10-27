import { StyleSheet, Text, View, Image } from "react-native";

type infoProps = {
  changeUser: Boolean;
};

const Description = (props: infoProps) => {
  return (
    <View>
      {props.changeUser ? (
        <View style={styles.descriptionStyle}>
          <Image
            style={styles.avatar}
            source={require("../assets/messichikito.jpg")}
          />
          <View style={styles.descriptionContainer}>
            <Text style={styles.textStyle}>Descripción sobre Manu</Text>
            <Text>
              Soy Manu me gusta el cine, la formula 1, la edición de videos y
              jugar videojuegos y en especial el papers please
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.descriptionStyle}>
          <Image
            style={styles.avatar}
            source={require("../assets/AfroPixel.png")}
          />
          <View style={styles.descriptionContainer}>
            <Text style={styles.textStyle}>Descripción sobre Joel</Text>
            <Text>
            Mi nombre es Joel Munuera Marrero, actualmente me encuentro estudiando 2º CFGS DAM en Salesianos la Cuesta.
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  textStyle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  descriptionStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  descriptionContainer: {
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
});
