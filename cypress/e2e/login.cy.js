/// <reference types="cypress" />

context('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    afterEach(() => {
        cy.screenshot()
    });
    

    it('Deve fazer login com sucesso', () => {
        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
    
    });
    
    it('Deve exibir uma mensagem de erro ao inserir usúario invalidos', () => {
    
        cy.get('#username').type('aluno_eac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')

    });

    it('Deve exibir uma mensagem de erro ao inserir senha invalidos', () => {
    
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.co')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'a senha fornecida para o e-mail')
        
    });    
    
})