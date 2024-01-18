import React from "react";
import {
  Container,
  Section,
  Wrapper,
  Innerwrapper,
  Rightbox,
  Leftbox,
  Titlestyle,
  Discriptionstyle,
  Title,
  Contectusbutton,
  Buttonfunction,
  Linefuntion,
  Styledwrapper,
  Leftwrapper,
  Rightimagewrapper,
  Leftimagewrapper,
  Productbox,
  Lineproperties,
  Details,
} from "./finance.styled";

export function Financecomponent() {
  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <Innerwrapper>
              <Rightbox>
                <Titlestyle>Competence for your finances</Titlestyle>
                <Discriptionstyle>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English
                </Discriptionstyle>
                <Contectusbutton>
                  <Buttonfunction>Contect us</Buttonfunction>
                </Contectusbutton>
              </Rightbox>
              <Leftbox>
                <Styledwrapper>
                  <Linefuntion></Linefuntion>
                  <Title>EXCELLENT ADVICE</Title>
                </Styledwrapper>
                <Productbox>
                  <Leftwrapper>
                    <Leftimagewrapper src="http://217.160.46.77/assets/images/excellent-1.png"></Leftimagewrapper>
                    <Lineproperties></Lineproperties>
                    <Rightimagewrapper src="http://217.160.46.77/assets/images/excellent-2.png"></Rightimagewrapper>
                  </Leftwrapper>
                  <Details>
                    We are regularly recognized by independent institutes for
                    our quality in customer advice and service.
                  </Details>
                </Productbox>
              </Leftbox>
            </Innerwrapper>
          </Wrapper>
        </Container>
      </Section>
    </>
  );
}
