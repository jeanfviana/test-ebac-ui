/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    //afterEach(() => {
      //  cy.screenshot()
    //});


    it('Deve fazer login com sucesso', () => {

        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')

    });

    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {

        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
    });


    it('Deve fazer login com sucesso - usando fixture', () => {
        cy.fixture("perfil").then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()

            cy.get('.page-title').should('contain', 'Minha conta')
        })
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