import styled from '@emotion/styled';

export const ContainerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  width: 320px;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 834px) {
    width: 834px;
    padding-left: 12px;
    padding-right: 12px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 128px;
    padding-right: 128px;
  }
`;
