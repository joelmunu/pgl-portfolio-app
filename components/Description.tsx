import { StyleSheet, Text, View, Image } from "react-native";
import appColors from "../assets/styles/appColors";

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
            <Text style={styles.titleStyle}>Descripción sobre Manu</Text>
            <Text style={styles.textStyle}>
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
            <Text style={styles.titleStyle}>Descripción sobre Joel</Text>
            <Text style={styles.textStyle}>
              Mi nombre es Joel Munuera Marrero, actualmente me encuentro
              estudiando 2º CFGS DAM en Salesianos la Cuesta.
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
  titleStyle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    color: appColors.titleColor,
  },
  textStyle: {
    color: appColors.secondary,
  },

  descriptionStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  descriptionContainer: {
    margin: 10,
    backgroundColor: appColors.description,
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
});
