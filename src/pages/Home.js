import React from "react";
import {OptForm} from "../components/"
import { JumbotronContainer } from "../containers/Jumbotron";
import { FooterContainer } from "../containers/Footer";
import { FaqsContainer } from "../containers/Faqs"
import {HeaderContainer} from "../containers/Header"
import {Feature} from "../components/"

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.Subitle>Watch anywhere. Cancel at any time.</Feature.Subitle>
          <OptForm>
            <OptForm.Input placeholder="Email Adress" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
