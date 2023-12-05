import styled from "styled-components";

export const Container = styled.header`
  height: 100px;
  width: 100%;
  background: #252525;
  padding: 0 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperCart = styled.div`
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  @media (max-width: 360px) {
    position: absolute;
    right: 20px;
    margin-top: 60px;
  }

  svg {
    width: 18px;
    cursor: pointer;
  }

  span {
    margin-left: 10px;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
  }

  span {
    transform: translateY(25%);
    color: rgba(255, 255, 255, 0.7);
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 19px;
  }
`;
