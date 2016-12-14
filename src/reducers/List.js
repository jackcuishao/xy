/**
 * Created by cuishaojie on 16/10/20.
 */
import * as types from '../actions/ActionType';
const InitState={
    agoMinPirce:0,
    afterMinPirce:0,
    orgtime:'',
    company:'',
    code:'',
    time:''
}
export default function List(state = InitState, action = {}){
    switch (action.type){
        case types.FLIGHTSDATA:
            return Object.assign(
                {},state,{
                    queryFlightdata:action.queryFlightdata,
                    ibeFlights:action.ibeFlights
                }
            );
            break;
        case types.REQUESTFAILED:
            return Object.assign(
                {},state,{
                    errordata:action.errordata,
                    isShowerror:action.isShowerror
                }
            );
            break;
        case types.RESETQUERY:
            return Object.assign(
                {},state,{
                    queryFlightdata:null,
                    ibeFlights:null
                }
            );
        break;
        case types.AGOMINPIRCE:
            return Object.assign(
                {},state,{
                    agoMinPirce:action.agoMinPirce
                }
            );
        break;
        case types.AFTERMINPIRCE:
            return Object.assign(
                {},state,{
                    afterMinPirce:action.afterMinPirce
                }
            );
        break;
        default :
            return state;
    }
}
