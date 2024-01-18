import styled from "styled-components";

export const Maincontainer = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const Wrapper = styled.div`
  background: var(--white-gradient);
  margin: 46px;
  position: relative;
  padding: 0px 32px 0px 66px;
`;

export const Innerwrapper = styled.div`
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const Rightsection = styled.div`
  color: black;
  width: 50%;
  font-size: 35px;
  font-weight: normal;
  line-height: 1.72;
  letter-spacing: -0.18px;
  color: var(--black-third);

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Textstyle = styled.div`
  font-weight: normal;
  line-height: 32px;
  letter-spacing: 0px;
  color: black;
  font-size: 20px;

  @media (max-width: 991px) {
  }
`;

export const Assetmanagement = styled.div`
  width: 350px;
  height: 150px;
  font-weight: bold;
  line-height: 1.41;
  letter-spacing: -0.56px;
  color: #14183e;
  z-index: 2;

  @media (max-width: 991px) {
  }
`;

export const Headingstyle = styled.p`
  font-size: 68px;
  font-weight: normal;
  line-height: 62px;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

export const Leftsection = styled.div`
  width: 50%;
  background-size: 660px 640px;
  background-position: right 20px bottom 10px;
  height: 650px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Imagebox = styled.img`
  width: 100%;
  max-width: 600px;

  @media (max-width: 991px) {
    padding: 38px 0px 0px 0px;
  }
`;

export const Contectbutton = styled.button`
  width: 207px;
  height: 60px;
  margin: 66px 879px 0 4px;
  padding: 19px 56px;
  border-radius: 10px;
  border: none;
  background-color: #000000;

  @media screen {
    margin: 0;
    padding: 0;
  }
`;

export const Buttonproperties = styled.div`
  color: #fff;
`;

export const Mainsection = styled.div``;
