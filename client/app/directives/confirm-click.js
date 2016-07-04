// export default function confirmedClick(){
//             return {
//                 link: function (scope, element, attr) {
//                     var msg = attr.ngConfirmClick || "Are you sure?";
//                     var clickAction = attr.confirmedClick;
//                     element.bind('click',function (event) {
//                         if ( window.confirm(msg) ) {
//                             scope.$eval(clickAction); 
//                         }
//                     });
//                 }
//             };
// }

let directive = [()=>{
    return {
        link: (scope, element, attr) => {
            let msg = attr.confirmClick || "Are you sure?";
            const yes = 'yes';
            const no = 'no'; 
            let clickAction = attr.confirmedClick;
            element.addAttr('test', 'testing'); 
            element.bind('click', (e)=> {
                element.append(`<span> ${msg} </span>`);
                element.unbind('click'); 
                
            });

        }
    };
}];

export default directive; 