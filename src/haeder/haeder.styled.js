import styled from "styled-components";
export const Maincontainer = styled.section``;
export const Mainsection = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  background-color: #f9f9f9;

  @media (max-width: 991px) {
    max-width: max-content;
  }
`;

export const Wrapper = styled.div`
  margin: 0 19px 20px;
  padding: 33.3px 120px 0px 118px;
`;

export const Innerwrapper = styled.header`
  display: flex;
`;

export const Imageproperties = styled.div`
  width: 100%;
  height: 71.2px;
  margin: 0 406.3px 0 0;
  object-fit: contain;
`;

export const Imagebox = styled.img`
  width: 100%;
  height: 71.2px;
  position: relative;
`;

export const WhyAssetManagmentContainer = styled.div`
  width: 217px;
  height: 27px;
  margin: 23px 0px 19px 2px;
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.65;
  letter-spacing: -0.2px;
  text-align: left;
  color: #37415c;
`;

export const Aboutwrapper = styled.div`
  width: 110px;
  height: 27px;
  margin: 23.7px 6px 28.5px 22px;

  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.65;
  letter-spacing: -0.2px;
  text-align: left;
  color: #37415c;
`;

export const contactusbutton = styled.button`
  width: 100%;
  max-width: 136px;
  height: 50px;
  border-radius: 10px;
  background-color: #fff;
  border: none;
  margin: 5px 0px;
`;

export const Managementcontact = styled.p`
  background-color: #ffffff;
  padding: 6px 24px 13px 32px;
  border-radius: 14px;
`;
