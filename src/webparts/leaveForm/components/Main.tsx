import * as React from 'react';
import styles from './LeaveForm.module.scss';
import Header from './header/Header';
import AppRoutes from './routes/AppRoutes'; 

const Main = () => {
    return(
        <div className={styles.fullPageContainer}>
          <Header />
          <AppRoutes />
      </div>
    )
}

export default Main;
