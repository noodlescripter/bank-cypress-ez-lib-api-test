const driver = require('cypress-ez-lib');


describe("Verify_Cypress_Ez_Lib_API", function(){

    it("Verify_Cypress_Ez_Lib_1: Login Scenarion", function(){
        driver.goTo("http://192.168.50.252:3000/");
        driver.typeById("username", "admin@admin.com");
        driver.typeById("password", "abc123");
        driver.clickButtonByText("Login");
    });
});
