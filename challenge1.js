require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;


describe("challenge1 suite", function(){
    this.timeout(20000);
    var driver;

    driver = new webdriver.Builder()
       .withCapabilities(webdriver.Capabilities.chrome())
       .build();

    before(function () {
    });

    after(function () {
        this.timeout(20000);
        return driver.quit();
    });

    it("I open the google website", function() {
        return driver.get("http://www.google.com");
    });
  
    it("The title is 'Google'", function() {
        return driver.getTitle().then(function(title) {
            assert.equal(title, "Google");
        });
    });
 
});

