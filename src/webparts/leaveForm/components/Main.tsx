import * as React from 'react';
import styles from './LeaveForm.module.scss';
import Header from './header/Header';
import { Stack, Text } from '@fluentui/react';
import AppRoutes from './routes/AppRoutes'; 

const Main = () => {
    return(
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
                  color: 'var(--theme-color)',
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
          <AppRoutes />
        </div>
      </div>
    )
}

export default Main;
