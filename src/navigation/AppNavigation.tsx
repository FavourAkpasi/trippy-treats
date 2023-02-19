import { Route, Routes } from 'react-router-dom';
import { ComingSoon } from '../pages';
import Login from '../pages/Auth/Login/Login';
import NewPassword from '../pages/Auth/NewPassword/NewPassword';
import Otp from '../pages/Auth/Otp/Otp';
import OtpRequest from '../pages/Auth/OtpRequest/OtpRequest';
import SignUp from '../pages/Auth/SignUp/SignUp';
import Home from '../pages/Home/Home';
import { ANY_ROUTE, COMING_SOON, HOME, LOGIN, NEW_PASSWORD, OTP, OTP_REQUEST, SIGN_UP } from './routes';

export const AppNavigation = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={COMING_SOON} element={<ComingSoon />} />
      <Route path={SIGN_UP} element={<SignUp />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={OTP} element={<Otp />} />
      <Route path={OTP_REQUEST} element={<OtpRequest />} />
      <Route path={NEW_PASSWORD} element={<NewPassword />} />

      <Route path={ANY_ROUTE} element={<div>NOT FOUND PAGE</div>} />
    </Routes>
  );
};
