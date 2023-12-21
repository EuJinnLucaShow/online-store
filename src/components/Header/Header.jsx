import { NavLink } from 'react-router-dom';
import Icons from '../Icons/Icons';
import {
  Headers,
  Container,
  LogoWrapper,
  FormInput,
  LogoText,
  Input,
  CatalogWrapp,
} from './Header.styled';

export const Header = () => {
  return (
    <Headers>
      <Container>
        <LogoWrapper>
          <NavLink to="/">
            <Icons icon="logo" />
          </NavLink>
          <LogoText>Звукоряд</LogoText>
        </LogoWrapper>
        <CatalogWrapp>
          <NavLink to="/catalog">Каталог</NavLink>
        </CatalogWrapp>
        <FormInput>
          <Input type="text" placeholder="Що ви шукаєте?" />
          <Icons icon="search" />
          <button>Пошук</button>
        </FormInput>
        <Icons icon="shopping" />
        <Icons icon="phone" />
      </Container>
    </Headers>
  );
};
