import * as React from 'react';
import type { ILeaveFormProps } from './ILeaveFormProps';
import styles from './LeaveForm.module.scss';
import Header from './header/Header';

export default class LeaveForm extends React.Component<ILeaveFormProps> {
  public render(): React.ReactElement<ILeaveFormProps> {

    return (
      <div className={styles.fullPageContainer}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>Leave Management System</h1>
          {/* <p>Manage your time off requests efficiently</p> */}

          <Header />
        </div>
      </div>
    );
  }
}
