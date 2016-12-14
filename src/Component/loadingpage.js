/**
 * Created by cuishaojie on 16/10/19.
 */
import React,{Component} from 'react';
import {
    View,
    TouchableHighlight,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class loadingpage extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    render(){
        return(
            <View style={heardstyles.bg}>
                <Image style={{width:200,height:200}} source={require('../img/fly.gif')}/>
            </View>
        )
    }

}

var heardstyles=StyleSheet.create({
    bg:{
        flex:1,
        backgroundColor:'#D9EFF9',
        justifyContent:'center',
        alignItems:'center'
    }

})