import * as React from 'react';
import { RouterProps } from 'react-router';
import { ClientApplication } from '@shopify/app-bridge';
import { TitleBar, Redirect } from '@shopify/app-bridge/actions';

interface Props extends RouterProps {
  content: string;
  app: ClientApplication<{}>;
}

export default class Page extends React.Component<Props, never> {
  componentDidMount() {
    const { app, history } = this.props;

    app.subscribe(Redirect.ActionType.APP, ({ path }) => {
      history.replace(path);
    });

    TitleBar.create(app, { title: this.props.content });
  }

  render() {
    return <div>{this.props.content}</div>;
  }
}
