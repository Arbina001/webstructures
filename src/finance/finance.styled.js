import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const Section = styled.div``;

export const Wrapper = styled.div`
  margin: 20px;
  position: relative;
  padding: 125px 0 30px;
`;
export const Titlestyle = styled.div`
  font-size: 55px;
  font-weight: normal;
  line-height: 70px;
  padding: 9px 9px 20px 15px;

  @media (max-width: 991px) {
    font-size: 40px;
    padding: 9px 0px 7px 25px;
  }
`;

export const Discriptionstyle = styled.div`
  font-weight: normal;
  line-height: 32px;
  letter-spacing: 0px;
  color: black;
  font-size: 20px;
  padding: 9px 0px 25px 17px;
  width: 100%;
  max-width: 500px;

  @media (max-width: 991px) {
    padding: 14px 0px 22px 40px;
  }
`;
export const Innerwrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const Rightbox = styled.div`
  width: 50%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Productbox = styled.div`
  width: 100%;
  max-width: 351px;
  height: 270px;
  /* margin: 56px 139px 127px 74px; */
  padding: 43px 44px 60px 56px;
  border-radius: 23px;
  border: solid 1px #cfcfcf;
  background-color: #ffffff;

  @media (max-width: 991px) {
    max-width: 246px;
    padding: 43px 61px 60px 46px;
  }
`;

export const Details = styled.p`
  font-size: 16px;
  padding: 12px 0px 0px 21px;
`;

export const Lineproperties = styled.div`
  width: 0;
  max-width: 30px;
  height: 170px;
  border: solid 2px #000000;
  margin: -6px 35px 7px 34px;

  @media (max-width: 991px) {
    margin: 0px 35px 7px 34px;
    height: 145px;
    border: solid 1px;
  }
`;
export const Leftwrapper = styled.div`
  display: flex;
  @media (max-width: 991px) {
  }
`;
export const Leftimagewrapper = styled.img`
  width: 100%;
  max-width: 151px;
  height: 160px;

  @media (max-width: 991px) {
    width: 100%;
    max-width: 102px;
    height: 151px;
  }
`;
export const Rightimagewrapper = styled.img`
  width: 100%;
  max-width: 151px;
  height: 160px;

  @media (max-width: 991px) {
    width: 100%;
    max-width: 102px;
    height: 151px;
  }
`;

export const Linefuntion = styled.div`
  width: 100%;
  max-width: 30px;
  height: 0;
  border: solid 2px #000000;
  margin: 14px;
`;

export const Styledwrapper = styled.div`
  display: flex;

  @media (max-width: 991px) {
    padding: 40px 0px 0px 0px;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: normal;
  padding: 0px 0px 41px 0px;
  /* line-height: 73px; */
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

export const Leftbox = styled.div`
  width: 50%;
  background-size: 660px 640px;
  background-position: right 20px bottom 10px;
  max-width: 400px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Contectusbutton = styled.button`
  width: 180px;
  height: 60px;
  margin: 66px 879px 0 4px;
  padding: 19px 56px;
  border-radius: 10px;
  border: none;
  background-color: #000000;

  @media (max-width: 991px) {
    padding: 0;
    margin: 0px 0px 0px 37px;
  }
`;

export const Buttonfunction = styled.div`
  color: #ffffff;
`;
