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
            source={require("../assets/SofyanAmrabat.jpg")}
          />
          <View style={styles.descriptionContainer}>
            <Text style={styles.textStyle}>Descripción sobre Manu</Text>
            <Text>
              Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
              prácticas para mis queridos alumnos
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.descriptionStyle}>
          <Image
            style={styles.avatar}
            source={require("../assets/SofyanAmrabat.jpg")}
          />
          <View style={styles.descriptionContainer}>
            <Text style={styles.textStyle}>Descripción sobre Joel</Text>
            <Text>
              Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
              prácticas para mis queridos alumnos
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
