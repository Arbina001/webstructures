import {
  Container,
  Discription,
  Footerend,
  FooterHorizontal,
  FooterLogo,
  InnerWrapper,
  Wrapper,
  Section,
  Rightsection,
  verticalline,
} from "./footer.styled";

export function Footerpage() {
  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <InnerWrapper>
              <FooterLogo src="https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/a4514f4a-0aa0-446d-82af-8003b0b198ec.svg" />
              <Discription>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </Discription>
            </InnerWrapper>
          </Wrapper>
          <FooterHorizontal />
          <Footerend>
            @2020 Volker Munko
            <Rightsection>
              Privacy policy
              <verticalline />
              Imprint
              <verticalline />
              Cookie Policy
            </Rightsection>
          </Footerend>
        </Container>
      </Section>
    </>
  );
}
