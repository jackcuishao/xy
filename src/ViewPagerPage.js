/**
 * Created by cuishaojie on 2016/12/7.
 */
import {StyleSheet, View, Text} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import { Button } from 'native-base';
import Tabview from './Tabview'
export default class ViewPagerPage extends Component {
    constructor (props){
        super(props);
    }
    goTabview(){
        const { navigator } = this.props;
        navigator.push({
            name : 'main',
            component : Tabview,
        });
    }
    render() {
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager  style={{flex:1}}
                    indicator={this._renderDotIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                    </View>
                    <View style={{backgroundColor:'#1AA094',justifyContent:'center',alignItems:'center'}}>
                        <View>
                            <Button success style={{width:200}} onPress={()=>{this.goTabview()}}> Success </Button>
                        </View>
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }
    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }
}
var style = StyleSheet.create({
    me:{
        backgroundColor:'#7BE7FF',
    }
})