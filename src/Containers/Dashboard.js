import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

import Header from '../Components/Header';
import Bar from '../Components/Bar';
import Menu from '../Components/Menu';

const screenWidth = Dimensions.get('screen').width
const boxSize = screenWidth - 40;
// import Menu from '../Components/Menu'
export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActiveQR: false,
        }
    }
    renderButton = () => {
        return (
            <TouchableOpacity onPress={() => {
                this.setState({ isActiveQR: true })
            }} style={{ justifyContent: 'center', backgroundColor: '#fff', alignItems: 'center', flex: 1, borderRadius: boxSize / 2 }}>
                <Image
                    source={require('../Assets/QR.png')}
                    style={{ width: boxSize / 3, height: boxSize / 3, margin: 10 }}
                />
                <Text style={{ fontSize: 22, color: '#555',fontFamily:'Poppins-Bold' }}>QR</Text>
            </TouchableOpacity>
        )
    }
    renderQR = () => {
        return (
            <QRCodeScanner
                cameraStyle={{ borderRadius: boxSize / 2, overflow: 'hidden', width: boxSize - 40, height: boxSize - 40 }}
                onRead={this.onSuccess}
                flashMode={RNCamera.Constants.FlashMode.torch}
            />
        )
    }
    render() {
        const {navigation} = this.props;
        return (
            <>
                <View style={styles.container}>
                    <Header style={{ zIndex: 2 }} />
                    <View style={{ backgroundColor: '#e2bc4d', marginTop: -20, paddingTop: 20, paddingBottom: 20, borderRadius: 15 }}>
                        <View style={{ width: boxSize, height: boxSize, margin: 20, borderColor: '#fff', borderStyle: 'dashed', borderWidth: 2, borderRadius: boxSize / 2, padding: 20 }}>
                            <View
                                style={{ flex: 1, zIndex: 3, borderRadius: boxSize / 2 }}>
                                {this.state.isActiveQR ? this.renderQR() : this.renderButton()}
                            </View>
                        </View>
                    </View>
                    <Bar />
                    <Menu navigation={navigation} />
                </View>
            </>
        )
    }
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff',
    }

})