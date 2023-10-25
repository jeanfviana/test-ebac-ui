/// <reference types="cypress" />
import enderecoPage from "../support/page/endereco.page";


describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture("perfil").then(dados => {
            cy.login(dados.usuario, dados.senha)
        })


    });
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('Jaiza', 'Viana', 'Unimed', 'Brasil', 'Rua dali', '135', 'Sapiranga', 'Rio Grande do Sul', '93888-880', '(92)992578214', 'jaiza@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')

    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {

        cy.fixture("endereco").then(dados => {
            enderecoPage.editarEnderecoFaturamento(
                dados[1].nome,
                dados[1].sobrenome,
                dados[1].empresa,
                dados[1].pais,
                dados[1].rua,
                dados[1].numero,
                dados[1].cidade,
                dados[1].estado,
                dados[1].cep,
                dados[1].telefone,
                dados[1].email)
            cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
        })



    });
});