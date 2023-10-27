import { StyleSheet, Text, View, ScrollView } from 'react-native'

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
                        <Text style={styles.hobbiesStyle}>Salir a pasear</Text>
                        <Text style={styles.hobbiesStyle}>Senderismo</Text>
                        <Text style={styles.hobbiesStyle}>Ir a la playita</Text>
                        <Text style={styles.hobbiesStyle}>Domingos de misa</Text>
                        <Text style={styles.hobbiesStyle}>La guitarrita</Text>
                        <Text style={styles.hobbiesStyle}>El monte con lluvia</Text>
                        <Text style={styles.hobbiesStyle}>Viajar</Text>
                        <Text style={styles.hobbiesStyle}>Música variadita</Text>
                        <Text style={styles.hobbiesStyle}>Anime</Text>
                        <Text style={styles.hobbiesStyle}>Ducharme</Text>
                        <Text style={styles.hobbiesStyle}>Videojuegos</Text>
                        <Text style={styles.hobbiesStyle}>Ir de cenar romántica</Text>
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
    )
}

export default HobbiesList

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
    }
})