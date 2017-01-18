import 'autotrack/lib/plugins/outbound-link-tracker';

ga('create', 'UA-84298978-1', 'auto');
ga('require', 'outboundLinkTracker');
ga('send', 'pageview');

import './styles.scss';
// import 'bootstrap';

import React from 'react';
import App from './components/App';

import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById('main'));
