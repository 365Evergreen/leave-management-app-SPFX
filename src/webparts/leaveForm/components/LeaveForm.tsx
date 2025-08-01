import * as React from 'react';
import type { ILeaveFormProps } from './ILeaveFormProps';
import { HashRouter } from 'react-router-dom';
import Main from './Main';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export default class LeaveForm extends React.Component<ILeaveFormProps> {
  public render(): React.ReactElement<ILeaveFormProps> {

    return (
      <>
        <Provider store={store}>
          <HashRouter>
            <Main />
          </HashRouter>
        </Provider>
      </>
    );
  }
}
