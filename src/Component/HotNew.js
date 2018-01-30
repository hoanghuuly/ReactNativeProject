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

export default class HotNew extends Component<{}> {
    constructor(props){
        super(props);
        this.state={
            list:[
                {key:'1',hinh:require('project1/src/image/hinh/1.jpg')},
                {key:'2',hinh:require('project1/src/image/hinh/2.jpg')},
                {key:'3',hinh:require('project1/src/image/hinh/3.jpg')},
                {key:'4',hinh:require('project1/src/image/hinh/4.jpg')},
                {key:'5',hinh:require('project1/src/image/hinh/5.jpg')},
                {key:'6',hinh:require('project1/src/image/hinh/6.jpg')},
                {key:'7',hinh:require('project1/src/image/hinh/7.jpg')},
                {key:'8',hinh:require('project1/src/image/hinh/8.jpg')},
                {key:'9',hinh:require('project1/src/image/hinh/9.jpg')},
                {key:'10',hinh:require('project1/src/image/hinh/10.jpg')},
            ]
        }
    }
    render() {
        return (
            <View style={styles.background} >
                <Text style={styles.hotnew}>Hot New</Text>
                <FlatList
                    horizontal={true}
                    data={this.state.list}
                    renderItem={({item})=>
                        <View style={styles.list}>
                            <ImageBackground style={styles.img} source={item.hinh}>
                                <Text style={styles.textimg}>{item.key}</Text>
                            </ImageBackground>
                        </View>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        width:'100%',
    },
    hotnew:{
        fontWeight:'bold',
        marginLeft:20,
    },
    list:{
        paddingLeft:10,
        marginTop:10,
    },
    img:{
        width: sizeWidth(70),
        height:120,
        borderRadius: 10,
        overflow:'hidden',
        shadowOffset:{width: 20,height: 20},
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },
    textimg:{
        backgroundColor:'rgba(0,0,0,0.1)',
        marginTop:100,
        color:'#ffffff',
        paddingLeft:10,
    },
});
