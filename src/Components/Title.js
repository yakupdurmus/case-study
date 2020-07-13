import React from 'react'
import { Text } from 'react-native'

const Title = ({children}) => {
    return (
        <>
            <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', padding: 10 }}>{children}</Text>
        </>
    )
}

export default Title
