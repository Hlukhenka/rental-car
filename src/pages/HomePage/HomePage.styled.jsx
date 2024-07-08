import styled from '@emotion/styled';
import { colors } from '../../utils/styles';

export const Container = styled.div`
  text-align: center;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 19px;

  text-shadow:
    0 0 0px ${colors.accentColor},
    0 0 50px ${colors.accentColor},
    0 0 0px ${colors.accentColor},
    0 0 0px ${colors.accentColor},
    0 0 0px ${colors.accentColor};

  @media screen and (min-width: 834px) {
    margin-bottom: 20px;
    font-size: 28px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
    font-size: 34px;
  }
`;
export const Highlight = styled.span`
  color: ${colors.accentColor};
`;

export const Description = styled.h2`
  margin-bottom: 30px;
  font-weight: 400;
  font-size: 16px;
  color: ${colors.secondTextColor}
  margin-bottom: 20px; 

  @media screen and (min-width: 834px) {
    margin-bottom: 30px; 
  font-size: 23px;
  }
`;

export const SubTitle = styled.h2`
margin-bottom: 15px;
  font-weight: 500;
  font-size: 17px;
  color: ${colors.secondTextColor}
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    margin-bottom: 20px;
    font-size: 28px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
    font-size: 34px;
  }
`;

export const List = styled.ul`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  list-style: inside;
  text-align: start;
  gap: 10px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;

    gap: 15px;
    list-style: none;
    text-align: center;
  }
`;

export const Item = styled.li`
  padding: 5px;
  line-height: 1.3;

  @media screen and (min-width: 834px) {
    font-size: 23px;
    border-bottom: 1px solid ${colors.accentColor};
  }

  @media screen and (min-width: 1440px) {
    font-size: 30px;
  }
`;

export const SubList = styled.ul`
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SubListItem = styled.li`
  width: 310px;
  padding: 15px 25px;
  border: 1px solid ${colors.accentColor};
  border-radius: 10px;

  box-shadow: inset 0 0 10px #3470ff;

  @media screen and (min-width: 1440px) {
    width: 354px;
    font-size: 23px;
  }
`;
export const Button = styled.button``;
