import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Stack, DefaultButton, PrimaryButton } from '@fluentui/react';
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
      <Stack horizontal tokens={{ childrenGap: 10 }} styles={{
        root: {
          display: 'flex',
          gap: 10,
          marginBottom:'20px'
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
          <DefaultButton
            iconProps={{ iconName: 'NavigateBack' }}
            styles={{
              icon: { color: '#037362' }
            }}
            text="Back to Dashboard"
            className="btn"
            onClick={() => navigate('/')}
          />
        )}
      </Stack>
    </>
  );
};

export default Header;