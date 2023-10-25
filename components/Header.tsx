import { StyleSheet, Text, View, Pressable, Button } from 'react-native'
import { useState } from 'react';

type HeaderProps = {
    setDisplayMyQR: Function
}

const Header = (props: HeaderProps) => {

    const { setDisplayMyQR } = props;

    return (
        <View style={styles.topContainer}>
            <Text style={styles.firstTopRowContainer}>My Portfolio App</Text>
            <View style={styles.rowTopSecondContainer}>
                <Pressable
                    style={styles.pathButton}
                    onPress={() => setDisplayMyQR(true)}>
                    <Text style={{ ...styles.buttonText, ...styles.shadoxBoxing }}>
                        Mi info
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => setDisplayMyQR(false)}
                    accessibilityLabel='Boton para mostrar o ocultar el QR' >
                        <Text style={{ ...styles.buttonText, ...styles.shadoxBoxing }}>
                            Mi Repo
                        </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    topContainer: {
        height: '15%',
        paddingTop: 50,
        width: '100%',
    },
    firstTopRowContainer: {
        backgroundColor: 'gray',
        textAlign: 'center',
        fontWeight: 'bold',
        textAlignVertical: 'center',
        fontSize: 30,
    },
    rowTopSecondContainer: {
        flexDirection: 'row',
        backgroundColor: 'darkgray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pathButton: {
        width: '50%',
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
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})