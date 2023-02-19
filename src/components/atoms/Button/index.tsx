import { StyledButton, StyledCircularProgress } from './styles';

export interface Props {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  isLoading?: boolean;
  extraStyles?: Record<string, string>;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<Props> = ({ isLoading, children, onClick, disabled, extraStyles, type }) => {
  return (
    <StyledButton
      loading={isLoading}
      onClick={onClick}
      disabled={disabled || isLoading}
      style={extraStyles}
      type={type}>
      {!isLoading && children}
      {isLoading && <StyledCircularProgress size={15} />}
    </StyledButton>
  );
};
