/**
 * Created by cuishaojie on 2016/12/8.
 */
import React,{Component} from 'react';
import {
    View,
    Image,
    TouchableHighlight,
    StyleSheet,
    TextInput,
    DatePickerIOS,
    PickerIOS,
    Switch,
    ScrollView,
    Dimensions
} from 'react-native'
import {Container, Navbar } from 'navbar-native';
import { IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
var deviceWidth = Dimensions.get('window').width;
import Menucom from '../Component/menucom';
export default class Main extends Component{
    constructor (props){
        super(props);
    }
    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }
    render(){
        let viewpager = (
            <View style={{height:100}}>
                <IndicatorViewPager automaticallyAdjustContentInsets={false}  style={{flex:1}}
                                     indicator={this._renderDotIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                    </View>
                </IndicatorViewPager>
            </View>
        )

        return (
            <View>
                {/*bgColor="transparent"*/}
                <Navbar style={{marginTop:-10}}
                        left={{
                            icon: "ios-arrow-back",
                            label: "Back",
                            onPress: () => {alert('Go back!')}
                        }}
                        right={[{
                            icon: "ios-search",
                            onPress: () => {alert('Search!')}
                        },{
                            icon: "ios-menu",
                            onPress: () => {alert('Toggle menu!')}
                        }]}
                />
                {viewpager}
                <ScrollView automaticallyAdjustContentInsets={false}>
                    <Menucom {...this.props}></Menucom>
                    <Menucom></Menucom>
                </ScrollView>
            </View>
        );
    }
}



