import styled from 'styled-components';

export const Footers = styled.footer`
  padding: 25px 0 14px;
  background: #7b7474;
`;

export const Container = styled.div`
  max-width: 1540px;
  width: 100%;
  margin: 0 auto;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    stroke: #342D2D;
    width: 64px;
    height: 64px;
  }

  span {
    font-size: 36px;
    font-weight: 400;
    line-height: 36px;
    color: #342d2d;
  }
`;

export const LogoText = styled.span`
  font-size: 36px;
  font-weight: 400;
  line-height: 36px;
  color: #342d2d;
`;

export const Category = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 38px 0;

  a {
    color: #fff;
    font-size: 40px;
    font-weight: 400;
    line-height: 40px;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  a {
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const Messengers = styled.div`
  width: 212px;
  display: flex;
  gap: 40px;
`;

export const FooterBottom = styled.div`
  margin-top: 30px;
`;

export const FooterBottomText = styled.p`
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
`;