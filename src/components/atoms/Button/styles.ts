import { CircularProgress, styled } from '@mui/material';
import { COLORS } from '../../../theme/color';

export const StyledButton = styled('button', {
  shouldForwardProp: (prop: string) => prop !== 'loading'
})<{ loading?: boolean }>(({ theme, loading }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  backgroundColor: theme.palette.primary.main,
  padding: '1rem',
  width: '100%',
  border: 'none',
  borderRadius: '6px',
  whiteSpace: 'nowrap',
  fontSize: '1.2rem',
  fontewight: '400',
  cursor: loading ? 'wait' : 'pointer',
  opacity: loading ? 0.7 : 1,
  '&:hover': {
    transform: 'scale(1.005)',
    opacity: '0.6'
  },
  '&:active': {
    transform: 'scale(0.98)',
    /* Scaling button to 0.98 to its original size */
    boxShadow: '3px 2px 22px 1px rgba(0, 0, 0, 0.24)',
    /* Lowering the shadow */

    opacity: '0.7',
    transition: '0.5s'
  },
  '&:disabled': {
    PointerEvent: 'none',
    opacity: '0.6',
    transform: 'none',
    /* Scaling button to 0.98 to its original size */
    boxShadow: 'none',
    /* Lowering the shadow */
    transition: 'none !important'
  }
}));

export const StyledCircularProgress = styled(CircularProgress)({
  color: COLORS.White
});
