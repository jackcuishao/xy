/**
 * Created by cuishaojie on 16/10/19.
 */

import React,{Component} from 'react';
import {
    View,
    TouchableHighlight,
    Text,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class listfooter extends Component{
    render(){
        return(
            <View style={footerstyle.bg}>
                <View style={footerstyle.iconbg}>
                    <Icon
                        name="bar-chart"
                        size={20}
                        color="#ffffff"
                    />
                    <Text style={footerstyle.textColor}>筛选</Text>
                </View>
                <View style={footerstyle.iconbg}>
                    <Icon
                        name="clock-o"
                        size={20}
                        color="#ffffff"
                    />
                    <Text style={footerstyle.textColor}>时间</Text>
                </View>
                <View style={footerstyle.iconbg}>
                    <Icon
                        name="calculator"
                        size={20}
                        color="#ffffff"
                    />
                    <Text style={footerstyle.textColor}>价格</Text>

                </View>
            </View>
        )
    }
}

var footerstyle=StyleSheet.create({
    bg:{
        backgroundColor:'#67768D',
        height:50,
        opacity:0.8,
        flexDirection:'row'
    },
    textColor:{
        color:'#FFFFFF'
    },
    iconbg:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

});

