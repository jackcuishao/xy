/**
 * Created by cuishaojie on 16/10/20.
 */
import * as types from './ActionType';
import * as urls from '../util/constructUrl';
import {checkStatus} from '../util/fetchStatus';
import fetch from 'isomorphic-fetch';
import moment from 'moment';

export function queryFlights(queryarg,backType){
    return dispatch => {
        "use strict";
        return fetch(urls.queryFlights(),{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                orgcityname:queryarg.chufa,
                destcityname:queryarg.dida,
                orgcitycode:queryarg.cfszm,
                destcitycode:queryarg.ddszm,
                orgDate:moment(queryarg.chufdate).format('YYYY-MM-DD'),
                destDate:queryarg.isShowfanc?moment(queryarg.fancdate).format('YYYY-MM-DD'):"",
                cwType:queryarg.cabinGrade,
                checkbox1:queryarg.isChildren?1:0,
                flightsType:queryarg.isShowfanc?1:0,
                backType:backType})
        }).then(checkStatus)
            .then(response=>response.json())
            .then(json=>dispatch(flightsData(json)))
            .catch(error=>dispatch(failure(error))).done();
    }
}

export function flightsData(flightsdata){
    "use strict";
    return{
        type:types.FLIGHTSDATA,
        queryFlightdata:flightsdata,
        ibeFlights:flightsdata?flightsdata.ibeFlights:null
    }
}

export function failure(error){
    "use strict";
    return {
        type:types.REQUESTFAILED,
        errordata:error,
        isShowerror:true
    }
}

export function restQuery(){
    "use strict";
    return {
        type:types.RESETQUERY
    }
}

export function agoMinPirce(arg){
    "use strict";
    return dispatch=>{
        return fetch(urls.getagoMigPirce(),{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                orgcitycode:arg.orgcitycode,
                destcitycode:arg.destcitycode,
                flightsType:arg.flightsType,
                backType:arg.backType,
                orgDate:moment(arg.orgDate).subtract(1, 'days').format('YYYY-MM-DD')
            })
        }).then(checkStatus)
        .then(response=>response.text())
        .then(minPrice=>dispatch(setAgoMinPrice(minPrice)))
        .catch(error=>dispatch(failure(error))).done();
    }
}

export function afterMinPirce(arg){
    "use strict";
    return dispatch=>{
        return fetch(urls.getagoMigPirce(),{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                orgcitycode:arg.orgcitycode,
                destcitycode:arg.destcitycode,
                flightsType:arg.flightsType,
                backType:arg.backType,
                orgDate:moment(arg.orgDate).add(1, 'days').format('YYYY-MM-DD')
            })
        }).then(checkStatus)
            .then(response=>response.text())
            .then(minPrice=>dispatch(setAfterMinPrice(minPrice)))
            .catch(error=>dispatch(failure(error))).done();
    }
}



function setAfterMinPrice(minPrice){
    "use strict";
    console.log(minPrice);
    return {
        type:types.AFTERMINPIRCE,
        afterMinPirce:minPrice
    }
}

function setAgoMinPrice(minPrice){
    "use strict";
    console.log(minPrice);
    return {
        type:types.AGOMINPIRCE,
        agoMinPirce:minPrice
    }
}

