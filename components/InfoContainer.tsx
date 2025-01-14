import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Description from "../components/Description";
import HobbiesList from "../components/HobbiesList";
import appColors from "../assets/styles/appColors";

type InfoProps = {
  changeColor: Boolean;
};

const InfoContainer = (props: InfoProps) => {
  const [changeUser, setChangeUser] = useState(true);
  const {changeColor } = props;
  return (
    <View>
      <View style={styles.pressableStyle}>
        <Pressable
          style={changeColor ? ({ ...styles.button, ...styles.shadoxBoxing, ...styles.buttonDark }) : ({ ...styles.button, ...styles.shadoxBoxing })}
          onPress={() => setChangeUser(true)}
        >
          <Text style={changeColor ? ({...styles.buttonText ,...styles.buttonTextDark}) : (styles.buttonText)}>Manu</Text>
        </Pressable>
        <Pressable
          style={changeColor ? ({ ...styles.button, ...styles.shadoxBoxing, ...styles.buttonDark }) : ({ ...styles.button, ...styles.shadoxBoxing })}
          onPress={() => setChangeUser(false)}
        >
          <Text style={changeColor ? ({...styles.buttonText ,...styles.buttonTextDark}) : (styles.buttonText)}>Joel</Text>
        </Pressable>
      </View>
        <View>
          <View style={styles.bodyStyles}>
            <Description changeUser={changeUser} changeColor={changeColor}/>
          </View>
          <HobbiesList changeUser={changeUser} changeColor={changeColor}/>
        </View>
    </View>
  );
};

export default InfoContainer;

const styles = StyleSheet.create({
  pressableStyle: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bodyStyles: {
    width: "100%",
    alignSelf: "center",
  },
  button: {
    margin: 10,
    padding: 15,
    backgroundColor: appColors.secondary,
    borderRadius: 5,
    borderColor: appColors.borderColor,
    borderWidth: 2,
  },
  buttonDark: {
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
    fontWeight: "bold",
    textTransform: "uppercase",
    color: appColors.textColor,
    textAlignVertical: "center",
    textAlign: "center",
  },
  buttonTextDark: {
    color: appColors.textColorDark
  }
});
