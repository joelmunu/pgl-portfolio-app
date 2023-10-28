import { StyleSheet, Text, View, Pressable } from "react-native";
import appColors from "../assets/styles/appColors";
import Ionicons from '@expo/vector-icons/Ionicons';

type HeaderProps = {
  setDisplayMyQR: Function;
};

const Header = (props: HeaderProps) => {
  const { setDisplayMyQR } = props;

  return (
    <View style={styles.topContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={styles.firstTopRowContainer}>My Portfolio App</Text>
      <Ionicons
        name={'contrast-outline'}
        size={32}
        style={styles.buttonStyle}
      />
      </View>
      <View style={styles.rowTopSecondContainer}>
        <Pressable
          style={styles.pathButton}
          onPress={() => setDisplayMyQR(true)}
        >
          <Text style={{ ...styles.buttonText, ...styles.shadoxBoxing }}>
            Mi info
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setDisplayMyQR(false)}
          accessibilityLabel="Boton para mostrar o ocultar el QR"
        >
          <Text style={{ ...styles.buttonText, ...styles.shadoxBoxing }}>
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
    width: '90%'
  },
  rowTopSecondContainer: {
    flexDirection: "row",
    backgroundColor: appColors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  pathButton: {
    width: "50%",
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
  buttonStyle: {
    backgroundColor: appColors.primary,
    color: appColors.titleColor,
    width: "100%",
    paddingVertical: 18,
  }
});
