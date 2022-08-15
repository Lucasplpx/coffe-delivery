import styled, { css } from 'styled-components';

export const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: url('./coffe_home.svg');
  background-repeat: no-repeat, repeat;
  background-size: cover;
  height: 588px;
  padding: 0 10rem;
`;

export const WrapperMainContent = styled.div``;

export const InfoUm = styled.div`
  margin-top: 5.875rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    color: ${({ theme }) => theme['base-title']};
    font-size: 3rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${({ theme }) => theme['base-text']};
  }
`;

export const InfoDois = styled.div`
  flex: 1;
  margin-top: 4.125rem;
`;

const sharedBadge = css`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

export const GroupUm = styled.div`
  display: flex;
  justify-content: space-between;

  div:first-child {
    width: 231px;
    span {
      background: ${({ theme }) => theme['yellow-dark']};
      ${sharedBadge}
    }
  }

  div:last-child {
    width: 294px;
    span {
      background: ${({ theme }) => theme['base-text']};
      width: 32px;
      height: 32px;
      border-radius: 999px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 12px;
    }
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const GroupDois = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  div:first-child {
    width: 231px;
    span {
      background: ${({ theme }) => theme['yellow']};
      width: 32px;
      height: 32px;
      border-radius: 999px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 12px;
    }
  }

  div:last-child {
    width: 294px;
    span {
      background: ${({ theme }) => theme['purple']};
      width: 32px;
      height: 32px;
      border-radius: 999px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 12px;
    }
  }

  div {
    display: flex;
    align-items: center;
  }
`;
