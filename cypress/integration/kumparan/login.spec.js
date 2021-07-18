describe('As User, I Want To Login', function() {
    beforeEach(() => {
        cy.visit(Cypress.config().base_url + "/login")
        
      })

    it('User unsucess Login dengan tidak mengisi email dan password', () => {
        cy.get('div[id="content"]').then(($body) => {
            if ($body) {
              cy.get('button[id="onesignal-slidedown-cancel-button"]').click()
            }
        })
        //klik button masuk
        cy.xpath('//*[@id="content"]/div/div/div[2]/div/div[2]/div[4]/button/div/div/span')
        .click({force:true})
        //validasi tidak boleh kosong
        cy.xpath('//*[@id="content"]/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div/span')
        .should('have.text', 'Tidak boleh kosong') 
    });

    it('User unsucess Login dengan email tidak sesuai format', () => {
        cy.get('div[id="content"]').then(($body) => {
            if ($body) {
              cy.get('button[id="onesignal-slidedown-cancel-button"]').click()
            }
        })
        //type email
        cy.get('input[name="email"]')
        .type('cahuvi', {force:true})
        .should('have.value', 'cahuvi')
        //type password
        cy.get('input[name="password"]')
        .type('rahasia123', {force:true})
        //klik button masuk
        cy.xpath('//*[@id="content"]/div/div/div[2]/div/div[2]/div[4]/button/div/div/span')
        .click({force:true})
        //validasi email tidak sesuai format
        cy.xpath('//*[@id="content"]/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div/span')
        .should('have.text', 'Harus diisi dengan format email') 
    });

    it('User unsucess Login dengan email yang belum terdaftar', () => {
        cy.get('div[id="content"]').then(($body) => {
            if ($body) {
              cy.get('button[id="onesignal-slidedown-cancel-button"]').click()
            }
        })
        //type email
        cy.get('input[name="email"]')
        .type('cahuvi@getnada.com', {force:true})
        .should('have.value', 'cahuvi@getnada.com')
        //type password
        cy.get('input[name="password"]')
        .type('rahasia123', {force:true})
        //klik button masuk
        cy.xpath('//*[@id="content"]/div/div/div[2]/div/div[2]/div[4]/button/div/div/span')
        .click({force:true})
        //validasi email tidak sesuai format
        cy.xpath('//*[@id="content"]/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div/span')
        .should('have.text', 'Email atau Password Salah') 
    });

    it('User melihat Password', () => {
        cy.get('div[id="content"]').then(($body) => {
            if ($body) {
              cy.get('button[id="onesignal-slidedown-cancel-button"]').click()
            }
        })
        //type email
        cy.get('input[name="email"]')
        .type('cahuvi@getnada.com', {force:true})
        .should('have.value', 'cahuvi@getnada.com')
        //type password
        cy.get('input[name="password"]')
        .type('rahasia123', {force:true})
        //Click icon eye
        cy.get('img[data-qa-id="eye"]')
        .click({force:true})
        cy.get('input[name="password"]')
        .should('have.value', 'rahasia123')
    });

    it('User Success login using valid credential', () => {
        cy.get('div[id="content"]').then(($body) => {
            if ($body) {
              cy.get('button[id="onesignal-slidedown-cancel-button"]').click()
            }
        })
        //type email
        cy.get('input[name="email"]')
        .type('cahuvu@getnada.com', {force:true})
        .should('have.value', 'cahuvu@getnada.com')
        //type password
        cy.get('input[name="password"]')
        .type('Rahasia123', {force:true})
        //klik button masuk
        cy.xpath('//*[@id="content"]/div/div/div[2]/div/div[2]/div[4]/button/div/div/span')
        .click({force:true})
        //Validasi telah login
        cy.get('div[name="cahuvu"]')
    });

    
});