describe('My First Test Suit',function () 

{
    before(function(){
cy.fixture('example').then(function(data)
{
this.data=data

})


    })

    it('My first Test case', function()
    {
cy.visit("https://rahulshettyacademy.com/angularpractice/");
cy.get(':nth-child(1) > .form-control').type(this.data.name)
//cy.get('form input.from-control:nth-child(1)').type(this.data.name)
cy.get('select').select(this.data.gender)
//cy.get('select').select("Female")
cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', 2)
cy.get('#inlineRadio3').should('be.disabled')
cy.get(':nth-child(2) > .nav-link').click()

//cy.pause()
this.data.productName

this.data.productName.forEach(element => cy.selectProduct(element));
cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()

    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
   // cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
//cy.selectProduct('Nokia Edge')
cy.get('#checkbox2').check({force: true})
cy.get('input[type="submit"]').click()
//cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
cy.get('.alert').then(function(element)
{
const actualText=element.text()
//if(actualText.includes("Success"))
expect(actualText.includes("Success")).to.be.true

})
    })

    
})