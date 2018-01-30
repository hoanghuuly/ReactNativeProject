
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import {sizeHeight, sizeWidth} from "./Size";


export default class Menu extends Component<{}> {
    constructor(props){
        super(props);
    }

    Click = ()=>{
        alert('Đang xây dựng!')
    }

    render() {
        return (
            <View style={styles.menu}>
                <View style={styles.menuList} >
                    <View style={styles.menuIn} >
                        <TouchableOpacity onPress={this.Click} style={styles.TouchMenu}>
                            <ImageBackground style={styles.BackgroundMenu} source={require('project1/src/image/1-s.png')}>
                                <Text style={styles.TextMenu}>Complaint</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.menuIn} >
                        <TouchableOpacity onPress={this.Click} style={styles.TouchMenu}>
                            <ImageBackground style={styles.BackgroundMenu} source={require('project1/src/image/2-s.png')}>
                                <Text style={styles.TextMenu}>Monitoring</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.menuList}>
                    <View style={styles.menuIn} >
                        <TouchableOpacity onPress={this.Click} style={styles.TouchMenu}>
                            <ImageBackground style={styles.BackgroundMenu} source={require('project1/src/image/3-s.png')}>
                                <Text style={styles.TextMenu}>Gallery</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuIn} >
                        <TouchableOpacity onPress={this.Click} style={styles.TouchMenu}>
                            <ImageBackground style={styles.BackgroundMenu} source={require('project1/src/image/4-s.png')}>
                                    <Text style={styles.TextMenu}>About Us</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menu: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    menuList:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    menuIn:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    TextMenu:{
      color:'#ffffff',
    },
    BackgroundMenu:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'84%',
        height:'100%',
        marginTop: '9%',
        borderRadius: 5,
        overflow: 'hidden',
    },
    TouchMenu:{
        alignItems:'center',
        width:'100%',
        height:'100%',
    },
});



