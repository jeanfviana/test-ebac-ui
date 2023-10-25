/// <reference types="cypress" />

describe('Funcionalidade da pagina de produto', () => {
    beforeEach(() => {
        cy.visit('produtos/')
    });
    it.only('Deve selecionar um produto da lista', () => {
        cy.get('div[class*="product-block grid"]')
        //.first()
        //.last()
        //.eq(3)
        .contains('Beaumont Summit Kit')
        .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3

        cy.get('div[class*="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('li[class="variable-item button-variable-item button-variable-item-M"]').click()
        cy.get('li[class="variable-item button-variable-item button-variable-item-Green"]').click()
        cy.get('input[class="input-text qty text"]').clear().type(quantidade)
        cy.get('button[class="single_add_to_cart_button button alt"]').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produto com comando customizado', () => {
        var quantidade = 3

        cy.addProdutos('Abominable Hoodie', 'M', 'Green', quantidade)
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produto com comando customizado', () => {
        var quantidade = 3

        cy.addProdutos('Beaumont Summit Kit', 'S', 'Red', quantidade)
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Beaumont Summit Kit” foram adicionados no seu carrinho.')
    });




});