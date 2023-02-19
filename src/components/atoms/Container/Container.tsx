import { styled } from '@mui/material/styles';
import React from 'react';

interface ContainerProps {
  extraStyles?: Record<string, string>;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  children: React.ReactNode;
}

const StyledContainer = styled('div')({
  display: 'flex',
  width: '100%'
});

export const Container: React.FunctionComponent<ContainerProps> = props => {
  const { children, direction = 'column', extraStyles } = props;

  return <StyledContainer style={{ flexDirection: direction, ...extraStyles }}>{children}</StyledContainer>;
};
