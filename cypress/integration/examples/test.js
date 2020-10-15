context('Given user access site', () => {

    it('when people page is clicked', () => {
        
        cy.get(':nth-child(5) > .navigation__title-holder > .navigation__title').click();
        cy.url().should('include', '/2019/our-people');
        cy.get(':nth-child(2) > .text-wrapper > a.light-font').click();
        cy.url().should('include', '2019/our-culture')
        cy.get(':nth-child(8) > .container > .row > .col-md-12 > div')
            .should('be.visible')   
            .should('contain', 'Code');
    })
})