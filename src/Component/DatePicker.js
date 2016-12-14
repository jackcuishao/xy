/**
 * Created by cuishaojie on 2016/12/13.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableHighlight
} from 'react-native';

var CalendarPicker = require('react-native-calendar-picker');
export default class CalendarPicker2 extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态

      }

    render(){
        const weekdays = [
            '星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'
        ]
        const months = [
            '1月', '2月', '3月', '4月', '5月', '6月', '7月',
            '8月', '9月', '10月', '11月', '12月'
        ]
        const Ticket = this.props.Ticket;
        const  {dateChange,selectDate} = this.props.TicketAction;
        return(
            <Modal animationType={"slide"}
                   transparent={true}
                   visible={Ticket.date_modalvisible}
            >
            <View style={styles.container}>
                <CalendarPicker
                    previousTitle={"上个月"}
                    nextTitle={"下个月"}
                    weekdays={weekdays}
                    months={months}
                    minDate={new Date()}
                    selectedDate={Ticket.chufdate}
                    onDateChange={(date)=>{selectDate(Ticket.dateType,date)}}
                    screenWidth={Dimensions.get('window').width}
                    selectedBackgroundColor={'#5ce600'} />
                <TouchableHighlight activeOpacity={0.5} underlayColor={"#E3E4E8"} onPress={()=>{dateChange(Ticket.dateType,false)}} style={{height:40,width:Dimensions.get('window').width,backgroundColor:"#FFFFFF",borderRadius:8,flexDirection:'row',alignItems:'center',marginTop:-50}}>
                    <Text style={{flex:1,textAlign:'center'}}>取消</Text>
                </TouchableHighlight>
            </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    selectedDate: {
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#000',
    }
});