import 'autotrack/lib/plugins/outbound-link-tracker';

ga('create', 'UA-84298978-1', 'auto');
ga('require', 'outboundLinkTracker');
ga('send', 'pageview');

import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import './styles.scss';
import App from './components/App';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('main')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NewApp = require('./components/App').default;
        render(NewApp);
    });
}
