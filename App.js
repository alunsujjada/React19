import React, { Component } from 'react';
import {View,Text, Button,TextInput} from 'react-native';
import Header from './Components/Header';
import Footer from './Components/Footer';

class App extends Component {

  state ={
    num : 1
  }

  tambah = () =>{
    this.setState({
      num : this.state.num + 1
    })
  }

  kurang = () =>{
    let val = this.state.num

    if(val>0){
      this.setState({
        num : this.state.num -1
      })
    }
    
  }

  render() { 
    return (  
      <View>
          <Header nama="Alun"/>
          <Header nama="Budi"/>
          <View>
            <Text>Hello React Native</Text>
          </View>
          <View>
            <Text>Hello World</Text>
          </View>
          <Footer/>

          <Button title="+" onPress={this.tambah}/>
          <TextInput value={String(this.state.num)}/>
          <Button title="-" onPress={this.kurang}/>
      </View>
    );
  }
}
 
export default App;
