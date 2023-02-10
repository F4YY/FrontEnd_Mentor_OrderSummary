import React from 'react';
import { Container } from './styled/Container.styled';
import { Annualplanicon, Annualplaninfo, Annualplansection, Attribution, AttributionA, CancelButton, Ordersummaryimage, Ordersummaryplan, Proceedbutton, StyledOrdersummary } from './styled/Ordersummary.styled';
import hero from './images/illustration-hero.svg';
import music from './images/icon-music.svg';

export const Ordersummary = () => {
  return (
    <Container>
        <StyledOrdersummary>
          <Ordersummaryimage src={hero} alt='hero'/>
          <h2>
            Order Summary
          </h2>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on any
            device anywhere you like!
          </p>
          <Ordersummaryplan>
            <Annualplansection>
              <Annualplanicon src={music} alt='music' height={35}/>
              <Annualplaninfo>
                <h4>Annual Plan</h4>
                <h3>$59.99/year</h3>
              </Annualplaninfo>
              <h5>Change</h5>
            </Annualplansection>
            <Proceedbutton>
              Proceed to Payment
            </Proceedbutton>
            <CancelButton>
              Cancel Order
            </CancelButton>
          </Ordersummaryplan>
        </StyledOrdersummary>
        <Attribution>
          <AttributionA>
            Challenge by <a href="https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Order Summary Components.</a>
          </AttributionA>
          <AttributionA>
            &nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a>
          </AttributionA>
        </Attribution>
    </Container>
  )
}
