
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
  import {sizeHeight, sizeWidth} from './src/Component/Size';
  import Header from './src/Component/header'
  import Menu from './src/Component/Menu'
  import HotNew from "./src/Component/HotNew";
  import Footer from "./src/Component/Footer";

export default class App extends Component<{}> {

  render() {
    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Header/>
            </View>

            <View style={styles.body}>
                <View style={styles.menu}>
                    <Menu/>
                </View>

                <View style={styles.hot}>
                    <View style={styles.hotNew}>
                        <HotNew/>
                    </View>
                    <View style={styles.footer}>
                        <Footer/>
                    </View>
                </View>
            </View>

        </View>
    )
  }
}

const styles = StyleSheet.create({
    background: {
        flex:1,
    },
    header: {
        flex:1,
    },
    body: {
        flex:10,
    },
    menu: {
      flex:4/10,
    },
    hot:{
        flex:6/10,
        marginTop:10,
    },
    hotNew:{
        flex:1,
    },
    footer:{
        flex:1,
    },
});
