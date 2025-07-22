import * as React from 'react';
import type { ILeaveFormProps } from './ILeaveFormProps';
import { HashRouter } from 'react-router-dom';
import Main from './Main';

export default class LeaveForm extends React.Component<ILeaveFormProps> {
  public render(): React.ReactElement<ILeaveFormProps> {

    return (
      <>
      <HashRouter>
        <Main />
      </HashRouter>
      </>
    );
  }
}
