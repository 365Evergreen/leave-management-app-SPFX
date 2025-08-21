import * as React from 'react';
import styles from './LeaveForm.module.scss';
import Header from './header/Header';
import AppRoutes from './routes/AppRoutes'; 
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { fetchLeaveRequests } from '../redux/leaveSlice';
import { AppDispatch } from '../redux/store';

const Main = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  React.useEffect(() => {
    dispatch(fetchLeaveRequests()); // Fetch once when app loads
  }, [dispatch]);
  
    return(
        <div className={styles.fullPageContainer}>
          <Header />
          <AppRoutes />
      </div>
    )
}

export default Main;
