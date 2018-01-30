
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
} from 'react-native';


export default class Header extends Component<{}> {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <ImageBackground style={styles.BackgroundHeader} source={require('project1/src/image/header.png')}>
                <View style={styles.header}>
                    <Text style={styles.nametext}>Xuan Care</Text>
                </View>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    nametext:{
        textAlign:'center',
        alignItems:'center',
        color:'white',
        fontSize:18,
        fontWeight:'bold',
    },
    BackgroundHeader:{
        flex:1,
        width:'100%',
        height:'100%'
    },
});
