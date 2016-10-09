describe('angularjs homepage todo list', function() {
    beforeEach(function(){
        browser.get('/#home');
         link0 = element(by.css('a[href*="#/home"].navbar-brand'));
         link1 = element(by.css('li a[href*="#/home"]'));
         link2 = element(by.css('li a[href*="#/page1"]'));
         link3 = element(by.css('li a[href*="#/page2"]'));
    });

    it('should click on each link and check the active class', function(){
        link0.click();

        link1.click();
        isActiveLink1 = element(by.css('li:nth-child(1).active'));
        expect(isActiveLink1.isPresent()).toBe(true);

        link2.click();
        isActiveLink2 = element(by.css('li:nth-child(2).active'));
        expect(isActiveLink2.isPresent()).toBe(true);

        link3.click();
        isActiveLink3 = element(by.css('li:nth-child(3).active'));
        expect(isActiveLink3.isPresent()).toBe(true);
    });

    it('should click on each link and check their name', function(){
        expect(link0.getText()).toBe('Brand');
        expect(link1.getText()).toBe('');
        expect(link2.getText()).toBe('Page 1');
        expect(link3.getText()).toBe('Page 2');
    });
});
