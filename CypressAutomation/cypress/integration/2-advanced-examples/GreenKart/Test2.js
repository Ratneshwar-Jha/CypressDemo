
/// <reference types="Cypress"/>
describe('green cart2',function () 

{
    
    it('My first Test case', function()
    {
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca')
cy.wait(2000)

//Way to give an Alias name
cy.get('.products').as('productLocator')
//Now using the Aliyas Name as @AliyasName
cy.get('@productLocator').find('.product').each(($el,index,$list)=>{
   const vegText= $el.find('h4.product-name').text()
   if(vegText.includes('Cashews'))
   {
       //$el.contains('ADD TO CART').click()
      cy.wrap($el).find('button').click()   
   }
})
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()

    })

    
}



)