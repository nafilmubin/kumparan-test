describe('As User, I Want To Comment News', function () {
    beforeEach(() => {
        cy.visit(Cypress.config().base_url + "/login")
        cy.login('cahuvu@getnada.com', 'Rahasia123')
        cy.wait(9000)

    })

    it('User comment some news', () => {
        cy.get('a[data-qa-id="comment-button-wrapper"]')
            .eq(0)
            .click({ force: true })

        cy.get('button[data-qa-id="btn-send-comment"]').eq(0).then(($span) => {
            // capture what num is right now
            const num1 = parseFloat($span.text())


            cy.get('div[data-qa-id="input-comment"]')
                .type('Bagus Nih')
            cy.get('button[data-qa-id="btn-send-comment"]')
                .eq(0)
                .click({ force: true })
                .then(() => {
                    // now capture it again
                    const num2 = parseFloat($span.text())

                    // make sure it's what we expected
                    expect(num2).to.eq(num1 + 1)
                })


        });

    });

    it.only('User comment and delete some news', () => {
        cy.get('a[data-qa-id="comment-button-wrapper"]')
            .eq(0)
            .click({ force: true })
            .wait(500)
        cy.get('div[data-qa-id="input-comment"]')
            .type('Bagus Nih')
        cy.get('button[data-qa-id="btn-send-comment"]')
            .eq(0)
            .click({ force: true })
        cy.get('div')
            .contains('span', 'Hapus')
            .click()
        cy.get('button[data-qa-id="btn-process"]')
            .click()
        cy.get('span[data-qa-id="deleted-comment"]')
            .should('have.text', 'Komentar dihapus')



    });

});