import * as React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createStore } from '../redux/store';
import Main from './Main';
import { ILeaveFormProps } from './ILeaveFormProps';
import { useMemo } from 'react';

const LeaveForm: React.FC<ILeaveFormProps> = (props) => {
  const store = useMemo(() => createStore(props.sp), [props.sp]);

  return (
    <Provider store={store}>
      <HashRouter>
        <Main/>
      </HashRouter>
    </Provider>
  );
};

export default LeaveForm;