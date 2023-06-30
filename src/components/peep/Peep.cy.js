import Peep from './Peep';
import React from 'react'

describe("Peep", () => {
  it('renders a peep with message and user handle', () => {
    const mockedPeep = {
      "body": "test body",
      "user": {
        "handle": "test handle"
      }
    };

    cy.mount(<Peep peep={mockedPeep} />);
    cy.get('[data-cy="peep"]').should('contain.text', "test body");
  });
});
