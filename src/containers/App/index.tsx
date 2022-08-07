import React, { useMemo } from 'react';
import AuthRoutes from 'components/Routes/AuthRoutes';
import AppRoutes from 'components/Routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import SnackBar from 'components/common/SnackBar';
import { useSelector } from 'react-redux';
import { getAuthenticated } from 'store/selector';
import secureStorage from 'utils/secureStorage';
import { SecureStorageEnum } from 'enums/auth';

function App() {
  const isAuthenticateStore = useSelector(getAuthenticated);
  const token = secureStorage.getItem(SecureStorageEnum.ACCESS_TOKEN);

  const isAuthenticated = isAuthenticateStore || token;

  const render = useMemo(() => {
    if (!isAuthenticated) return <AuthRoutes />;
    return <AppRoutes />;
  }, [isAuthenticated]);

  return (
    <div className="App">
      <BrowserRouter>
        {render}
        <SnackBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
