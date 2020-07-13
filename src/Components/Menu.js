import React, { useEffect, useState } from 'react'
import { Text, View, Linking, Alert } from 'react-native'
import { BlurView } from "@react-native-community/blur";
import MenuButton from './MenuButton';


export default Menu = ({ navigation }) => {

    const List = [
        {
            route: 'Dashboard',
            text: 'Dashboard',
        },
        {
            route: 'Help',
            text: 'Yardım',
        },
        {
            route: 'Kvkk',
            text: 'KVKK',
        },
        {
            route: null,
            phone: "02122223344",
            text: 'İletişim',

        },
    ]

    const onPressCall = (phone) => {

        Alert.alert(
            'Arama yapılıyor',
            '0(212)222 33 44 numaralı telefonu aramak üzeresiniz.',
            [
                {
                    text: 'Vazgeç',
                    onPress: () => console.log('Ask me later pressed')
                },
                { text: 'Arama Yap', onPress: () => Linking.openURL(`tel:${phone}`) }
            ],
            { cancelable: false }
        );
    }

    const [visible, setVisible] = useState(true)

    if (visible) {

        return (
            <BlurView style={{
                position: "absolute",
                zIndex: 4,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center'
            }}
                reducedTransparencyFallbackColor="gray"
                blurType="light"
                blurAmount={20}
            >
                <View>

                    {List.map((item, index) => {
                        return (
                            <Text onPress={() => {
                                item.route && navigation.navigate(item.route);
                                item.phone && onPressCall(item.phone);
                                setVisible(false);
                            }} style={{ paddingBottom: 10, fontSize: 30, textAlign: 'left', color: 'green' }} key={index}>{item.text}</Text>
                        )
                    })}
                </View>


                <MenuButton onPressButton={() => setVisible(false)} isOpen={false} />
            </BlurView>
        )

    } else {
        return (
            <>
                <MenuButton onPressButton={() => setVisible(true)} isOpen={true} />
            </>
        )
    }
}

