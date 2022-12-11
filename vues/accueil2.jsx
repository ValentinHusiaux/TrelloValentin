import React from 'react';
import {Text, View } from 'react-native';
import { useContext } from "react";
import { TableauContext } from '../context';
import { Listes } from '../components/listes';



export default function Accueil2(navigation) {
    const {listes} = useContext(TableauContext);
    return (
        <View>
       {listes.map((element,key) => <Listes key={key} item={element} navigation={navigation} ></Listes> )}
    </View>
    )
}