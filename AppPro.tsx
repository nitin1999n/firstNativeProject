import React from "react";

import {
    View,
    Text,
    SafeAreaView,
    useColorScheme,
    StyleSheet
} from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";

function AppPro(): JSX.Element{
    const isDarkMode= useColorScheme()==='dark'
    return(
        <View style={styles.container}>
            <Text style={isDarkMode? styles.lightModeText : styles.darkModeText}>

                Hello World!</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    darkModeText: {
        color: '#000000',
    },
    lightModeText:{
        color:'#FFFFFF'
    }
})

export default AppPro