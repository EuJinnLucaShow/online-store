import styled from 'styled-components';

export const Headers = styled.header`
  background: #342d2d;
  padding: 20px 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1540px;
  width: 100%;
  margin: 0 auto;
`;
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
`;

export const LogoText = styled.span`
  font-size: 36px;
  font-weight: 400;
  color: #6b6666;
`;

export const CatalogWrapp = styled.div`
  padding: 13px 36px;
  font-size: 36px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.58);
  background: rgba(123, 116, 116, 0.54);
  cursor: pointer;
`;

export const FormInput = styled.form`
  max-width: 859px;
  width: 100%;
  height: 52px;
  position: relative;
  font-size: 24px;
  line-height: 24px;
  resize: none;

  svg {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
  }

  button {
    height: 100%;
    border: none;
    font-size: 24px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.58);
    padding: 10px 37px;
    background: #736565;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  position: relative;
  width: calc(100% - 153px);
  height: 100%;
  padding-left: 55px;
  padding-right: 5px;
  font-size: 24px;
  line-height: 24px;
  outline: none;
`;
