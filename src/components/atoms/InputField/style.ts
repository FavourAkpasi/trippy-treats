import { styled } from '@mui/material';
import { COLORS } from '../../../theme/color';

export const StyledInput = styled('input')<{
  icon?: any;
}>(({ icon }) => ({
  outline: 'none',
  border: '1px solid #CCCCCC',
  borderRadius: '6px',
  color: '#483D3D',
  width: '100%',
  padding: icon ? '1rem .5rem' : '1rem 1.5rem',
  fontSize: '1.1rem',
  fontWeight: '400',
  '&::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0
  },
  '&::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0
  },
  'input[type=number]': {
    '-moz-appearance': 'textfield'
  },
  '&:focus': {
    border: `1px solid ${COLORS.MainBlue} !important`
  }
}));

export const StyledImg = styled('img')({
  marginInlineStart: '1.5em'
});

export const ErrorType = styled('p')({
  color: `${COLORS.MainRed}!important`,
  fontSize: '1rem',
  fontWeight: '300'
});

export const Label = styled('label')({
  fontSize: '1.1rem',
  fontWeight: '400',
  marginBottom: '0.5rem'
});

export const SecLabel = styled('p')({
  fontSize: '1rem',
  fontWeight: '300',
  marginBottom: '1rem',
  color: COLORS.MildGray
});

export const ActionContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  borderRadius: '6px'
});

export const Action = styled('div')({
  position: 'absolute',
  right: '1rem',
  top: '0',
  padding: '2px',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});
