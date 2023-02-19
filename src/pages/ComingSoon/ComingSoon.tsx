import { Theme, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import validator from 'validator';
import { LeftBg, WhatsApp } from '../../assets/Icons';
import { Logo, Spacer } from '../../components/atoms';
import { Button } from '../../components/atoms/Button';
import { InputField } from '../../components/atoms/InputField/InputField';
import { useMutationHook } from '../../network/mutations/useMutationHook';
import { joinWaitingList } from '../../network/services/joinWaitingList';
import { extraStyles, extraStylesBtn, Left, MainContainer, Right } from './styles';

export const ComingSoon = () => {
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [showChat, setShowChat] = useState(true);

  const inputStyle = sm ? { height: '3.2rem' } : extraStyles;
  const bottonStyle = sm ? { height: '3.2rem' } : extraStylesBtn;

  const { mutateAsync, isLoading } = useMutationHook(joinWaitingList);

  const _joinWaitingList = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    await mutateAsync(email);
    setEmail('');
  };

  useEffect(() => {
    if (email !== '' && validator.isEmail(email)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email]);

  return (
    <MainContainer container>
      <Left item sm={12} md={8}>
        <div className="content">
          <Logo />
          <Spacer height="3rem" />
          <div className="intro">
            <div className="dash" />
            <h2>Our website will launch soon ..</h2>
          </div>
          <Spacer height="1.2rem" />
          <h1>We're building an Online Supermarket for all your needs.</h1>
          <Spacer height="1.8rem" />
          <p>
            Madina Lifestyle Supermarket is the first Family discount store in Nigeria, managed by a family who realizes
            that shopping doesn't have to break the bank and offers incredible deals every day to make shopping quick,
            reasonable, and enjoyable.
          </p>
          <Spacer height="3.2rem" />
          <h3>Get notified when we launch!</h3>
          <Spacer height="1.3rem" />
          <form className="joinWaitingList">
            <div className="inputContainer">
              <InputField
                value={email}
                type="email"
                name="email"
                onChange={e => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your email address"
                extraStyles={inputStyle}
                required={true}
              />
            </div>
            <div className="buttonContainer">
              <Button
                extraStyles={bottonStyle}
                isLoading={isLoading}
                type="submit"
                onClick={_joinWaitingList}
                disabled={disabled}>
                Join Waiting List
              </Button>
            </div>
          </form>
        </div>
        {md && (
          <div>
            <Spacer height="3rem" />
            <LeftBg className="paymentMethodMobile" />
          </div>
        )}

        <Spacer height="7rem" />
        <h4>Copyright © Madina 2023. All rights reserved</h4>
      </Left>

      <Right item sm={12} md={4}>
        <div className="displayBoard">
          <div className="centerBox">
            <LeftBg className="paymentMethod" />
          </div>
        </div>
      </Right>

      <div className="whatAppCon">
        <a href="https://wa.me/+2348186177465?text=Hello" className="whatsApp" target="_blank" rel="noreferrer">
          <WhatsApp className="whatsAppIcon" />
        </a>
        {showChat && (
          <div className="relative">
            <button onClick={() => setShowChat(false)}>X</button>
            <div className="chatCon">
              <p>Hi 👋 You can place an Order.</p>
              <div className="triangle" />
            </div>
          </div>
        )}
      </div>
    </MainContainer>
  );
};
