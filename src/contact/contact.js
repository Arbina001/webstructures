import React from "react";
import {
  InnerWrapper,
  LeftfSection,
  Maincontainer,
  Mainsection,
  RightSection,
  Wrapper,
  Contentstyle,
  Contectstyled,
  Contenticone,
  IconContainer,
  Texttitle,
  Phonelogo,
  Emaillogo,
  Textstyled,
  Headingtitle,
  Maplogo,
  Mapstyled,
} from "./contact.styled";

export function Contactpage() {
  return (
    <>
      <Maincontainer>
        <Mainsection>
          <Wrapper>
            <InnerWrapper>
              <RightSection>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3191.708801974967!2d73.13016848451862!3d22.285120636635604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1705563079752!5m2!1sen!2sin"
                  width="400"
                  height="500"
                  style={{ border: "0", borderRadius: "22px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </RightSection>
              <LeftfSection>
                <Contectstyled>
                  <Contenticone />
                  Content
                </Contectstyled>
                <Headingtitle>Volker Munko</Headingtitle>
                <IconContainer>
                  <Maplogo src="https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/154e9544-1767-46a2-907a-b207bbdd7680.svg" />
                  <Mapstyled>
                    Office for Allfinanz German investment advice On the heath 8
                    32602 Vlotho
                  </Mapstyled>
                </IconContainer>
                <IconContainer>
                  <Emaillogo src="https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/5a05abb9-103c-4cdd-867e-7f7ff1f73be6.svg" />
                  <Textstyled> Volker.Munko@allfinanz.ag</Textstyled>
                </IconContainer>
                <IconContainer>
                  <Phonelogo src="https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/79dab7c0-b2f3-4869-84c8-887485a03c58.svg" />
                  <Texttitle> 05733 881883</Texttitle>
                </IconContainer>
              </LeftfSection>
            </InnerWrapper>
          </Wrapper>
        </Mainsection>
      </Maincontainer>
    </>
  );
}
