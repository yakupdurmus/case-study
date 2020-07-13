import React, { Component } from 'react'
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import Menu from '../Components/Menu';
import Title from '../Components/Title'

const List = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    }
]

export class Help extends Component {

    renderItem(item, index) {
        return (
            <TouchableOpacity onPress={() => { alert(item.text) }} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ flex: .9, padding: 10 }} key={index}>{item.text}</Text>
                <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../Assets/arrow.png')} />
            </TouchableOpacity>
        )
    }
    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex:1}}>
                <Title>Yardım</Title>
                <FlatList
                    data={List}
                    renderItem={({ item, index }) => this.renderItem(item, index)}
                    keyExtractor={({ item, index }) => index}
                />
                <Menu navigation={navigation} />
            </View>
        )
    }
}

export default Help
