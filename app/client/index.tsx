import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createApp from '@shopify/app-bridge';
import { History } from '@shopify/app-bridge/actions';
import Page from './Page';

const app = createApp({
  apiKey: 'app_bridge_key',
  shopOrigin: 'shop1.myshopify.io',
});

function Index(props: any) {
  return <Page content="" {...props} app={app} />;
}

function Alpaca(props: any) {
  return <Page content="Alpaca" {...props} app={app} />;
}

function Bear(props: any) {
  return <Page content="Bear" {...props} app={app} />;
}

function Cat(props: any) {
  return <Page content="Cat" {...props} app={app} />;
}

function Dolphin(props: any) {
  return <Page content="Dolphin" {...props} app={app} />;
}

function Settings(props: any) {
  return <Page content="Settings" {...props} app={app} />;
}

function LinkWrapper({ path, content }: any) {
  const historyAction = History.create(app);

  function updateHistory() {
    historyAction.dispatch(History.Action.REPLACE, path);
  }

  return (
    <Link to={path} onClick={updateHistory}>
      {content}
    </Link>
  );
}

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <LinkWrapper path="/app" content="Index" />
          </li>
          <li>
            <LinkWrapper path="/alpaca" content="Alpaca" />
          </li>
          <li>
            <LinkWrapper path="/bear" content="Bear" />
          </li>
          <li>
            <LinkWrapper path="/cat" content="Cat" />
          </li>
          <li>
            <LinkWrapper path="/dolphin" content="Dolphin" />
          </li>
          <li>
            <LinkWrapper path="/app/settings" content="Settings" />
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
  );
}

export default function AppRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<AppRouter />, root);
