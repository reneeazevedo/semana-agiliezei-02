/// <reference types="cypress" />



context('Compra', () => {
    it('Efetuar uma compra de produto', () => {
     cy.backgroundLogin()
     cy.visit("/");  
     cy.pause();
     let nomeProduto = "Faded Short Sleeve T-shirts"; 
     cy.contains(nomeProduto).trigger("mouseover")
     cy.contains(nomeProduto) 
       .parent()
       .siblings("div.button-container")
       .children("a")
       .first()
       .click()
     cy.get('.icon-ok')
       .parent().should('contain.text','Product successfully added to your shopping cart')

     cy.get('span#layer_cart_product_title')
       .should('contain.text',nomeProduto)  
       
     cy.get(".button-container a[href$='controller=order']").click()  
     cy.get(".cart_navigation a[href$='step=1']").click()
     
     /*cy.get('#email').type("renee.moura@hotmail.com")
     cy.get('#passwd').type("101827Rm@101827Rm@")
     cy.get("#SubmitLogin").click()*/

     cy.get('[type=checkbox]#addressesAreEquals').should('have.attr','checked', 'checked')
     cy.get('[type=checkbox]#addressesAreEquals').should('have.attr','name', 'same')
     cy.get('button[name=processAddress]').click()
     cy.get('input[type=checkbox]#cgv').check();
     cy.get('button[name=processCarrier]').click();
     cy.get('.bankwire').click();
     cy.get('#cart_navigation button[type=submit]')
        .find('span')
        .contains('I confirm my order')
        .click();
      cy.get('.cheque-indent strong').should('contain.text','Your order on My Store is complete.') 

      cy.get('div.box').invoke('text').then((text)=>{
        console.log(text.match(/[A-Z][A-Z]{8}/g))
        cy.writeFile('cypress/fixtures/pedido.json',{ id: `${text.match(/[A-Z][A-Z]{8}/g)}`})
      })

    cy.get("p.cart_navigation [title='Back to orders']").click();

    cy.readFile('cypress/fixtures/pedido.json').then((conteudo) => {
      cy.get('tr.first_item .history_link a').should('contain.text', conteudo.id)
    })
    
    });
});