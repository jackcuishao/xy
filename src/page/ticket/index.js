/**
 * Created by cuishaojie on 2016/12/9.
 */

import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Dimensions,
    StyleSheet,
    TextInput,
    DatePickerIOS,
    PickerIOS,
    Switch,
    Modal,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  * as TicketAction from '../../actions/TicketAction';
import CountryPicker from '../../Component/CountryPicker';
import DatePicker from '../../Component/DatePicker';
import CustomActionSheet from 'react-native-custom-action-sheet'
import moment from 'moment';
import FlightList from './flightList';
var PickerItemIOS = PickerIOS.Item;
class index extends Component{
    constructor (props){
        super(props);
        this.state = {
            date:"2016-12-13",
            cwTypePickerModalVisible:false
        }
    }

    isBtn(btn){
        const Ticket = this.props.Ticket;
        if(Ticket.selectedBtn == btn){
            return true;
        }else {
            return false;
        }
    }

    selectCity(type,visible){
        const  {cityChange} = this.props.TicketAction;
        cityChange(type,visible);
    }
    _showcwTypePicker () { //切换仓位选择显隐标记
        this.setState({cwTypePickerModalVisible: !this.state.cwTypePickerModalVisible});
    };

    queryFlights(){
        const { navigator } = this.props;
        navigator.push({
            name : '列表',
            component : FlightList,
        });
    }

    render(){
        let devwidth = Dimensions.get('window').width;
        const  {tabChange,dateChange,selectDate} = this.props.TicketAction;
        const Ticket = this.props.Ticket;
        const dateText = (
            <Text
                style={{flex:4.5}}
                //autoFocus={true}
                allowFontScaling={true}
                onPress={()=>{dateChange('chufa',true)}}
            >{moment(Ticket.chufdate).format('YYYY-MM-DD')}</Text>
        )

        let cwTypePickModal =(
            this.state.cwTypePickerModalVisible ?
                <CustomActionSheet
                    modalVisible={this.state.cwTypePickerModalVisible}  //显隐标记
                    onCancel={()=>this._showcwTypePicker()} buttonText={'退出'}>
                    <View style={{backgroundColor:'#FFFFFF',marginBottom:5,borderRadius:8}}>
                        <PickerIOS
                            selectedValue={Ticket.cabinGrade}
                            onValueChange={(cabinGrade,index)=> this.props.TicketAction.cabinGrade(cabinGrade,index)}>
                            <PickerItemIOS
                                key='0'
                                value='舱位不限'
                                label='舱位不限'
                            />
                            <PickerItemIOS
                                key='1'
                                value='经济舱'
                                label='经济舱'
                            />
                            <PickerItemIOS
                                key='2'
                                value='公务/头等舱'
                                label='公务/头等舱'
                            />
                        </PickerIOS>
                    </View>
                </CustomActionSheet> : null
        );

        return (
            <View style={{flex:1,backgroundColor:"#5BABEF"}}>
                <Image style={{width:devwidth,height:250}} source={require('../../img/img_main_3.png')}>
                    <View style={styles.bgView}></View>
                    <View style={styles.btView}>
                        <TouchableHighlight underlayColor={'#FFFFFF'}   style={this.isBtn('danc')?styles.tab_select:styles.tab_def} onPress={()=>{tabChange("danc")}} >
                            <Text style={this.isBtn('danc')?styles.blackfont:styles.whitefont}>单程</Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor={'#FFFFFF'}  style={this.isBtn('fanc')?styles.tab_select:styles.tab_def} onPress={ ()=>{tabChange('fanc')}} >
                            <Text style={this.isBtn('fanc')?styles.blackfont:styles.whitefont}>返程</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{height: 105,backgroundColor:'#FFFFFF'}}>
                        <View style={{flex:1.2,flexDirection:'row'}}>
                            <View style={{height: 35,marginLeft:15,flex:4.5,borderBottomWidth:1,borderColor:'#BCBABA'}}>
                                <TextInput
                                    style={{flex:1}}
                                    placeholder="出发城市"
                                    onFocus={()=>{this.selectCity('chufa',true)}}
                                    value={Ticket.chufa}
                                />
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                                <Icon      //飞机图标
                                    name="plane"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
                                    size={30}   //图片大小
                                    color="#83AFF9"  //图片颜色
                                />
                            </View>

                            <View style={{height: 35,marginRight:15,flex:4.5,borderBottomWidth:1,borderColor:'#BCBABA'}}>
                                <TextInput
                                    style={{flex:1,textAlign:'right'}}
                                    placeholder="抵达城市"
                                    onFocus={()=>{this.selectCity('dida',true)}}
                                    value={Ticket.dida}
                                />
                            </View>

                        </View>
                        <View style={{flex:1.2,flexDirection:'row',alignItems:'center',marginLeft:15,marginRight:15,borderBottomWidth:1,borderColor:'#BCBABA'}}>
                            {dateText}
                            {(
                                Ticket.isShowfanc?(
                                    <View style={{flex:5.5,flexDirection:'row',alignItems:'center'}}>
                                        <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                                            <Icon    //返程图标
                                                name="refresh"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
                                                size={30}   //图片大小
                                                color="#83AFF9"  //图片颜色
                                            />
                                        </View>

                                        <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                                            {(Ticket.fancdate==""?null:
                                                <Icon  //删除图标
                                                    name="remove"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
                                                    size={20}   //图片大小
                                                    color="red"  //图片颜色
                                                    onPress={()=>selectDate("fanc","")}
                                                />)}
                                        </View>
                                        <Text
                                            style={{flex:3.5,textAlign:'right'}}
                                            allowFontScaling={true}
                                            //autoFocus={true}
                                            onPress={()=>{dateChange('fanc',true)}}
                                        >{Ticket.fancdate==""?"":moment(Ticket.fancdate).format('YYYY-MM-DD')}</Text>
                                    </View>
                                ):null
                            )}
                        </View>
                        <View style={{flex:1.2,flexDirection:'row',marginLeft:15,marginRight:15,borderBottomWidth:1,borderColor:'#BCBABA'}}>
                            <TextInput
                                style={{flex:5.5}}
                                placeholder="仓位选择"
                                //autoFocus={true}
                                onFocus={()=>this._showcwTypePicker()}
                                value={Ticket.cabinGrade}
                            />
                            <View style={{flex:2,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                                <Switch onValueChange={(value) => this.props.TicketAction.isChildren(value)}
                                        value={Ticket.isChildren} />
                            </View>
                            <View style={{flex:2.5,justifyContent:'flex-end',flexDirection:'column'}}>
                                <Text>携带儿童</Text>
                                <Text>2-12岁</Text>
                            </View>
                        </View>
                    </View>
                </Image>
                <View style={{flex:9,backgroundColor:'#000'}}>
                    <View style={{flex:2,backgroundColor:'#FFFFFF',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                        <TouchableHighlight underlayColor={'#E55368'} onPress={()=>{this.queryFlights()}} style={{height:40,width:devwidth*0.8,backgroundColor:"#F05050",borderRadius:8,flexDirection:'row',alignItems:'center'}}>
                            <Text style={{flex:1,textAlign:'center'}}>查询航班</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex:8,backgroundColor:'#EEEEEE'}}>
                    </View>
                </View>
                <DatePicker {...this.props}/>
                <CountryPicker {...this.props} />
                {cwTypePickModal}
            </View>
        );
    }
}


var styles=StyleSheet.create({
    bgView:{
        height:40,
        backgroundColor:'black',
        opacity:.5,
        flexDirection:'row',
        marginRight:5,
        marginLeft:5,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        marginBottom:-45,
        marginTop:105
    },
    btView:{
        height:45,
        flexDirection:'row',
        marginRight:5,
        marginLeft:5,
        borderTopLeftRadius:8,
        borderTopRightRadius:8
    },
    tab_select:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        backgroundColor:"#FFFFFF"
    },
    tab_def:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    },
    whitefont:{
        flex:1,
        textAlign:'center',
        color:"#FFFFFF"
    },
    blackfont:{
        flex:1,
        textAlign:'center',
        color:"#000"
    },
    datePickerContainer: {
        flex: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 10,
    },

});
const mapActionCreators = (dispatch)=>({
    TicketAction:bindActionCreators(TicketAction,dispatch)
});

const mapStateToProps = (state)=>({
    Ticket:state.Ticket
})

export default connect (mapStateToProps,mapActionCreators)(index)
