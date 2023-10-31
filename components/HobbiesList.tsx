import { StyleSheet, Text, View, ScrollView } from "react-native";
import appColors from "../assets/styles/appColors";

type infoProps = {
  changeUser: Boolean;
  changeColor: Boolean;
};

const HobbiesList = (props: infoProps) => {
  
  const {changeUser, changeColor} = props;

  return (
    <View style={styles.container}>
      {changeUser ? (
        <View>
          <Text style={changeColor ? ({...styles.titleStyle, ...styles.titleDark}) : (styles.titleStyle)}>cosas que me gustan mucho:</Text>
          <ScrollView style={styles.scrollviewStyle}>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>Ir al cine</Text>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>Ver series</Text>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>Ver F1</Text>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>Viajar</Text>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>Escuchar Música</Text>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>Ver documentales</Text>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>Ducharme</Text>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>
              Videojuegos en especial el Papers Please
            </Text>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>
              Me gusta por si no lo dije el papers please
            </Text>
          </ScrollView>
        </View>
      ) : (
        <View>
          <Text style={changeColor ? ({...styles.titleStyle, ...styles.titleDark}) : (styles.titleStyle)}>cosas que me gustan mucho:</Text>
          <ScrollView style={styles.scrollviewStyle}>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>Informática</Text>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>
              Ver producciones audiovisuales de alta calidad
            </Text>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>Ver la kinli</Text>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>
              Coches y simuladores de conducción
            </Text>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>Agapornis</Text>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>Aviación</Text>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>McDonald's</Text>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>
              Escuchar producciones musicales de alta calidad en formato
              original sin comprimir
            </Text>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>Ir al gimnsasio y correr</Text>
            <Text style={changeColor ? ({...styles.hobbiesStyle, ...styles.hobbiesStyleDark}) : (styles.hobbiesStyle)}>
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
  container: {
    height: "100%"
  },
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
  hobbiesStyleDark: {
    backgroundColor: appColors.secondaryDark,
    color: appColors.textColorDark
  },
  titleStyle: {
    color: appColors.titleColor,
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
  titleDark: {
    color: appColors.titleColorDark
  },
  scrollviewStyle: {
    padding: 10
  }
});
