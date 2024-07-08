import styled from '@emotion/styled';
import { colors } from '../../utils/styles';

export const Title = styled.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 29px;
  margin-bottom: 50px;
  width: 274px;
  height: 426px;

  &:nth-of-type(4n) {
    margin-right: 0;
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: 14px;
  width: 274px;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
`;

export const TitleItem = styled.p`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;

  font-weight: 500;
  font-size: 16px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;

  color: ${colors.mainTextColor};
`;

export const Button = styled.button`
  margin-top: auto;
  width: 100%;
  padding: 12px 0;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;

  border: none;
  border-radius: 12px;
  background-color: ${colors.accentColor};
  color: ${colors.bgColor};
  cursor: pointer;
  
`;
