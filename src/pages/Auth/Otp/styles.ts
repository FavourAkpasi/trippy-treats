import { Box, Grid, styled } from '@mui/material';
import { COLORS } from '../../../theme/color';

export const MainContainer = styled(Grid)`
  background: #fff;
  width: 100%;
  height: 100vh;
`;
export const Top = styled(Box)`
  padding: 2.5rem;
  box-shadow: 2px 0px 4px rgba(226, 226, 226, 0.25);
`;
export const OtpContainer = styled(Grid)`
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
`;
export const InputContainer = styled(Box)`
  display: flex;
  justify-content: flex-start;
`;
export const Line = styled(Box)`
  height: 0;
  border: 2px solid ${COLORS.MainGray};
  width: 1rem;
  margin: auto 0;
`;

export const otpInput = {
  borderRadius: '0.5rem',
  border: `2px solid ${COLORS.MainGray}`,
  width: '3.75rem',
  height: '4rem',
  padding: '0.8em',
  textAlign: 'center'
};
