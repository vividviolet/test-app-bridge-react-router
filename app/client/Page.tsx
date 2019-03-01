import * as React from 'react';
import { RouterProps } from 'react-router';
import createApp, { LifecycleHook } from '@shopify/app-bridge';
import { TitleBar } from '@shopify/app-bridge/actions';

interface Props extends RouterProps {
  content: string;
}

export default class Page extends React.Component<Props, never> {
  componentDidMount() {
    const { history } = this.props;

    const app = createApp({
      apiKey: 'app_bridge_key',
      shopOrigin: 'shop1.myshopify.io',
    });

    app.hooks.set(LifecycleHook.RedirectAppAction, () => {
      return ({ path }) => {
        history.replace(path);
      };
    });

    TitleBar.create(app, { title: this.props.content });
  }

  render() {
    return <div>{this.props.content}</div>;
  }
}
