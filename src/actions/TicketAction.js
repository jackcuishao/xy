/**
 * Created by cuishaojie on 2016/12/9.
 */
import * as types from './ActionType';

export function tabChange(selectedTab){
    return {
        type : types.TAB_CHANGE,
        selectedBtn:selectedTab,
        isShowfanc:('fanc'==selectedTab?true:false)
    }
}

export function cityChange(cityType,visible){
    return {
        type : types.CITY_TYPE,
        cityType:cityType,
        city_modalvisible:visible
    }
}

export function selectCity(cityName, sanzima,cityType) {
    return {
        type:cityType=="chufa"?types.CITY_CHUFA:types.CITY_DIDA,
        cityName:cityName,
        sanzima:sanzima
    }
}

export function dateChange(dateType,visible){
    return {
        type : types.DATE_TYPE,
        dateType:dateType,
        date_modalvisible:visible
    }
}
export function selectDate(dateType, date) {
    return {
        type:dateType=='chufa'?types.DATE_CHUFA:types.DATE_DIDA,
        date:date
    }
}

export function cabinGrade(value,index){
    "use strict";
    return{
        type:types.CABINGRADE,
        cabinGrade:value,
        selectedIndex:index
    }
}

export function isChildren(value){
    "use strict";
    return{
        type:types.ISCHILDREN,
        isChildren:value
    }
}