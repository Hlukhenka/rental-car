import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCars } from '../../redux/operations';
import { selectCars, selectIsLoading } from '../../redux/selectors';
import {
  Button,
  Description,
  ImageWrapper,
  Item,
  List,
  TitleItem,
} from './Catalog.styled';
// import SearchBar from '../../components/SearchBar/SearchBar';
import brand from '../../data/makes.json';
import price from '../../data/price.json';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const dispatch = useDispatch();
  const allCars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  useEffect(() => {
    setCars(allCars);
    setFilteredCars(allCars);
  }, [allCars]);

  const getAddress = (address) => {
    const addressParts = address.split(', ');
    const country = addressParts[addressParts.length - 1];
    const city = addressParts[addressParts.length - 2];
    return { city, country };
  };

  const handleSubmit = (e) => {
    const { elements } = e.currentTarget;
    e.preventDefault();
    const brand = elements.brand.value;
    const price = elements.price.value;
    const from = elements.from.value;
    const to = elements.to.value;

    console.log(elements.price.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>for makes</label>
        <select defaultValue="" name="brand">
          <option value="" disabled>
            Choose
          </option>
          {brand.map((el, id) => {
            return <option key={id}>{el}</option>;
          })}
        </select>

        <label>price</label>
        <select defaultValue="" name="price">
          <option value="" disabled>
            Choose
          </option>
          {price.map((el, id) => {
            return <option key={id}>{el}</option>;
          })}
        </select>

        <label>milage</label>
        <input placeholder="from" name="from" />
        <input placeholder="to" name="to" />
        <button type="submit">Search</button>
      </form>

      <List>
        {cars?.map((el) => (
          <Item key={el.id}>
            <ImageWrapper>
              <img src={el.img} />
            </ImageWrapper>
            <TitleItem>
              {el.make}, {el.year}
              <span>{el.rentalPrice}</span>
            </TitleItem>
            <Description>
              {getAddress(el.address).city} | {getAddress(el.address).country} |{' '}
              {el.rentalCompany} | {el.type} | {el.model} | {el.id} |{' '}
              {el.functionalities[0]}
            </Description>

            <Button>Learn more</Button>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Catalog;
