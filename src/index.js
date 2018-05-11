import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './action/rootSaga';
import {createStore,applyMiddleware} from 'redux';
import './index.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let initState = {
    stagesData: {},   //计划详情里面的数据
};
const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducer, initState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
