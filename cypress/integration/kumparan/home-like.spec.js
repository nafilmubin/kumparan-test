describe('As User, I Want To Like News', function () {
    beforeEach(() => {
        cy.visit(Cypress.config().base_url + "/login")
        cy.login('cahuvu@getnada.com', 'Rahasia123')
        cy.wait(9000)

    })

    it('User like some news', () => {
        cy.get('button[data-qa-id="like-button-wrapper"]').eq(0).then(($span) => {
            // capture what num is right now
            const num1 = parseFloat($span.text())

            cy.get('button[data-qa-id="like-button-wrapper"]')
                .eq(0)
                .click({force:true})
                .then(() => {
                    // now capture it again
                    const num2 = parseFloat($span.text())

                    // make sure it's what we expected
                    expect(num2).to.eq(num1 + 1)
                })
        });

    });

    it('User like and unlike some news', () => {
        cy.get('button[data-qa-id="like-button-wrapper"]').eq(0).then(($span) => {
            // capture what num is right now
            const num1 = parseFloat($span.text())

            cy.get('button[data-qa-id="like-button-wrapper"]')
                .eq(0)
                .click({force:true})
                .then(() => {
                    // now capture it again
                    const num2 = parseFloat($span.text())

                    // make sure it's what we expected
                    expect(num2).to.eq(num1 + 1)
                })
                .click({force:true})
                .then(() => {
                    // now capture it again
                    const num3 = parseFloat($span.text())

                    // make sure it's what we expected
                    expect(num3).to.eq(num2 - 1)
                })
        });

    });

});