import React from "react";
import {
  Cardcontainer,
  Contentstyled,
  Discriptionstyled,
  Headingstyled,
  Imagewrapper,
  Innerwrapper,
  Leftsection,
  Maincontainer,
  Mainsection,
  Mainwrapper,
  Rightsection,
  Shapeelips,
} from "./advantages.styled";
export function Advantagespage() {
  return (
    <>
      <Maincontainer>
        <Mainsection>
          <Mainwrapper>
            <Innerwrapper>
              <Cardcontainer>
                <Rightsection>
                  <Imagewrapper src="http://217.160.46.77/assets/images/advantages.png "></Imagewrapper>
                </Rightsection>
                <Leftsection>
                  <Headingstyled>Your advantages at a glance</Headingstyled>
                  <Discriptionstyled>
                    It is a long established fact that a reader will be
                    distracted
                  </Discriptionstyled>
                  <Shapeelips> </Shapeelips>
                  <Contentstyled>
                    <p>
                      <li> You take center stage </li>
                      <li> Your finances: easier than ever With the</li>
                      <li> best partners at your side </li>
                    </p>
                  </Contentstyled>
                </Leftsection>
              </Cardcontainer>
            </Innerwrapper>
          </Mainwrapper>
        </Mainsection>
      </Maincontainer>
    </>
  );
}
