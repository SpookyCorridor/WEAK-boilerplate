let directive = [()=>{
     return (scope, elem) => {
        elem.append('<span>This span is appended from directive.</span>');
  };
}];

export default directive; 
