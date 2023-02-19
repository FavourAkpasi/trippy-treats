import { Logo, Spacer } from '../../../components/atoms';
import { Button } from '../../../components/atoms/Button';
import { InputField } from '../../../components/atoms/InputField/InputField';
import { InputContainer, Line, MainContainer, OtpContainer, Top, otpInput } from './styles';

const Otp = () => {
  return (
    <MainContainer>
      <Top>
        <Logo />
      </Top>
      <OtpContainer>
        <h1>Enter OTP</h1>
        <p className="option">Please Enter the OTP sent to akpasifavour@gmail.com</p>
        <Spacer height="2rem" />
        <InputContainer>
          <InputField
            type="number"
            name="otp1"
            value={''}
            onChange={() => {}}
            autoComplete="off"
            extraStyles={otpInput}
            onKeyUp={{}}
          />
          <Spacer width={20} />
          <InputField
            type="number"
            name="otp1"
            value={''}
            onChange={() => {}}
            autoComplete="off"
            extraStyles={otpInput}
            onKeyUp={{}}
          />
          <Spacer width={20} />
          <InputField
            type="number"
            name="otp1"
            value={''}
            onChange={() => {}}
            autoComplete="off"
            extraStyles={otpInput}
            onKeyUp={{}}
          />
          <Spacer width={20} />
          <Line />
          <Spacer width={20} />
          {/* <InputField
          type="number"
          name="otp4"
          value={formData.otp4}
          onChange={onUpdateFormData}
          autoComplete="off"
          extraStyles={input}
          tabIndex="4"
          onKeyUp={(e: any) => onKeyUp(e)}
        /> */}
          <InputField
            type="number"
            name="otp1"
            value={''}
            onChange={() => {}}
            autoComplete="off"
            extraStyles={otpInput}
            onKeyUp={{}}
          />
          <Spacer width={20} />
          <InputField
            type="number"
            name="otp1"
            value={''}
            onChange={() => {}}
            autoComplete="off"
            extraStyles={otpInput}
            onKeyUp={{}}
          />
          <Spacer width={20} />
          <InputField
            type="number"
            name="otp1"
            value={''}
            onChange={() => {}}
            autoComplete="off"
            extraStyles={otpInput}
            onKeyUp={{}}
          />
        </InputContainer>
        <Spacer height={10} />
        <p className="option">
          <span>Resend OTP</span>
        </p>
        <Spacer height="2rem" />
        <div className="buttonContainer">
          <Button
            // extraStyles={bottonStyle}
            // isLoading={isLoading}
            type="submit"
            // onClick={_joinWaitingList}
            // disabled={disabled}>
          >
            Verify OTP
          </Button>
        </div>
      </OtpContainer>
    </MainContainer>
  );
};

export default Otp;
