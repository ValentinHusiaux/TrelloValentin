import { Button, ListItem } from "@rneui/themed";
import { useContext } from "react";
import { Alert, Dimensions, View } from "react-native";
import { TableauContext } from "../context";
// import { deleteCarnet } from "../api/carnet";
// import { CarnetPhotoContext } from "../context";



export function Listes({ item, navigation}) {
    const { user, setIdTableau} = useContext(TableauContext);
    function handleClick() {
        setIdTableau(item.id)
        navigation.push("listTableaux")
    }
    // function handleDelete() {
    //     console.log("coucou");
    //     deleteCarnet(user.uid, item.id).then((data) => {
    //         console.log("ok");
    //         modif(data)
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }
    return (
        <View style={{ width: Dimensions.get('window').width }}>
            <ListItem.Swipeable bottomDivider
                leftContent={(reset) => (
                    <Button
                        title="Info"
                        onPress={handleClick}
                        icon={{ name: 'info', color: 'white' }}
                        buttonStyle={{ minHeight: '100%' }}
                    />
                )}
                rightContent={(reset) => (
                    <Button
                        title="Delete"
                        // onPress={handleDelete}
                        icon={{ name: 'delete', color: 'white' }}
                        buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                    />
                )}
                onPress={handleClick}
            >
                <ListItem.Title>{item.titre}</ListItem.Title>

            </ListItem.Swipeable>



        </View>
    )
}