'use strict';

describe('confusion App E2E Testing', function () {

    //checks to make sure you are connected to the proper location
        it('should automatically redirect to / when location hash/fragment is empty', function () {

            browser.get('index.html');
            expect(browser.getCurrentUrl()).toMatch("/");

        });

    });


//connect to index
describe('index', function() {
    beforeEach(function() {
        browser.get('index.html#!/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).
        toEqual('Ristorante Con Fusion');
    });





    //check if the name of the first item is "Uthapizza Hot $4.99"

    describe('menu 0 item', function() {
        beforeEach(function() {
            browser.get('index.html#!/menu/0');

        });

        it('should have a name', function() {

            element(by.model('filtTest')).sendKeys('author');
            /*var name = element(by.binding('dish.name'));
            expect(name.getText()).toEqual('Uthapizza Hot $4.99');*/

        })
    });



   //Trying to get this test to work!!

    it('should show the number of author of first post as', function() {

       expect(element.all(by.repeater("comment in dish.comments")).count()).toEqual(0);



    });


    /*
    //get the element
    describe('leadership 3 item', function() {
        beforeEach(function(){
            browser.get('index.html#!/');
        });

       it('should have a name', function() {

           var name = element(by.binding('getExecutiveChef.name'));
           expect(name.getText()).toEqual('Alberto Somayya Executive Chef');
       });

    });

    */

});