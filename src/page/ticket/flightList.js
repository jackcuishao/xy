/**
 * Created by cuishaojie on 16/10/18.
 */
import React,{Component} from 'react'
import {
    View,
    Text,
    ListView,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  * as ListAction from '../../actions/ListAction';
import Listheard from '../../Component/listheard';
import LoadingPage from '../../Component/loadingpage';
import Listfooter from '../../Component/listfooter';
import BookingPage from './bookingPage';
let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
class flightList extends Component{
    constructor(props) {
        super(props);
        this.state={
            cehi:'ceshi'
        }
        console.log(this);
    }
    componentWillMount() {
        this.props.ListAction.queryFlights(this.props.Ticket,0);
    }
    toDetail(){
        const navigator = this.props.navigator;
        navigator.push({
            name:"预订页面",
            component : BookingPage,
            param:{

            }
        });
    }
    _renderRow(rowData, sectionID, rowID, highlightRow){
        return (
            <TouchableOpacity onPress={()=>{this.toDetail()}}>
                <View style={liststyle.listbg} >
                    <View style={{flex:4,marginTop:5,flexDirection:'row'}}>
                        <View style={{flex:4,borderRadius:8,flexDirection: 'row'}}>
                            <View style={liststyle.listview}>
                                <View>
                                    <Text style={[liststyle.listText,{color:'black'}]}>
                                        {rowData.departTime}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={liststyle.btlistText}>
                                        {rowData.orgShortairport+rowData.depTerm}
                                    </Text>
                                </View>
                            </View>
                            <View style={liststyle.listview}>
                                <View>
                                    <Text style={{textAlign:'center'}}>
                                        {rowData.stopCount!='1'?'经停':''}
                                    </Text>
                                </View>
                                <View style={{borderTopWidth:1,borderColor:'#ccc'}}></View>
                            </View>
                            <View style={liststyle.listview}>
                                <View>
                                    <Text style={[liststyle.listText,{color:'black'}]}>
                                        {rowData.arriveTime}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={liststyle.btlistText}>
                                        {rowData.destShortairport+rowData.arrTerm}
                                    </Text>
                                </View>
                            </View>
                            <View style={[liststyle.listview,{marginRight:5}]}>
                                <View>
                                    <Text style={[liststyle.listText,{color:'orange'}]}>
                                        ¥{rowData.cabinInfos[0].fPrice1}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={liststyle.btlistText}>
                                        {rowData.cabinInfos[0].leveltype}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={liststyle.listend}>
                        <View>
                            <Text style={[liststyle.btlistText,{marginLeft:10,textAlign:'left'}]}>
                                {rowData.filghtName+rowData.flightNo+" | 机型"+rowData.planeCode}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const ibeFlights =this.props.List.ibeFlights;
        const flightsdata=this.props.List.queryFlightdata;
        const querydata = this.props.Ticket;
        return (
            <View style={{flex:1}}>
                <Listheard title={'去: '+querydata.chufa+'→'+querydata.dida}
                           main={this.props.List}
                           Main={this.props.Ticket}
                           querydata={querydata} flightsdata={flightsdata?flightsdata:false} navigator={this.props.navigator}/>
                {ibeFlights ?
                    <ListView style={{backgroundColor:'#E0E0E0',marginBottom:-50}}
                              dataSource={ds.cloneWithRows(ibeFlights)}
                              renderRow={(rowData) => this._renderRow(rowData)}
                    /> : <LoadingPage/>
                }
                <Listfooter/>
            </View>
        );
    }
}

var liststyle=StyleSheet.create({
    listbg:{
        height:75,
        borderRadius:8,
        backgroundColor:'#FFFFFF',
        marginTop:5,
        marginLeft: 5,
        marginRight: 5
    }
    ,
    listText:{
        textAlign:'center',
        fontSize:18
    },
    btlistText:{
        textAlign:'center',
        fontSize:12,
        color: '#999',
    },
    listview:{
        flex:3,
        justifyContent:'center'
    },
    listend:{
        flex:1,
        marginBottom:5,
        marginRight:5,
        marginLeft: 5
    }
})
const mapActionCreators = (dispatch)=>({
    ListAction:bindActionCreators(ListAction,dispatch)
});

const mapStateToProps = (state)=>({
    List:state.List,
    Ticket:state.Ticket
})

export default connect (mapStateToProps,mapActionCreators)(flightList)