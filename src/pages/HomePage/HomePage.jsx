import {
  Container,
  Title,
  Highlight,
  SubTitle,
  Description,
  List,
  Item,
  SubList,
  SubListItem,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <Title>
        Welcome to <Highlight>CarRental</Highlight> Ukraine!
      </Title>

      <Description>
        We offer the most convenient and reliable car rental service across
        Ukraine. With us, you can find the perfect car for any need: from
        business trips to family vacations.
      </Description>

      <SubTitle>
        Why Choose Us<Highlight>?</Highlight>
      </SubTitle>

      <List>
        <Item>
          <Highlight>Wide Range of Cars:</Highlight> We offer a diverse fleet of
          vehicles, from economy to luxury class.
        </Item>
        <Item>
          <Highlight>Transparent Terms:</Highlight> No hidden fees or unpleasant
          surprises. All rental terms are clearly stated.
        </Item>
        <Item>
          <Highlight>Convenience and Comfort:</Highlight> Book a car with just a
          few clicks, and our offices are located in major cities across
          Ukraine.
        </Item>
        <Item>
          <Highlight>24/7 Support:</Highlight> We are always available to assist
          you in any situation.
        </Item>
      </List>

      <SubTitle>
        How It Works<Highlight>?</Highlight>
      </SubTitle>

      <SubList>
        <SubListItem>
          Choose a Car: Browse our catalog and find a car that suits your needs.
        </SubListItem>
        <SubListItem>
          Book Online: Specify the rental date and time, fill in the necessary
          information, and confirm your booking.
        </SubListItem>
        <SubListItem>
          Pick Up the Car: Collect the car from one of our offices or request
          delivery to a specified location.
        </SubListItem>
      </SubList>
    </Container>
  );
};

export default HomePage;
