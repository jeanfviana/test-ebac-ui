/// <reference types="cypress" />

describe('Funcionalidade pré-cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type('teste20@test.com')
        cy.get('#reg_password').type('teste@test#$')
        cy.get(':nth-child(4) > .button').click()
        
    });
});