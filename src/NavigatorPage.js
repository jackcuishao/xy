/**
 * Created by cuishaojie on 2016/12/8.
 */
import React,{Component} from 'react';
import {
    Navigator ,
    View ,
    Text
} from 'react-native';
import Tabview from './Tabview'
import ViewPagerPage from './ViewPagerPage'

export default class NavigatorPage extends Component{
    constructor (props){
        super(props);
    }
    state = {
        showViewPage: false  //选择器显隐标记,
    };
    render (){
        let defaultName = '首页';
        let defaultComponent = this.state.showViewPage?ViewPagerPage:Tabview;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...this.props} {...route.params} navigator={navigator} />
                }}
            />
        )
    }

}

