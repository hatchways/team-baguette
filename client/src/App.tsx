import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import Bookings from './pages/Bookings/Bookings';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import NavBarTop from './components/NavBarTop/NavBarTop';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ProfileContainer from './pages/ProfileContainer/ProfileContainer';
import ProfileDetails from './pages/ProfileDetails/ProfileDetails';
import ChatScreen from './pages/ChatScreen/ChatScreen';
import { Listing } from './pages/Listing/Listing';
import Normal404Page from './pages/404/Normal404';
import './App.css';


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
                <Route exact path="/listing" component={Listing} />
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <ProtectedRoute exact path="/bookings" component={Bookings} />
                <ProtectedRoute path="/edit/profile" component={ProfileContainer} />
                <Route path="/profile/:id" component={ProfileDetails} />
                <Route path="/conversations" component={ChatScreen} />

                <Redirect exact from="/" to="/dashboard"/>
                <Route path="*" component={Normal404Page} />
                
              </Switch>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
