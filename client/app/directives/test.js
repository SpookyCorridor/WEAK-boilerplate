let directive = [()=>{
     return function(scope, elem){
         let spanElement = angular.element('<span>' + scope.text + '</span>');
         elem.append(spanElement);

         scope.$watch('text', function(newVal, oldVal){
         spanElement.text(newVal);
    });
  };
}];

export default directive; 
