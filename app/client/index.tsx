import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Page from './Page';

function Index(props: any) {
  return <Page content="" {...props} />;
}

function Alpaca(props: any) {
  return <Page content="Alpaca" {...props} />;
}

function Bear(props: any) {
  return <Page content="Bear" {...props} />;
}

function Cat(props: any) {
  return <Page content="Cat" {...props} />;
}

function Dolphin(props: any) {
  return <Page content="Dolphin" {...props} />;
}

function Settings(props: any) {
  return <Page content="Settings" {...props} />;
}

export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/app">Index</Link>
            </li>
            <li>
              <Link to="/alpaca">Alpaca</Link>
            </li>
            <li>
              <Link to="/bear">Bear</Link>
            </li>
            <li>
              <Link to="/cat">Cat</Link>
            </li>
            <li>
              <Link to="/dolphin">Dolphin</Link>
            </li>
            <li>
              <Link to="/app/settings">Settings</Link>
            </li>
          </ul>
        </nav>
        <Route path="/app" exact component={Index} />
        <Route path="/alpaca" component={Alpaca} />
        <Route path="/bear" component={Bear} />
        <Route path="/cat" component={Cat} />
        <Route path="/dolphin" component={Dolphin} />
        <Route path="/app/settings" component={Settings} />
      </div>
    </Router>
  );
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<AppRouter />, root);
