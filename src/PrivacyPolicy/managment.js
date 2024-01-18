import React from "react";
import {
  Innerwrapper,
  Maincontainer,
  Rightsection,
  Wrapper,
  Leftsection,
  Textstyle,
  Contectbutton,
  Buttonproperties,
  Mainsection,
  Headingstyle,
  Imagebox,
} from "./managment.styled";

export default function Component() {
  return (
    <>
      <Mainsection>
        <Maincontainer>
          <Wrapper>
            <Innerwrapper>
              <Rightsection>
                <Headingstyle>Asset management</Headingstyle>
                <Textstyle>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution
                </Textstyle>
                <Contectbutton>
                  <Buttonproperties>Contect us</Buttonproperties>
                </Contectbutton>
              </Rightsection>
              <Leftsection>
                <Imagebox src="http://217.160.46.77/assets/images/home-banner.png"></Imagebox>
              </Leftsection>
            </Innerwrapper>
          </Wrapper>
        </Maincontainer>
      </Mainsection>
    </>
  );
}
