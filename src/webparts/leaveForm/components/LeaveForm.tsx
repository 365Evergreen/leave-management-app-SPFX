import * as React from 'react';
import type { ILeaveFormProps } from './ILeaveFormProps';
import styles from './LeaveForm.module.scss';
import Header from './header/Header';
import { Stack, Text } from '@fluentui/react';

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
          <Stack
            styles={{
              root: {
                marginBottom: 25,
                textAlign: 'center',
              },
            }}
          >
            <Text
              variant="xxLarge"
              styles={{
                root: {
                  color: '#0078D7',
                  fontFamily: 'Segoe UI',
                },
              }}
            >
              Leave Management System
            </Text>

            <Text
              variant="mediumPlus"
              styles={{
                root: {
                  color: '#666',
                  fontFamily: 'Segoe UI',
                },
              }}
            >
              Manage your time off requests efficiently
            </Text>
          </Stack>

          <Header />
        </div>
      </div>
    );
  }
}
