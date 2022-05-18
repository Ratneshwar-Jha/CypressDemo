describe('My First Test Suit',function () 

{
    
    it('My first Test case', function()
    {
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");


//First way to click hidden item
//cy.get('div.mouse-hover-content').invoke('show')
//cy.contains('Top').click()
//cy.url().should('include','top')

//Second way to click hidden item forcefully
cy.contains('Top').click({force:true})
//validate if URL contais top word in it
cy.url().should('include','top')
    })
})