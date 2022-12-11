import { Button, Input, Text } from "@rneui/themed";
import { useContext } from "react";
import { useState } from "react";
import { Alert, Keyboard, StatusBar, View } from "react-native";
import { connectUser } from "../api/connect";
import { TableauContext } from "../context";
import { styles } from "../styles";
import { Image } from "react-native";

export function Connect() {
    const [login, setLogin] = useState("val@hotmail.fr");
    const [mdp, setMdp] = useState("testtest");
    const { setUser } = useContext(TableauContext);
    function handleClick() {
        Keyboard.dismiss()
        console.log(login, mdp);
        connectUser(login, mdp).then(data => {
            console.log(data);
            setUser(data)
        }).catch(err => {
            Alert.alert(err)
        })

    }
    return (

        <View style={styles.container}>
            <Image style={styles.tinyLogo}
                     source={require('../img/Livecampus.png')} />
            <Input style={styles.input} placeholder="Login" keyboardType="email-address" value={login} onChangeText={setLogin} />
            <Input style={styles.input} placeholder="Mot de passe" secureTextEntry={true} value={mdp} onChangeText={setMdp} />
            <Button style={styles.button} onPress={handleClick}>
                <Text style={styles.text}> Connexion</Text>
            </Button>
            <StatusBar style="auto" />
           
        </View>
    );
}