import { useState, useContext, createContext, FunctionComponent, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthApiData, AuthApiDataSuccess } from '../interface/AuthApiData';
import { AvatarApiDataSuccess } from '../interface/AvatarApiData';

import { User } from '../interface/User';
import loginWithCookies from '../helpers/APICalls/loginWithCookies';
import logoutAPI from '../helpers/APICalls/logout';

interface IAuthContext {
  loggedInUser: User | null | undefined;
  updateLoginContext: (data: AuthApiDataSuccess) => void;
  updateAvatarContext: (data: AvatarApiDataSuccess) => void;
  deleteAvatarContext: () => void;
  logout: () => void;
  isLoading: boolean;
}

export const AuthContext = createContext<IAuthContext>({
  loggedInUser: undefined,
  updateLoginContext: () => null,
  updateAvatarContext: () => null,
  deleteAvatarContext: () => null,
  logout: () => null,
  isLoading: true,
});

export const AuthProvider: FunctionComponent = ({ children }): JSX.Element => {
  // default undefined before loading, once loaded provide user or null if logged out
  const [loggedInUser, setLoggedInUser] = useState<User | null | undefined>();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const updateLoginContext = useCallback((data: AuthApiDataSuccess) => {
    setLoggedInUser(data.user);
    setIsLoading(false);
  }, []);

  const updateAvatarContext = (data: AvatarApiDataSuccess) => {
    setLoggedInUser(data.user);
  };

  const deleteAvatarContext = () => {
    if (loggedInUser && loggedInUser.email && loggedInUser.avatar) {
      setLoggedInUser({ ...loggedInUser, avatar: '' });
    }
  };

  const logout = useCallback(async () => {
    // needed to remove token cookie
    await logoutAPI()
      .then(() => {
        history.push('/login');
        setLoggedInUser(null);
      })
      .catch((error) => console.error(error));
  }, [history]);

  // use our cookies to check if we can login straight away
  useEffect(() => {
    const checkLoginWithCookies = async () => {
      await loginWithCookies().then((data: AuthApiData) => {
        if (data.success) {
          updateLoginContext(data.success);
        } else {
          // don't need to provide error feedback as this just means user doesn't have saved cookies or the cookies have not been authenticated on the backend
          setLoggedInUser(null);
          history.push('/login');
        }
      });
    };
    checkLoginWithCookies();
  }, [updateLoginContext, history]);

  return (
    <AuthContext.Provider
      value={{ loggedInUser, updateLoginContext, logout, updateAvatarContext, deleteAvatarContext, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContext {
  return useContext(AuthContext);
}
