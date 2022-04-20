

import HomePage from '../pageObjects/HomePage'
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
        const homePage=new HomePage()
cy.visit("https://rahulshettyacademy.com/angularpractice/");
homePage.getEditBox().type(this.data.name)

homePage.getGender().select(this.data.gender)
//cy.get('select').select("Female")
homePage.getTwoWayDataBinding().should('have.value',this.data.name)
homePage.getEditBox().should('have.attr', 'minlength', 2)
homePage.getInterprenure().should('be.disabled')
homePage.getShopTab().click()

//cy.pause()
this.data.productName

this.data.productName.forEach(element => cy.selectProduct(element));

//cy.selectProduct('Nokia Edge')
    })
})