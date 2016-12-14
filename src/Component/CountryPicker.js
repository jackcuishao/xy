/**
 * Created by cuishaojie on 2016/12/9.
 */
import React,{Component} from 'react';
import {
    Modal,
    View,
    Dimensions,
    Text,
    ListView,
    TouchableHighlight
} from 'react-native';
import {Navbar } from 'navbar-native';
import citydata from '../util/cityconfig.json';
import Toast, {DURATION} from 'react-native-easy-toast'
var deviceWidth = Dimensions.get('window').width;
var deviceheight = Dimensions.get('window').height;
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,sectionHeaderHasChanged: (s1, s2) => s1 !== s2});
let _scrollView = null;
var sectionItemCount={};
var totalHeight=0;
export default class CountryPicker extends Component{
    // 构造
      constructor(props) {
        super(props);
          totalHeight = Object.keys(citydata)
              .reduce((carry, key) => {
                  var itemCount = citydata[key].length;
                  carry += itemCount * 40;
                  carry += 30;
                  sectionItemCount[key] = itemCount;
                  return carry;
              }, 0);
          // 初始状态
      this.state = {
            citydata:citydata
          };
      }

    renderRowStyle(rowData){
        const  {selectCity} = this.props.TicketAction;
        const Ticket = this.props.Ticket;
        return(
            <View style={{height:40,backgroundColor:"#FFFFFF"}}>
                <TouchableHighlight activeOpacity={0.5} underlayColor={"#E3E4E8"} onPress={()=>{selectCity(rowData[0],rowData[1],Ticket.ciyType)}}>
                <View>
                <Text style={{lineHeight:30,fontSize:15,marginLeft:10}}>{rowData[0]}</Text>
                <View style={{borderBottomWidth:1,marginRight:30,marginLeft:10,borderBottomColor:"#E5E5E5"}}></View>
                </View>
                </TouchableHighlight>
            </View>
        )
    }
    renderSectionHeaderStyle(sectionData, sectionID){
        return(
            <View style={{height:30,backgroundColor:"#F1F1F1"}}>
            <Text style={{lineHeight:30,fontSize:20,marginLeft:20,color:'#A1A19D'}}>{sectionID}</Text>
            </View>
        )
    }
    scrollbt(){
        _scrollView.scrollTo({y:totalHeight-deviceheight+40});
    }
    _scrollto(section){
        var y = 0;
        var headerHeight = 40;
        y += headerHeight;

        var cellHeight = 40;
        var sectionHeaderHeight = 30;
        var keys = Object.keys(citydata);
        var index = keys.indexOf(section);

        var numcells = 0;
        for (var i = 0; i < index; i++) {
            numcells += citydata[keys[i]].length;
        }
        sectionHeaderHeight = index * sectionHeaderHeight;
        y += numcells * cellHeight + sectionHeaderHeight;
        var maxY = totalHeight - deviceheight + headerHeight;
        y = y > maxY ? maxY : y;
        _scrollView.scrollTo({y:y});
        this.refs.toast.show(section);
    }
    render(){
        const Ticket = this.props.Ticket;
        const  {cityChange} = this.props.TicketAction;
        return (
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={Ticket.city_modalvisible}
            >
                <View>
                    <Navbar style={{marginTop:-20,backgroundColor:"#FFFFFF"}}
                            left={{
                                icon: "ios-arrow-back",
                                label: "Back",
                                onPress: () => {cityChange(Ticket.cityType,false)}
                            }}
                            right={[{
                                icon: "ios-search",
                                onPress: () => {alert('Search!')}
                            },{
                                icon: "ios-menu",
                                onPress: () => {alert('Toggle menu!')}
                            }]}
                    />
                    <ListView
                        ref={(scrollView) => { _scrollView = scrollView; }}
                        dataSource={ds.cloneWithRowsAndSections(this.state.citydata)}
                        renderRow={(rowData) => this.renderRowStyle(rowData)}
                        renderSectionHeader={(sectionData, sectionID)=>this.renderSectionHeaderStyle(sectionData, sectionID)}
                    />
                    <View style={{width:15,height:300,backgroundColor:"#A1A19D",flexDirection:"column",position:'absolute',zIndex:999,opacity:0.5,marginLeft:deviceWidth-15,marginTop:70}}>
                        <TouchableHighlight style={{flex:1,justifyContent:'center'}} onPress={()=>{this._scrollto("A")}}><Text style={{lineHeight:15,textAlign:'center'}}>A</Text></TouchableHighlight>
                        <TouchableHighlight style={{flex:1,justifyContent:'center'}} onPress={()=>{this._scrollto("B")}}><Text style={{lineHeight:15,textAlign:'center'}}>B</Text></TouchableHighlight>
                        <TouchableHighlight style={{flex:1,justifyContent:'center'}} onPress={()=>{this._scrollto("C")}}><Text style={{lineHeight:15,textAlign:'center'}}>C</Text></TouchableHighlight>
                        <TouchableHighlight style={{flex:1,justifyContent:'center'}} onPress={()=>{this._scrollto("D")}}><Text style={{lineHeight:15,textAlign:'center'}}>D</Text></TouchableHighlight>
                        <TouchableHighlight style={{flex:1,justifyContent:'center'}} onPress={()=>{this._scrollto("E")}}><Text style={{lineHeight:15,textAlign:'center'}}>E</Text></TouchableHighlight>
                        <TouchableHighlight style={{flex:1,justifyContent:'center'}} onPress={()=>{this._scrollto("F")}}><Text style={{lineHeight:15,textAlign:'center'}}>F</Text></TouchableHighlight>
                        <TouchableHighlight style={{flex:1,justifyContent:'center'}} onPress={()=>{this._scrollto("G")}}><Text style={{lineHeight:15,textAlign:'center'}}>G</Text></TouchableHighlight>
                    </View>
                    <Toast
                        ref="toast"
                        style={{backgroundColor:'#000000'}}
                        position='center'
                        opacity={0.8}
                        textStyle={{color:'#ffffff'}}
                    />
                </View>
            </Modal>
        );
    }
}