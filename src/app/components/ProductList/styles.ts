import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0;
`;

export const List = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
  gap: 20px;
`;

export const Categories = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 20px;

  button {
    all: unset;
    font-size: 1.25rem;
    border-radius: 5px;
    padding: 2px 10px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    font-family: Montserrat;

    &.active {
      background-color: #252525;
      color: #fff;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  height: 220px;
  min-width: 150px;
  width: 21%;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
  padding-top: 10px;

  img {
    min-height: 75px;
    height: 75px;
    max-width: 75px;
  }

  @media (max-width: 430px) {
    height: 220px;
    width: 45%;
    margin-top: 25px;
  }

  span {
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    border-radius: 5px;
    background: #373737;
    height: fit-content;
    padding: 3px 5px;
    color: #fff;
    margin-left: auto;
    margin-top: 10px;
    margin-right: 5px;
  }

  h2 {
    color: #2c2c2c;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    text-align: start;
    box-sizing: border-box;
    width: 100%;
    text-overflow: ellipsis;
    flex: 1;
    overflow-y: hidden;
    max-height: 30%;
    padding: 5px;
  }

  button {
    all: unset;
    width: 100%;
    margin: auto 0 0 0;
    box-sizing: border-box;
    padding: 5px 0;
    border-radius: 0px 0px 8px 8px;
    background: #252525;
    color: #fff;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-right: 10px;
    }
  }
`;
