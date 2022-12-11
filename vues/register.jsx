import { Button, Input, Text } from "@rneui/themed";
import { useContext } from "react";
import { useState } from "react";
import { Alert, Keyboard, StatusBar, View } from "react-native";
import { createUser } from "../api/connect";
import { TableauContext } from "../context";
import { styles } from "../styles";
import { Image } from "react-native";

export function Register() {
    const [login, setLogin] = useState("");
    const [mdp, setMdp] = useState("");
    const [confirm, setConfirm] = useState("");
    const { setUser } = useContext(TableauContext);
    function handleClick() {
        Keyboard.dismiss()
        if (confirm === mdp) {
            createUser(login, mdp).then(data => {
                setUser(data)
            }).catch(err => {
                Alert.alert(err)
            })
        } else {
            Alert.alert("Mot de passes différents")
        }
    }
    return (
        <View style={styles.container}>
            <Image style={styles.tinyLogo}
                     source={require('../img/Livecampus.png')} />
            <Input style={styles.input} placeholder="Login" keyboardType="email-address" value={login} onChangeText={setLogin} />
            <Input style={styles.input} placeholder="Mot de passe" secureTextEntry={true} value={mdp} onChangeText={setMdp} />
            <Input style={styles.input} placeholder="Confirmer le mot de passe" secureTextEntry={true} value={confirm} onChangeText={setConfirm} />
            <Button  style={styles.button} onPress={handleClick}>
            <Text style={styles.text}> Inscription </Text>  
                </Button>
            <StatusBar style="auto" />
        </View>
    );
}