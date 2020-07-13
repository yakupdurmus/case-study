import React from 'react'
import { Text } from 'react-native'

const Title = ({children}) => {
    return (
        <>
            <Text style={{ fontSize: 30, fontFamily:'Poppins-Bold', textAlign: 'center', padding: 10 }}>{children}</Text>
        </>
    )
}

export default Title
