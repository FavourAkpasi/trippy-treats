import { useState } from 'react';
import { HidePassword, ShowPassword } from '../../../assets/Icons';
import { Logo, Spacer } from '../../../components/atoms';
import { Button } from '../../../components/atoms/Button';
import { InputField } from '../../../components/atoms/InputField/InputField';
import { InputCon, MainContainer, OtpContainer, TogglePassword, Top, extraStylesInput } from './styles';

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState<'text' | 'password'>('password');

  const onTogglePassword = () => {
    if (showPassword === 'text') return setShowPassword('password');
    setShowPassword('text');
  };
  return (
    <MainContainer>
      <Top>
        <Logo />
      </Top>
      <OtpContainer>
        <h1>Please choose new password</h1>
        <p className="option">enter a secure password different from balablue, bulabla, bluuuuu</p>
        <Spacer height="1rem" />
        <form className="sign-up">
          <InputCon>
            <span>New Password</span>
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
          <Spacer height="2rem" />
          <InputCon>
            <span>Confirm New Password</span>
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
        </form>
        <Spacer height="3rem" />
        <div className="buttonContainer">
          <Button
            // extraStyles={bottonStyle}
            // isLoading={isLoading}
            type="submit"
            // onClick={_joinWaitingList}
            // disabled={disabled}>
          >
            Reset
          </Button>
        </div>
        <Spacer height="3rem" />
      </OtpContainer>
    </MainContainer>
  );
};

export default NewPassword;
