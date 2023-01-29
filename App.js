import {useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import Output from './components/output';
import Input from './components/input';


export default function App() {

  
  const [text, setText] = useState('')
  const [goal, setGoal] = useState([])

  const [bool, setBool] = useState(false)
  

  const getData = ({text: string}) => {
    

    if (typeof text === 'string') {
      setGoal([...goal, {id: Date.now().toString(), value: text }])
      setText('')
      setBool(false)
      console.log(goal)
    } else {
      console.error('Error: Data being added to the goal array is not a string')
    }
  }

  const AddText=(text)=>{
    setText(text)
  }


    const removeItem = id =>{
      setGoal(currentGoal => { 
        return currentGoal.filter((x) => x.id !== id)
      })
      }




  return (
    <View style={style.screen}>
      <View style={style.Button}>
      <Button title='Add Goal' onPress={()=>setBool(true)} />
      
      </View>
      

      <Input text={text} AddTextOn={AddText} getData={getData} visible={bool} Cancel={()=> setBool(false)} />
    
     <View>
      <FlatList   
      keyExtractor={(item, index)=> item.id}
      data ={goal} renderItem={
      itemData=>(<Output text={itemData.item.value}  id={itemData.item.id} RemoveItems={removeItem} />) 
      }/>
      </View> 

    

 

    </View>
  );
  
}


const style = StyleSheet.create({
  screen:{
    padding: 30
  
},





List:{
  backgroundColor:'lightblue',
  padding:10,
  borderRadius:15,
  marginBottom:10,

  
},
Button:{
    marginTop:100
}

});


