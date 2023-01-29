import React from 'react'
import {View, StyleSheet, Button, TextInput, Modal} from 'react-native'

const input = (props) => {
    
  return (
    <Modal visible={props.visible} animationType='slide'>
          <View style={style.Container}>
        <TextInput onChangeText={props.AddTextOn} value={props.text} placeholder='Enter your goal....' style={style.InputContainer}/>
        
        <View style={style.button}>
            <View style={{width:50}}><Button  title ='Add' onPress={props.getData.bind(this, props.text)} /></View>
        
        <Button title='Cancel' color='red' onPress={props.Cancel} style={{width: 100}}/>
        </View>
      </View>
          </Modal>  
    
  )
}

const style = StyleSheet.create({
    Container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        gap:20,
        marginTop:10,
        alignItems:'center',
      },
      InputContainer:{borderBottomColor:'lightblue',
        borderBottomWidth: 1, 
        marginBottom: 5, 
        padding: 5, 
        borderRadius:5,
        width:250
    },
    button:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:20,
        width:130,
    }
})

export default input