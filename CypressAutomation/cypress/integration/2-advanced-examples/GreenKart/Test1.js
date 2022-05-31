
/// <reference types="Cypress"/>
describe('green cart1',function () 

{
    
    it('My first Test case', function()
    {
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca')
cy.wait(2000)
//cy.get('.product:visible').should('have.length', 4)
cy.get('.product').should('have.length', 5)
cy.get('.products').find('.product').should('have.length', 4)
cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
//Way to give an Alias name
cy.get('.products').as('productLocator')
//Now using the Aliyas Name as @AliyasName
cy.get('@productLocator').find('.product').each(($e1,index,$list)=>{
   const vegText= $e1.find('h4.product-name').text()
   if(vegText.includes('Cashews'))
   {
       //$e1.contains('ADD TO CART').click()
      cy.wrap($e1).find('button').click()
      //cy.wrap($e1).find(contains('ADD TO CART')).click
   }
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())
    
})

})
//Assert if logo element is appearing
cy.get('.brand').should('have.text','GREENKART')
cy.log("Code Reached===============")
console.log("printing in developer tab, console tab")
    })

    
}



)