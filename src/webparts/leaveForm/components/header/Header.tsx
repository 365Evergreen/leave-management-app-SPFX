import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Stack, DefaultButton, PrimaryButton, Text } from '@fluentui/react';
import './Header.css';


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation items configuration
  const navItems = [
    {
      key: 'dashboard',
      path: '/',
      iconName: 'ViewDashboard',
      iconColor: '#008272',
      text: 'Dashboard'
    },
    {
      key: 'request',
      path: '/request',
      iconName: 'Add',
      iconColor: '#0078D7',
      text: 'Request Leave'
    },
    {
      key: 'history',
      path: '/history',
      iconName: 'History',
      iconColor: '#037362',
      text: 'Leave History'
    }
  ];

 return (
  <>
    {location.pathname === '/' && (
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
          Leave Management System.
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
    )}

    <Stack horizontal tokens={{ childrenGap: 10 }} styles={{
      root: {
        display: 'flex',
        gap: 10,
        marginBottom: '20px'
      },
    }}>
      {location.pathname === '/' ? (
        navItems.map((item) => (
          <PrimaryButton
            key={item.key}
            onClick={() => navigate(item.path)}
            iconProps={{ iconName: item.iconName }}
            styles={{
              icon: { color: item.iconColor },
              root: {
                backgroundColor: location.pathname === item.path ? '#f3f2f1' : '',
              }
            }}
            text={item.text}
            className="btn"
          />
        ))
      ) : (
        <div className='left-align'>
          <DefaultButton
            iconProps={{ iconName: 'NavigateBack' }}
            styles={{
              icon: { color: '#037362' }
            }}
            text="Back to Dashboard"
            className="btn"
            onClick={() => navigate('/')}
          />
        </div>
      )}
    </Stack>
  </>
);

};

export default Header;