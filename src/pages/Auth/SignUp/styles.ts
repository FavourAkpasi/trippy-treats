import { Box, Grid, styled } from '@mui/material';
import { COLORS } from '../../../theme/color';
import { breakpoints } from '../../../theme/theme';

export const MainContainer = styled(Grid)`
  background: #fff;
  width: 100%;
`;
export const Top = styled(Box)`
  padding: 2.5rem;
  box-shadow: 2px 0px 4px rgba(226, 226, 226, 0.25);
`;
export const AuthContainer = styled(Grid)`
  /* border: 1px solid black; */
  max-width: 40rem;
  margin: 3rem auto 0;
  padding: 0 2rem;

  h1 {
    line-height: 54px;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 150%;
  }
  .option {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    color: #483d3d;
    margin: 1rem 0;
    span {
      font-weight: 500;
      color: ${COLORS.SecGreen};
      cursor: pointer;
    }
  }
  .sign-up {
    padding: 2rem 0 5rem;
  }
  .policy {
    margin-bottom: 2rem;
    display: flex;
    justify-content: start;

    input {
      margin-right: 1rem;
      accent-color: ${COLORS.MainGreen};
    }
  }
`;
export const AltSignUp = styled(Box)`
  display: flex;
  button {
    font-style: normal;
    font-weight: 700;
    font-size: 15.4483px;
    line-height: 26px;
    text-align: center;
    color: #fff;
    svg {
      margin-right: 2rem;
    }
  }
  @media (max-width: ${breakpoints.sm}px) {
    flex-direction: column;
  }
`;
export const LineBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
`;
export const Line = styled(Box)`
  height: 0;
  border: 0.5px solid #e9e5e5;
  width: 100%;
  margin: 0 1rem;
`;
export const InputCon = styled(Box)`
  display: flex;
  flex-direction: column;
  span {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin: 0.5rem 0;
  }
`;
export const TogglePassword = styled(Box)`
  width: 1.5rem;
  cursor: pointer;
  height: 1.5rem;
  display: flex;
  align-items: center;
`;

export const extraStylesBtn = {
  color: '#180101',
  background: '#fff',
  border: '2px solid #f2f2f6'
};

export const extraStylesInput = {
  alignItems: 'center',
  padding: '12px',
  gap: '10px',
  width: '100%',
  height: '56px',
  background: '#F1F1F1',
  opacity: '0.8',
  border: '1px solid #CCCCCC'
};

export const extraStylesInputPhone = {
  ...extraStylesInput,
  paddingLeft: '3rem'
};
