import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const output = (props) => {
    


  return (
    
    <TouchableOpacity   onPress={props.RemoveItems.bind(this, props.id)}>
    <View  style={style.Content}>
      <Text>{props.text}</Text>

    </View>
    </TouchableOpacity>

  )
}

const style = StyleSheet.create({
    Content:{
        padding:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:100,
        
      }
})


export default output