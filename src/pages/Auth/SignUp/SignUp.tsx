import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';
import { Google, HidePassword, ShowPassword } from '../../../assets/Icons';
import { Logo, Spacer } from '../../../components/atoms';
import { Button } from '../../../components/atoms/Button';
import { InputField } from '../../../components/atoms/InputField/InputField';
import { LOGIN } from '../../../navigation/routes';
import {
  AltSignUp,
  AuthContainer,
  InputCon,
  Line,
  LineBox,
  MainContainer,
  TogglePassword,
  Top,
  extraStylesBtn,
  extraStylesInput,
  extraStylesInputPhone
} from './styles';

const SignUp = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<'text' | 'password'>('password');

  const onTogglePassword = () => {
    if (showPassword === 'text') return setShowPassword('password');
    setShowPassword('text');
  };
  // const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  // const md = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  return (
    <MainContainer>
      <Top>
        <Logo />
      </Top>
      <AuthContainer>
        <h1>Create an account</h1>
        <p className="option">
          Already have an account? <span onClick={() => navigate(LOGIN)}>Log in</span>
        </p>
        <Spacer height="2rem" />
        <AltSignUp>
          {/* <Button type="button" onClick={() => {}}>
            <Facebook /> Continue With Facebook
          </Button>
          <Spacer height="2rem" width="2rem" /> */}
          <Button type="submit" onClick={() => {}} extraStyles={extraStylesBtn}>
            <Google /> Continue With Google
          </Button>
        </AltSignUp>
        <Spacer height="2rem" />
        <LineBox>
          <Line /> OR <Line />
        </LineBox>

        <form className="sign-up">
          <InputCon>
            <span>Email Address</span>
            <InputField
              type="email"
              name="email"
              onChange={() => {}}
              placeholder="Example@mail.com"
              extraStyles={extraStylesInput}
              required={true}
            />
          </InputCon>
          <Spacer height="1.5rem" />
          <InputCon>
            <span>Phone Number</span>
            {/* <InputField
              type="phone"
              name="phone"
              onChange={() => {}}
              placeholder="Enter your phone number"
              extraStyles={extraStylesInput}
              required={true}
            /> */}
            {/* <MuiPhoneNumber defaultCountry={'us'} onChange={() => {}} /> */}
            <PhoneInput
              country={'ng'}
              value={''}
              onChange={() => {}}
              placeholder={'80XXXXXXXX'}
              autoFormat
              inputStyle={extraStylesInputPhone}
            />
          </InputCon>
          <Spacer height="1.5rem" />
          <InputCon>
            <span>Password</span>
            <InputField
              type={showPassword}
              name="password"
              onChange={() => {}}
              placeholder="Enter your password"
              extraStyles={extraStylesInput}
              required={true}
              action={
                <TogglePassword onClick={onTogglePassword}>
                  {showPassword !== 'text' ? <ShowPassword /> : <HidePassword />}
                </TogglePassword>
              }
            />
          </InputCon>

          <div className="policy">
            <input type="checkbox" name="policy" id="policy" />
            <p className="option">
              I have read, understood and I agree to Madina’s<span> Privacy Policy</span>, and{' '}
              <span>Terms and conditions</span>.
            </p>
          </div>

          <div className="buttonContainer">
            <Button
              // extraStyles={bottonStyle}
              // isLoading={isLoading}
              type="submit"
              // onClick={_joinWaitingList}
              // disabled={disabled}>
            >
              Create Account
            </Button>
          </div>
        </form>
      </AuthContainer>
    </MainContainer>
  );
};

export default SignUp;
