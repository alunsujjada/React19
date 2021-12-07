import React, { Component } from 'react';
import {View, Text} from 'react-native';

class Header extends Component {
   
    render() { 
        return (  
            <View>
                <Text>Selamat Datang {this.props.nama}</Text>
            </View>
        );
    }
}
 
export default Header;