import React, { useState } from 'react';
import {
    View, 
    StyleSheet,
    FlatList
} from 'react-native';


import ColorButton from './ColorButton';
import ColorForm from './ColorForm';
import { useColors } from '../hooks';



export default function ColorList ({ navigation }) {

    const [backgroundColor, setBackgroundColor] = useState("white");
    const {colors, addColor } = useColors();

    return (
        <>
            <ColorForm onNewColor={newColor => addColor(newColor)} />
            <FlatList style={[styles.container]} 
                data={colors}
                renderItem={({ item }) => {
                    return (
                        <ColorButton key={item.id} backgroundColor={item.color} onPress={() => navigation.navigate('Details', {
                            color: item.color
                        })} />
                    )
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex'
    }
})