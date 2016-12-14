/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './src/reducers/index';
import {
    AppRegistry
} from 'react-native';
import NavigatorPage from './src/NavigatorPage';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class xy extends Component {
    render() {
        return (
            <Provider store={store} >
              <NavigatorPage></NavigatorPage>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('xy', () => xy);
