import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const HeaderContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border-bottom: 1px solid ${colors.mainTextColor};
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 17px;
  color: ${colors.secondTextColor};
  padding: 8px 16px;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: ${colors.accentColor};
  }

  @media screen and (min-width: 834px) {
    font-size: 23px;
  }
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '12px'};
  height: ${(props) => props.size || '12px'};
  fill: ${(props) => props.color || '#ffffff'};
  display: inline-block;
  margin-right: 5px;
  box-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;
