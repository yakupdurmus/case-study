//App Container
import React from 'react'
import { SafeAreaView } from 'react-native'
import Router from './Router'

export default AppContainer = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Router />
        </SafeAreaView>
    )
}