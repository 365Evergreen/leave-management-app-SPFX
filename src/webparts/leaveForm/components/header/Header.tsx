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
            gap: 20,
          },
        }}>
        {activePage === 'dashboard' ? (
          <>
            <PrimaryButton iconProps={{ iconName: 'ViewDashboard' }} text="Dashboard" className="btn" onClick={() => setActivePage('dashboard')} />
            <PrimaryButton iconProps={{ iconName: 'Add' }} text="Request Leave" className="btn" onClick={() => setActivePage('request')} />
            <PrimaryButton iconProps={{ iconName: 'History' }} text="Leave History" className="btn" onClick={() => setActivePage('history')} />
          </>
        ) : (
          <DefaultButton iconProps={{ iconName: 'NavigateBack' }} text="Back to Dashboard" className="btn" onClick={() => setActivePage('dashboard')} />
        )}
      </Stack>

      <div style={{ padding: 20 }}>
        <PageComponent />
      </div>
    </>
  );
};

export default Header;
