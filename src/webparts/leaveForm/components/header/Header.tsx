import * as React from 'react';
import Dashboard from '../pages/dashboard/Dashboard';
import Request from '../pages/dashboard/request/Request';
import History from '../pages/dashboard/history/History';
import { Stack, DefaultButton, PrimaryButton } from '@fluentui/react';
import './Header.css';


const Header = () => {

  const [activePage, setActivePage] = React.useState('dashboard')

  // Page map: associate page names with components
  const pageMap: Record<string, React.FC> = {
    dashboard: Dashboard,
    request: Request,
    history: History,
  };

  // Select the current page component
  const PageComponent = pageMap[activePage] || Dashboard;

  return (
    <>
      <Stack horizontal tokens={{ childrenGap: 10 }}
        styles={{
          root: {
            display: 'flex',
            gap: 10,
          },
        }}>
        {activePage === 'dashboard' ? (
          <>
            <PrimaryButton
              iconProps={{ iconName: 'ViewDashboard' }}
              styles={{
                icon: {
                  color: '#008272',
                }
              }}
              text="Dashboard"
              className="btn"
              onClick={() => setActivePage('dashboard')}
            />
            <PrimaryButton
              iconProps={{ iconName: 'Add' }}
              styles={{
                icon: {
                  color: '#0078D7',
                }
              }}
              text="Request Leave"
              className="btn"
              onClick={() => setActivePage('request')}
            />
            <PrimaryButton
              iconProps={{ iconName: 'History' }}
              styles={{
                icon: {
                  color: '#037362',
                }
              }}
              text="Leave History"
              className="btn"
              onClick={() => setActivePage('history')}
            />
          </>
        ) : (
          <DefaultButton
            iconProps={{ iconName: 'NavigateBack' }}
            styles={{
              icon: {
                color: '#037362',
              }
            }}
            text="Back to Dashboard"
            className="btn"
            onClick={() => setActivePage('dashboard')}
          />
        )}
      </Stack>
      <Stack style={{ padding: 20 }}>
        <PageComponent />
      </Stack>
    </>
  );
};

export default Header;
