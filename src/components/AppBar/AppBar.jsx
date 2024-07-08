import { HeaderContainer, Navigation, StyledLink } from './AppBAr.styled';

export const AppBar = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorite">Favorite</StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
