import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App.jsx';
import About from './components/About.jsx';
import Posts from './components/Posts.jsx';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/about" component={About} />
            <IndexRoute component={Posts} />
        </Route>
    </Router>
), document.getElementById('app'));

var links = document.getElementsByTagName('a');
for (var a = 0; a < links.length; a += 1) {
    links[a].addEventListener('click', function(a, b, c) {
        browserHistory.push('/about');
        return false;
    });
}