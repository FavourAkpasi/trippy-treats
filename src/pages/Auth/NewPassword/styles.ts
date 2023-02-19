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
      color: ${COLORS.MainBlue};
      cursor: pointer;
    }
  }
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
