import { Grid, styled } from '@mui/material';
import { breakpoints } from '../../theme/theme';
import { COLORS } from './../../theme/color';

export const MainContainer = styled(Grid)`
  height: 100vh;
  background: linear-gradient(180deg, #e5efff 0%, rgba(229, 239, 255, 0.262661) 83.7%, rgba(229, 239, 255, 0) 100%);
  overflow-x: hidden;
  position: relative;

  .relative {
    position: absolute;
    top: -50%;
    left: -10%;
    button {
      border: none;
      background-color: ${COLORS.White};
      position: absolute;
      top: -1rem;
      right: -1.5rem;
      cursor: pointer;
      font-size: 0.5rem;
      font-weight: 800;
      height: 1rem;
      width: 1rem;
      border-radius: 0.5rem;

      @media (max-width: ${breakpoints.md}px) {
        background-color: ${COLORS.MainBlue};
        color: ${COLORS.White};
        .triangle {
          border-bottom: 1rem solid ${COLORS.MainBlue};
        }
      }
    }
  }

  .whatAppCon {
    position: fixed;
    right: 2rem;
    bottom: 2rem;

    .chatCon {
      position: absolute;
      background-color: ${COLORS.White};
      top: -50%;
      right: 100%;
      padding: 1rem;
      border-radius: 0.5rem;
      border-bottom-right-radius: 0;

      p {
        white-space: nowrap;
      }

      .triangle {
        position: absolute;
        right: -2%;
        bottom: -10%;
        width: 0;
        height: 0;
        border: 0.5rem solid transparent;
        border-top: 0;
        border-bottom: 1rem solid ${COLORS.White};
        transform: rotate(135deg);
        z-index: -1;
      }

      @media (max-width: ${breakpoints.md}px) {
        background-color: ${COLORS.MainBlue};
        color: ${COLORS.White};
        .triangle {
          border-bottom: 1rem solid ${COLORS.MainBlue};
        }
      }
    }

    .whatsApp {
      position: relative;
      cursor: pointer;
      background-color: ${COLORS.MainGreen};
      padding: 0.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4rem;
      width: 4rem;
      height: 4rem;

      .whatsAppIcon {
        width: 80%;
      }

      &:hover {
        transform: scale(0.95);
        transition: 0.5s;
      }

      &:after {
        content: '.';
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        border-radius: 4rem;
        background-color: ${COLORS.MainGreen};
        transform: scale(1.1);
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.8;
        animation: blink2 1s linear infinite;

        @keyframes blink2 {
          0% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1.1);
          }
        }
      }

      &:before {
        content: '.';
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        border-radius: 4rem;
        background-color: ${COLORS.MainGreen};
        transform: scale(1.1);
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.5;
        animation: blink 1s linear infinite;

        @keyframes blink {
          0% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1.25);
          }
          100% {
            transform: scale(1.1);
          }
        }
      }

      &:hover::after {
        display: none;
      }
      &:hover::before {
        display: none;
      }
    }
  }
`;

export const Left = styled(Grid)`
  padding: 4rem;
  position: relative;

  .intro {
    display: flex;
    align-items: center;
    .dash {
      width: 32px;
      height: 4px;
      background: ${COLORS.MainBlue};
      border-radius: 2px;
      margin-right: 1rem;
    }
  }
  .content {
    width: 90%;
    max-width: 800px;
  }
  h2 {
    font-weight: 400;
    font-size: 1.5rem;
    color: ${COLORS.SecBlack};
  }

  h1 {
    font-weight: 600;
    font-size: 2.875rem;
    line-height: 4rem;
    color: #272d4e;
  }

  p {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 2.125rem;
    color: #94a2b3;
  }

  .joinWaitingList {
    display: flex;

    .inputContainer {
      flex: 2;
    }
    .buttonContainer {
      flex: 1;
    }
  }

  .paymentMethodMobile {
    width: 100%;
    height: 100%;
  }

  h4 {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${COLORS.SecBlack};
  }

  @media (max-width: ${breakpoints.md}px) {
    padding: 3rem 2rem;

    .content {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.sm}px) {
    padding: 2rem 1.5rem;

    .joinWaitingList {
      display: block;

      .inputContainer {
        margin-bottom: 0.8rem;
      }
      .buttonContainer {
        width: 50%;
      }
    }
  }
`;

export const Right = styled(Grid)`
  padding: 3em 2em;
  width: 100%;
  position: relative;
  background-color: ${COLORS.DarkBlue};

  .displayBoard {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .centerBox {
    position: relative;
    width: 34rem;
    height: 34rem;
  }

  .paymentMethod {
    position: absolute;

    left: -12rem;
    top: -5rem;
    width: 34rem;
    height: 34rem;
  }

  @media (max-width: ${breakpoints.md}px) {
    background: linear-gradient(-180deg, #e5efff 0%, rgba(229, 239, 255, 0.262661) 83.7%, rgba(229, 239, 255, 0) 100%);
    display: none;
  }
`;

export const extraStyles = {
  borderTopRightRadius: '0px',
  borderBottomRightRadius: '0px',
  height: '3.2rem'
};

export const extraStylesBtn = {
  borderTopLeftRadius: '0px',
  borderBottomLeftRadius: '0px',
  height: '3.2rem'
};
