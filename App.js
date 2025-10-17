import {StatusBar} from 'expo-status-bar';
import {
    Pressable,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity, TouchableWithoutFeedback,
    View
} from 'react-native';
import {useState} from "react";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>
                Activado
            </Text>
            <Switch

            />
            <Text>
                {/* Accion */}
            </Text>
            <Pressable>

            </Pressable>
            <TouchableOpacity>

            </TouchableOpacity>
            <TouchableWithoutFeedback>

            </TouchableWithoutFeedback>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: 200,
        height: 250,
        padding: 20,
        display: "flex",
        flexDirection: 'column',
        borderRadius: 8,
        margin: 15
    },
    mockImage: {
        flex: 1,
        backgroundColor: 'gray',
        marginBottom: 8,
        borderRadius: 8
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 10,
    },
});
