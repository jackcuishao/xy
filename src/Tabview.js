/**
 * Created by cuishaojie on 2016/12/8.
 */
import React,{Component} from 'react';
import {
    Navigator ,
    View ,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TabBar from 'react-native-smartbar';
import Main from './page/Main'
export default class Tabview extends Component{
    // 构造
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <TabBar>
                <TabBar.Item
                    text="首页"
                >
                    <Main {...this.props}></Main>
                </TabBar.Item>

                <TabBar.Item
                    text="客服"
                >
                    <View style={{flex:1,backgroundColor:'#BFFFA8'}}></View>
                </TabBar.Item>

                <TabBar.Item
                    text="我的"
                >
                    <View style={{flex:1,backgroundColor:'#FFC7A6'}}></View>

                </TabBar.Item>
            </TabBar>
        )
    }
}