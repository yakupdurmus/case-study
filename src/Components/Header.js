import React from 'react'
import { View, Image,StyleSheet } from 'react-native'

const ImageBox = () => {
    const aspectRatio = 112 / 636;
    const imgWidth = 200;
    const imgHeight = imgWidth * aspectRatio;
    return (
        <View style={styles.imageBox}>
            <Image
                source={require('../Assets/logotype.png')}
                style={{ width: imgWidth, height: imgHeight }}
            />
        </View>



    )
}

export default Header = ({style}) => {
    return (
        <View style={{...styles.headerBox,...style}}>
            <View style={styles.headerLRBox} />
            <ImageBox style={{ flex: 1 }} />
            <View style={styles.headerLRBox} />
        </View>
    )
}

const styles = StyleSheet.create({
    imageBox:{
        padding: 15,backgroundColor:'#fff', borderRadius: 15,
    },
    headerBox:{
        borderRadius: 15, flexDirection: 'row'
    },
    headerLRBox:{
        flex: .5, borderRadius: 15, backgroundColor: '#e2bc4d',
    }
})
