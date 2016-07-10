describe('test directive', ()=> {
    let compile, scope, directiveElem;

    beforeEach(function(){
        angular.mock.module('Directives');
    
        angular.mock.inject(function($compile, $rootScope){
            compile = $compile;
            scope = $rootScope.$new();
        });
        
        directiveElem = getCompiledElement();
    });

    function getCompiledElement(){
        var element = angular.element('<div first-directive></div>');
        var compiledElement = compile(element)(scope);
        scope.$digest();
        return compiledElement;
    }

    xit('should have span element', function () {
        var spanElement = directiveElem.find('span');
        expect(spanElement).toBeDefined();
        expect(spanElement.text()).toEqual('This span is appended from directive.');
    });

    it('should have updated text in span', () => {
        scope.text = 'some other text';
        scope.$digest();
        let spanElement = directiveElem.find('span');
        expect(spanElement).toBeDefined();
        expect(spanElement.text()).toEqual(scope.text);
    });
});