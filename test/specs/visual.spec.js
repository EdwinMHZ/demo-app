describe('My React Applications', () => {
    it('should look correct', () => {
        browser.url('/');
        browser.execute('/*@visual.init*/', 'My React App');
        browser.execute('/*@visual.snapshot*/', 'Home Page');
    });
});