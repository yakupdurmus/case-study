import React from 'react';
import { View, Image } from 'react-native'
export default Bar = () => {
    return (
        <View style={{ marginTop: 40 }}>
            <View style={{ width: '90%', height: 5, borderRadius: 3, backgroundColor: '#f1f1f1', marginVertical: 10, marginHorizontal: 20 }} />
            <View style={{ position: 'absolute', top: 0, left: 0, width: '20%', height: 5, borderRadius: 3, backgroundColor: '#cae4c7', marginVertical: 10, marginHorizontal: 20 }} />

            <View style={{ position: 'absolute', top: -3, right: 10, width: 30, height: 30, borderRadius: 15, backgroundColor: '#cae4c7', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../Assets/okay.png')} style={{ width: 13, height: 13 }} />
            </View>

        </View>
    )
}