describe('My First Test Suit',function () 

{
    
    it('My first Test case', function()
    {
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
//cy.visit("https://www.google.com/")
cy.get('#opentab').then(function(e1)
{
const url= e1.prop('href')
cy.log(url)
cy.visit(url)

})
    })
})