import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    ImageBackground,
} from 'react-native';
import {sizeHeight, sizeWidth} from 'project1/src/Component/Size';

export default class Footer extends Component<{}> {
    render() {
        return (
            <View style={styles.background} >
                <ImageBackground style={styles.BackgroundFooter} source={require('project1/src/image/1-s.png')}>
                    <View style={styles.hotLine} >
                        <Text style={styles.hotLineText}>Hot Line</Text>
                    </View>
                    <View style={styles.Info} >
                        <Text style={styles.InfoText}>01662788778</Text>
                        <Text style={styles.InfoText}>ly.hoanghuu@gmail.com</Text>
                        <Text style={styles.InfoText}>k49/7 Hà Huy tập - Thanh Khê - Đà Nẵng</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        margin:10,
    },
    hotLine:{
        flex:1,
        paddingTop:10,
    },
    Info:{
        flex:5,
        justifyContent:'center',
        alignItems:'center',
    },
    hotLineText:{
        fontWeight:'bold',
        marginLeft:10,
    },
    InfoText:{
        color:'#ffffff',
    },
    BackgroundFooter:{
        flex:1,
        width:'100%',
        height:'100%',
        borderRadius: 5,
        overflow: 'hidden',
    }


});
