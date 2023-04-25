import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { lazy } from 'react';
import { NotFoundPage } from 'pages/NotFoundPage';

const Login = lazy(() => import('pages/Login'));
const SignUp = lazy(() => import('pages/SignUp'));
const Contacts = lazy(() => import('pages/Contacts'));
const Home = lazy(() => import('pages/Home'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={<RestrictedRoute redirectTo={'/'} component={<Login />} />}
        />
        <Route
          path="register"
          element={<RestrictedRoute redirectTo={'/'} component={<SignUp />} />}
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
};
