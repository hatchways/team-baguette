import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import Bookings from './pages/Bookings/Bookings';
import Settings from './pages/Settings/Settings';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import NavBarTop from './components/NavBarTop/NavBarTop';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import './App.css';
import ProfileContainer from './pages/ProfileContainer/ProfileContainer';
import ProfileDetails from './pages/ProfileDetails/ProfileDetails';
import { Listing } from './pages/Listing/Listing';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <NavBarTop />
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <ProtectedRoute exact path="/profile" component={ProfileContainer} />
                <Route exact path="/listing" component={Listing} />
                <Route exact path="/dashboard" component={Dashboard} />
                <ProtectedRoute exact path="/bookings" component={Bookings} />
                <Route path="/profile/:id" component={ProfileDetails} />
                <Route path="/settings" component={Settings} />
                <ProtectedRoute path="*" component={Dashboard} />
              </Switch>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
