/**
 * Created by cuishaojie on 2016/12/9.
 */
import * as types from '../actions/ActionType';
import moment from 'moment';
const btnInitselet={
    selectedBtn:'danc',//选中的单/返程按钮
    isShowfanc:false,//是否显示返程
    ciyType:"chufa",//选择城市类型
    city_modalvisible:false,//城市选择modal
    chufa:"上海",//出发城市
    cfszm:"",//出发地三字码
    dida:"北京",//目的地
    ddszm:"",//目的地三字码
    dateType:"chufa",//时间类型
    date_modalvisible:false,//时间MODAL框
    chufdate:new Date(),//出发时间
    fancdate:moment(new Date()).add(3,'d'),//抵达时间
    cabinGrade:"舱位不限",
    selectedIndex:0,
    isChildren:false,
}

export default function Ticket(state = btnInitselet, action = {}) {
    switch (action.type){
        case types.TAB_CHANGE:
            return Object.assign(
                {},state,{
                    selectedBtn:action.selectedBtn,
                    isShowfanc:action.isShowfanc
                }
            );
            break;
        case types.CITY_TYPE:
            return Object.assign({},state,{
                ciyType:action.cityType,
                city_modalvisible:action.city_modalvisible
            });
            break;
        case types.CITY_CHUFA:
            return Object.assign({},state,{
                chufa:action.cityName,
                cfszm:action.sanzima,
                city_modalvisible:false
            });
            break;
        case types.CITY_DIDA:
            return Object.assign({},state,{
                dida:action.cityName,
                ddszm:action.sanzima,
                city_modalvisible:false
            });
            break;
        case types.DATE_TYPE:
            return Object.assign({},state,{
                dateType:action.dateType,
                date_modalvisible:action.date_modalvisible
            });
            break;
        case types.DATE_CHUFA:
            return Object.assign({},state,{
                chufdate:action.date,
                date_modalvisible:false
            });
            break;
        case types.DATE_DIDA:
            return Object.assign({},state,{
                fancdate:action.date,
                date_modalvisible:false
            });
            break;
        case types.CABINGRADE:
            return Object.assign(
                {},state,{
                    cabinGrade:action.cabinGrade,
                    selectedIndex:action.index
                }
            );
            break;
        case types.ISCHILDREN:
            return Object.assign(
                {},state,{
                    isChildren:action.isChildren
                }
            );
            break;
        default:
            return state;
    }
}

