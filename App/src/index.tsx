/**
 * file: Project Index file
 * date: 2020-07-21
 * author: Frank
 * lastModify: Frank 2020-07-21
 */
import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from './Route';
// import i18n (needs to be bundled ;))
import './Locales/i18n.ts';
import { Provider } from 'react-redux';
import store from './Store/rootStore';

ReactDOM.render(
    <Provider store={store}>
        <RootRouter />
    </Provider>,
    document.getElementById('root'),
);
