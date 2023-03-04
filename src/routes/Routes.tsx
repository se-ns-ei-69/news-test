import React from 'react';
import {
  Routes,
  Route,
  HashRouter
} from 'react-router-dom';
import App from '../App';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import News from '../pages/News';
import ProtectedRoute from './ProtectedRoute';
import { useAppSelector } from '../store/store';

const AppRouter = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  return (
    <HashRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="news" element={<News/>}/>
          <Route
            path="profile"
            element={
              <ProtectedRoute redirectTo="/sign-in" condition={isAuth}>
                <Profile/>
              </ProtectedRoute>
            }/>
          <Route path="*" element={<div>NOT FOUND</div>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
