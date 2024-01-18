import styled from "styled-components";

export const Maincontainer = styled.div``;

export const Mainsection = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const Contentstyle = styled.div`
  width: 100%;
  padding: 18px 0 0;
  background-color: #ffffff;
`;

export const Contenticone = styled.div`
  width: 14px;
  height: 0;
  border: solid 2px #000000;
`;

export const Contectstyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 200px;
  gap: 12px;

  @media (max-width: 991px) {
    padding: 53px 0px 0px 0px;
  }
`;

export const Wrapper = styled.div`
  background: var(--white-gradient);
  position: relative;
  margin: 0 19px 20px;
  padding: 57px 87px 0px 121px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0;
  }
`;

export const Texttitle = styled.div`
  padding: 15px 0px 0px 19px;
  font-size: 25px;

  @media (max-width: 991px) {
    font-size: 16px;
  }
`;

export const Phonelogo = styled.img`
  padding: 0px 0px 0px 0px;
`;

export const Headingtitle = styled.div`
  width: 100%;
  margin: 0px 0px 48px 39px;
  font-size: 51px;
  font-weight: bold;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.51px;
  text-align: left;
  color: #14183e;

  @media (max-width: 991px) {
    font-size: 42px;
  }
`;

export const Maplogo = styled.img``;

export const Mapstyled = styled.div`
  padding: 6px 0px 0px 22px;
  font-size: 25px;

  @media (max-width: 991px) {
    font-size: 16px;
  }
`;
export const Emaillogo = styled.img`
  margin: -22px 29px 0px 0px;
`;

export const Textstyled = styled.div`
  font-size: 25px;

  @media (max-width: 991px) {
    font-size: 16px;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const RightSection = styled.div`
  width: 50%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const LeftfSection = styled.div`
  width: 50%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  padding: 79px 0px 0px 0px;

  @media (max-width: 991px) {
    padding: 43px 0 0 22px;
  }
`;
