import styled from "styled-components";

export const Container = styled.div<{ show: boolean }>`
  width: 30%;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  background: #252525;
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 50;
  gap: 1.75rem;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 3rem;
  transform: translateX(101%);
  transition: all 0.2s linear;
  @media (max-width: 768px) {
    width: 60%;
  }

  ${({ show }) =>
    show
      ? {
          transform: " translateX(0)",
        }
      : null};
`;

export const CartHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const CloseCart = styled.button`
  all: unset;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000;
  display: grid;
  place-items: center;
  box-shadow: 0px 2px 8px 0px rgba(255, 255, 255, 0.3);
  color: #fff;
`;

export const ItemCart = styled.div`
  width: 379px;
  height: 95px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  position: relative;

  @media (max-width: 640px) {
    width: 259px;
  }

  img {
    height: 75px;
    max-width: 75px;
  }
`;

export const RemoveProduct = styled.button`
  all: unset;
  border-radius: 50%;
  background-color: #000;
  display: grid;
  place-items: center;
  z-index: 4;
  top: -11px;
  right: -11px;
  color: #fff;
  width: 23px;
  height: 23px;
  position: absolute;
  box-shadow: 0px 2px 8px 0px rgba(255, 255, 255, 0.3);
  cursor: pointer;
`;

export const ProductName = styled.h2`
  color: #2c2c2c;
  font-family: monospace;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  width: 30%;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const CartQuantity = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #000;
    font-family: Montserrat;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &:first-child {
      position: absolute;
      transform: translateY(-100%);
    }
  }

  div {
    display: flex;
    align-items: center;
    border-radius: 4px;
    border: 0.3px solid #bfbfbf;
    div {
      height: 10px;
      border-right: 0.3px solid #bfbfbf;

      &:last-child {
        border-left: 0.3px solid #bfbfbf;
      }
    }

    span {
      color: #000;
      font-family: Montserrat;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      padding: 0 0.4rem;
      line-height: normal;
    }

    button {
      all: unset;
      padding: 0 0.5rem;
      cursor: pointer;

      &:disabled {
        color: rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

export const ProductPrice = styled.span`
  color: #000;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  width: 25%;
  display: flex;
  justify-content: end;
`;

export const CartFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
  gap: 2rem;

  div {
    display: flex;
    justify-content: space-between;

    span {
      color: #fff;
      font-family: Montserrat;
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 15px;
    }
  }

  button {
    all: unset;
    width: 140%;
    height: 100px;
    background: #1e1e1e;
    transform: translateX(-15%);
    text-align: center;
    color: #fff;
    font-family: Montserrat;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
