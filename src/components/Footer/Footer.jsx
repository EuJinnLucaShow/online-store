import { Link } from 'react-router-dom';
import Icons from '../Icons/Icons';
import { Footers, Container, FooterTop, Logo, LogoText, Category, CategoryWrapper, Contacts, Messengers, FooterBottom, FooterBottomText } from './Footer.styled';

export const Footer = () => {
  return (
    <Footers>
      <Container>
        <FooterTop>
          <Link to={'/'}>
            <Logo>
              <Icons icon ="logo" />
              <LogoText>Звукоряд</LogoText>
            </Logo>
          </Link>
            <Category>
              <CategoryWrapper>
                <Link to={'#'}>Category</Link>
                <Link to={'#'}>Category</Link>
                <Link to={'#'}>Category</Link>
                <Link to={'#'}>Category</Link>
              </CategoryWrapper>
              <CategoryWrapper>
                <Link to={'#'}>Category</Link>
                <Link to={'#'}>Category</Link>
                <Link to={'#'}>Category</Link>
                <Link to={'#'}>Category</Link>
              </CategoryWrapper>
            </Category>
            <Contacts>
              <Link to="tel:602-579-5633">602-579-5633</Link>
              <Link to="tel:602-579-5633">602-579-5633</Link>
              <Link to="tel:602-579-5633">602-579-5633</Link>
              <Messengers>
                <Link to={'#'}>
                  <Icons icon ="messengers" />
                </Link>
                <Link to={'#'}>
                  <Icons icon ="messengers" />
                </Link>
                <Link to={'#'}>
                  <Icons icon ="messengers" />
                </Link>
              </Messengers>
            </Contacts>
        </FooterTop>
        <FooterBottom className="footer__bottom">
          <FooterBottomText>
            Команда розробки: Rogelio Schroeder, Connie Ortiz, Michelle
            Feil,Rogelio Schroeder, Connie Ortiz, Michelle Feil,Rogelio
            Schroeder, Connie Ortiz, Michelle Feil,
          </FooterBottomText>
          <FooterBottomText>
            DATAtime 28/09/76 version ****
          </FooterBottomText>
        </FooterBottom>
      </Container>
    </Footers>
  );
};
