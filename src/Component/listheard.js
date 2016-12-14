/**
 * Created by cuishaojie on 16/10/19.
 */
import React,{Component} from 'react';
import {
    View,
    TouchableHighlight,
    Text,
    StyleSheet,
    Modal,
    Dimensions,
    DatePickerIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import * as ListActions from '../actions/ListAction'
import * as TicketAction from '../actions/TicketAction'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
var devwidth = Dimensions.get('window').width;
class listheard extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            visiblefla:false,
            changeDate:this.props.Ticket.chufdate,
            orgcitycode:this.props.Ticket.cfszm,
            destcitycode:this.props.Ticket.ddszm,
            flightsType:this.props.Ticket.isShowfanc?1:0,
            backType:0,
            orgDate:this.props.Ticket.chufdate,
        };
        console.log(this);
    }

    //组件加载完之后查询前一天和后一天的最低价
    componentWillMount() {
        this.props.ListAction.agoMinPirce(this.state);
        this.props.ListAction.afterMinPirce(this.state);
    }


    //时间切换查询
    searhFlight(){
        const {selectDate} = this.props.TicketAction;
        const {flightsData} = this.props.ListAction;
        this.setState({visiblefla:false});
        selectDate('chufa',this.state.changeDate);
        flightsData(null);
        this.props.Ticket.chufdate=this.state.changeDate;

        this.props.ListAction.agoMinPirce(this.state);
        this.props.ListAction.afterMinPirce(this.state);

        this.props.ListAction.queryFlights(this.props.Ticket,0);
    }
    //前一天
    AgoDay(){
        this.setState({changeDate:new Date(moment(this.state.changeDate).subtract(1, 'days'))});
        this.setState({orgDate:new Date(moment(this.state.orgDate).subtract(1, 'days'))});
        this.searhFlight();
    }
    //后一天
    AfterDay(){
        this.setState({changeDate:new Date(moment(this.state.changeDate).add(1, 'days'))});
        this.setState({orgDate:new Date(moment(this.state.orgDate).add(1, 'days'))});
        this.searhFlight();
    }

    render(){
        const flightsdata = this.props.List.flightsdata;
        const querydata = this.props.Ticket;
        return(
            <View style={heardstyles.bg}>
                <View style={{flex:2,flexDirection:'row'}}>
                    <View style={heardstyles.leftbut}>
                        {
                            <TouchableHighlight style={{marginLeft:10}}
                                                underlayColor="transparent"
                                                onPress={() => {  this.props.navigator.pop() }}>
                                <Icon
                                    name="chevron-left"
                                    size={20}
                                    color="#ffffff"
                                />
                            </TouchableHighlight>
                        }
                    </View>
                    <View style={heardstyles.titleview}>
                        {
                            <Text style={heardstyles.title}>{this.props.title}</Text>
                        }
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>

                    </View>
                </View>

                <View style={{flex:2,flexDirection:'row'}}>
                    <TouchableHighlight
                        style={{flex:0.5,justifyContent:'center',alignItems:'center'}}
                        underlayColor="transparent"
                        onPress={() => {  this.AgoDay() }}>
                        <Icon
                            name="chevron-left"
                            size={10}
                            color="#ffffff"
                        />
                    </TouchableHighlight>
                    <View style={{flex:2,justifyContent:'center'}}>
                        <Text style={heardstyles.rightText}>前一天</Text>
                        <Text style={heardstyles.rightText}>¥{this.props.List.agoMinPirce}</Text>
                    </View>
                    <TouchableHighlight
                        style={{flex:5,paddingLeft:10,paddingRight:10}}
                        underlayColor="transparent"
                        onPress={()=>this.setState({visiblefla:true})}
                    >
                        <View style={heardstyles.calendar}>
                            <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                                <Icon
                                    name="calendar"
                                    size={15}
                                    color="#54ABDE"
                                />
                            </View>
                            <View style={{flex:8,justifyContent:'center'}}>
                                <Text style={{textAlign:'center',color:'#478BDC',fontSize:12}}>
                                    {moment(querydata.chufdate).format('MM-DD')+" "
                                    +moment(querydata.chufdate).format('dddd')+
                                    " ¥"+(flightsdata?flightsdata.minPrice:0)}
                                </Text>
                            </View>
                            <View style={{flex:2,justifyContent:'center',alignItems:'center',marginTop:-2}}>
                                <Icon
                                    name="chevron-down"
                                    size={15}
                                    color="#54ABDE"
                                />
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={{flex:2,justifyContent:'center'}}>
                        <Text style={heardstyles.leftText}>后一天</Text>
                        <Text style={heardstyles.leftText}>¥{this.props.List.afterMinPirce}</Text>
                    </View>
                    <TouchableHighlight
                        style={{flex:0.5,justifyContent:'center',alignItems:'center'}}
                        underlayColor="transparent"
                        onPress={() => {  this.AfterDay() }}>
                        <Icon
                            name="chevron-right"
                            size={10}
                            color="#ffffff"
                        />
                    </TouchableHighlight>
                </View>

                <Modal transparent={true} animationType={'slide'} visible={this.state.visiblefla}>
                    <View style={heardstyles.modal}>
                        <DatePickerIOS style={{flex:8}}
                                       mode={"date"}   //选择器模式: 'date'(日期), 'time'(时间), 'datetime'(日期和时间)
                                       minimumDate={new Date()}  //最小时间 (这里设置的是当前的时间)
                            //minuteInterval={30} //最小时间间隔 (这里设置的是30分钟)
                                       date={this.state.changeDate}  //默认的时间
                                       timeZoneOffsetInMinutes={8 * 60}
                                       onDateChange={(date)=>this.setState({changeDate:date,orgDate:date})}  //日期被修改时回调此函数
                        />

                        <View style={heardstyles.modalBtn}>
                            <TouchableHighlight
                                onPress={()=>this.searhFlight()}
                                underlayColor={'#75B7BC'}
                                style={heardstyles.Btn}>
                                <Text style={{textAlign:'center'}}>确定</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor={'#FFA597'}
                                onPress={()=>this.setState({visiblefla:false})}
                                style={[heardstyles.Btn,{backgroundColor:'#FFA500'}]}>
                                <Text style={{textAlign:'center'}}>退出</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

            </View>
        )
    }

}

var heardstyles=StyleSheet.create({
    bg:{
        height:80,
        justifyContent:'space-between',
        backgroundColor:"#60ADF0"
    },
    title:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
        color:'#FFFFFF',
        marginTop:20,
    },
    leftbut:{
        flex:1,
        justifyContent:'center',
        marginTop:20,
    },
    titleview:{
        flex:1,
        justifyContent:'center'
    },
    leftText:{
        textAlign:'left',
        fontSize:12,
        fontWeight:'bold',
        color:'#FFFFFF'
    },
    rightText:{
        textAlign:'right',
        fontSize:12,
        fontWeight:'bold',
        color:'#FFFFFF'
    },
    calendar:{
        flex:1,
        backgroundColor:"#FFFFFF",
        borderRadius:4,
        marginBottom:4,
        marginTop:4,
        flexDirection:'row'
    },
    modal:{
        width:devwidth,
        height:200,
        backgroundColor:'#FFFFFF',
        marginTop:75,
        borderRadius:8
    },
    modalBtn:{
        flex:2,
        backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    Btn:{
        flex:1,
        backgroundColor:"#75B7EC",
        justifyContent:'center',
        alignItems:'center'
    }
})
const mapActionCreators = (dispatch)=>({
    ListAction:bindActionCreators(ListActions,dispatch),
    TicketAction:bindActionCreators(TicketAction,dispatch)
});

const mapStateToProps = (state)=>({
    List:state.List,
    Ticket:state.Ticket
});

export default connect (mapStateToProps,mapActionCreators)(listheard)