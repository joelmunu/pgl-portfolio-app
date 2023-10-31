import { StyleSheet, Text, View, Pressable } from "react-native";
import appColors from "../assets/styles/appColors";

type HeaderProps = {
  setDisplayMyQR: Function;
  setChangeColor: Function;
  changeColor: Boolean;
};

const Header = (props: HeaderProps) => {
  const { setDisplayMyQR, setChangeColor, changeColor } = props;

  return (
    <View style={styles.topContainer}>
      <View>
        <Text style={changeColor ? ({...styles.firstTopRowContainer, ...styles.titleDark}) : (styles.firstTopRowContainer)}>My Portfolio App</Text>
      </View>
      <View style={changeColor ? ({...styles.rowTopSecondContainer, ...styles.secondaryColorDark}) : (styles.rowTopSecondContainer)}>
        <Pressable onPress={() => setDisplayMyQR(true)}>
          <Text style={changeColor ? ({ ...styles.buttonTextDark, ...styles.shadoxBoxing }) : ({ ...styles.buttonText, ...styles.shadoxBoxing })}>
            Mi info
          </Text>
        </Pressable>
        {changeColor ? (
          <Pressable
            onPress={() => setChangeColor(false)}
            accessibilityLabel="Boton para cambiar entre modo oscuro y claro"
          >
            <Text style={changeColor ? ({ ...styles.buttonTextDark, ...styles.shadoxBoxing }) : ({ ...styles.buttonText, ...styles.shadoxBoxing })}>
              Modo claro
            </Text>
          </Pressable>

        ) : (
          <Pressable
            onPress={() => setChangeColor(true)}
            accessibilityLabel="Boton para cambiar entre modo oscuro y claro"
          >
            <Text style={changeColor ? ({ ...styles.buttonTextDark, ...styles.shadoxBoxing }) : ({ ...styles.buttonText, ...styles.shadoxBoxing })}>
              Modo oscuro
            </Text>
          </Pressable>
        )}
        <Pressable
          onPress={() => setDisplayMyQR(false)}
          accessibilityLabel="Boton para mostrar o ocultar el QR"
        >
          <Text style={changeColor ? ({ ...styles.buttonTextDark, ...styles.shadoxBoxing }) : ({ ...styles.buttonText, ...styles.shadoxBoxing })}>
            Mi Repo
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    marginTop: -450,
  },
  firstTopRowContainer: {
    backgroundColor: appColors.primary,
    color: appColors.titleColor,
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
    padding: 15,
    width: "100%",
  },
  titleDark: {
    backgroundColor: appColors.primaryDark,
    color: appColors.titleColorDark,
  },
  rowTopSecondContainer: {
    flexDirection: "row",
    backgroundColor: appColors.secondary,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  secondaryColorDark: {
    backgroundColor: appColors.secondaryDark,
  },
  shadoxBoxing: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  buttonText: {
    color: appColors.textColor,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 5,
  },
  buttonTextDark: {
    color: appColors.textColorDark,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 5,
  },
  buttonStyle: {
    backgroundColor: appColors.primary,
    color: appColors.titleColor,
    width: "100%",
    paddingVertical: 19,
  },
});
