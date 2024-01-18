import {
  Aboutwrapper,
  managmentcontactwrapper,
  AssetManagmentContainer,
  Innerwrapper,
  Imagebox,
  Imageproperties,
  Maincontainer,
  Wrapper,
  contactusbutton,
  HomePageGradient,
  WhyAssetManagmentContainer,
  Mainsection,
  Managementcontact,
} from "./haeder.styled";

export function Haederpage() {
  return (
    <>
      <Maincontainer>
        <Mainsection>
          <Wrapper>
            <Innerwrapper>
              <Imageproperties>
                <Imagebox src="https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/64afed14-ed4d-43df-b0f4-c58aa8a1df8f.svg" />
              </Imageproperties>
              <WhyAssetManagmentContainer>
                Why asset management
              </WhyAssetManagmentContainer>
              <Aboutwrapper>About Us</Aboutwrapper>
              <contactusbutton>
                <Managementcontact>contact</Managementcontact>
              </contactusbutton>
            </Innerwrapper>
          </Wrapper>
        </Mainsection>
      </Maincontainer>
    </>
  );
}
