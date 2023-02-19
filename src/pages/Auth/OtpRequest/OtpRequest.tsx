import { Logo, Spacer } from '../../../components/atoms';
import { Button } from '../../../components/atoms/Button';
import { InputField } from '../../../components/atoms/InputField/InputField';
import { InputCon, MainContainer, OtpContainer, Top, extraStylesInput } from './styles';

const OtpRequest = () => {
  return (
    <MainContainer>
      <Top>
        <Logo />
      </Top>
      <OtpContainer>
        <h1>Please Enter your email address</h1>
        <p className="option">an otp verification will be sent to your email</p>
        <Spacer height="1rem" />
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
      </OtpContainer>
    </MainContainer>
  );
};

export default OtpRequest;
