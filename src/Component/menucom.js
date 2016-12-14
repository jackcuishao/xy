/**
 * Created by cuishaojie on 2016/12/9.
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
    Dimensions,
    Text
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
var deviceWidth = Dimensions.get('window').width;
import Index from '../page/ticket/index'
export default class menucom extends Component{
      // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

      goticket(){
          const { navigator } = this.props;
          navigator.push({
              name : '列表',
              component : Index,
          });
      }
      render(){
          return(
              <View style={style.menu}>
                  <View style={style.menu1}>
                      <View style={style.menu1left}>
                          <View style={style.menu1left1}></View>
                          <View style={{flex:1,backgroundColor:"#86A067"}}></View>
                      </View>
                      <View style={{flex:1,backgroundColor:"#A07C60",borderRightWidth:1,borderRightColor:"#FFFFFF"}}>
                          <View style={{flex:1,backgroundColor:"#86A067",borderBottomWidth:1,borderBottomColor:"#FFFFFF"}}></View>
                          <View style={{flex:1,backgroundColor:"#86A067",borderBottomWidth:1,borderBottomColor:"#FFFFFF"}}></View>
                          <View style={{flex:1,backgroundColor:"#86A067"}}></View>
                      </View>
                      <View style={{flex:1,backgroundColor:"#A07C60",borderTopRightRadius:8}}>
                          <View style={{flex:1,backgroundColor:"#86A067",borderBottomWidth:1,borderBottomColor:"#FFFFFF",borderTopRightRadius:8}}></View>
                          <View style={{flex:1,backgroundColor:"#86A067",borderBottomWidth:1,borderBottomColor:"#FFFFFF"}}></View>
                          <View style={{flex:1,backgroundColor:"#86A067"}}></View>
                      </View>
                  </View>
                  <View style={style.menu2}>
                      <View style={{flex:1,borderRightWidth:1,borderRightColor:"#FFFFFF"}}>
                          <View style={{flex:2,justifyContent:'center',alignItems:'center' }}>
                              <Icon      //飞机图标
                              name="plane"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
                              size={78}   //图片大小
                              color="#83AFF9"  //图片颜色
                              onPress={()=>{this.goticket()}}
                              />
                              <Text>机票</Text>
                          </View>
                      </View>
                      <View style={{flex:1,backgroundColor:"#A07C60",borderRightWidth:1,borderRightColor:"#FFFFFF"}}>
                          <View style={{flex:1,backgroundColor:"#86A067",borderBottomWidth:1,borderBottomColor:"#FFFFFF"}}></View>
                          <View style={{flex:1,backgroundColor:"#86A067"}}></View>
                      </View>
                      <View style={{flex:1,backgroundColor:"#A07C60",borderTopRightRadius:8}}>
                          <View style={{flex:1,backgroundColor:"#86A067",borderBottomWidth:1,borderBottomColor:"#FFFFFF"}}></View>
                          <View style={{flex:1,backgroundColor:"#86A067"}}></View>
                      </View>
                  </View>
                  <View style={style.menu3}>
                      <View style={{flex:1,backgroundColor:"#A07C60",borderRightWidth:1,borderRightColor:"#FFFFFF"}}>

                      </View>
                      <View style={{flex:1,backgroundColor:"#A07C60",borderRightWidth:1,borderRightColor:"#FFFFFF"}}>

                      </View>
                      <View style={{flex:1,backgroundColor:"#A07C60"}}>

                      </View>
                  </View>
                  <View style={style.menu4}>
                      <View style={{flex:1,backgroundColor:"#A06B18",borderRightWidth:1,borderRightColor:"#FFFFFF",borderBottomLeftRadius:8}}>
                          <View style={{flex:1,backgroundColor:"#86A067",borderBottomWidth:1,borderBottomColor:"#FFFFFF"}}></View>
                          <View style={{flex:1,backgroundColor:"#86A067",borderBottomLeftRadius:8}}></View>
                      </View>
                      <View style={{flex:1,backgroundColor:"#A07C60",borderRightWidth:1,borderRightColor:"#FFFFFF"}}>
                          <View style={{flex:1,backgroundColor:"#86A067",borderBottomWidth:1,borderBottomColor:"#FFFFFF"}}></View>
                          <View style={{flex:1,backgroundColor:"#86A067"}}></View>
                      </View>
                      <View style={{flex:1,backgroundColor:"#A07C60",borderBottomRightRadius:8}}>
                          <View style={{flex:1,backgroundColor:"#86A067",borderBottomWidth:1,borderBottomColor:"#FFFFFF"}}></View>
                          <View style={{flex:1,backgroundColor:"#86A067",borderBottomRightRadius:8}}></View>
                      </View>
                  </View>
              </View>
          )
      }
}

var style = StyleSheet.create({
    menu:{
        width:deviceWidth-10,
        backgroundColor:'#FFFFFF',
        marginBottom:5,
        height:380,
        flex:1,
        borderRadius:8,
        marginBottom:5,
        marginLeft:5,
        marginRight:5,
        marginTop:5,
        flexDirection:'column'
    },
    menu1:{
        flex:3,
        backgroundColor:'#66FFA1',
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        marginBottom:3,
        flexDirection:'row'
    },
    menu2:{
        flex:2,
        backgroundColor:'#7BE7FF',
        marginBottom:3,
        flexDirection:'row'
    },
    menu3:{
        flex:1,
        backgroundColor:'#7BE7FF',
        marginBottom:3,
        flexDirection:'row'
    },
    menu4:{
        flex:2,
        backgroundColor:'#C9B2FF',
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
        flexDirection:'row'
    },
    menu1left:{
        flex:1,
        backgroundColor:"#A06B18",
        borderRightWidth:1,
        borderRightColor:"#FFFFFF",
        borderTopLeftRadius:8,
        flexDirection:"column"
    },
    menu1left1:{
        flex:2,
        backgroundColor:"#86A067",
        borderBottomWidth:1,
        borderBottomColor:"#FFFFFF",
        borderTopLeftRadius:8
    }
})
