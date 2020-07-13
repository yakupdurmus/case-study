import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions } from 'react-native'

import HTML from 'react-native-render-html';
import Menu from '../Components/Menu';
import Title from '../Components/Title';

const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;
export default class Kvkk extends Component {

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Title>Web Görünümü</Title>
                <ScrollView style={{ flex: 1,paddingHorizontal:10 }}>
                    <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
                </ScrollView>
                <Menu navigation={navigation} />
            </View>
            )
        }
    }
