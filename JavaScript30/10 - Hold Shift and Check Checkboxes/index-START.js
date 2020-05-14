// function enableGroupSelection(inbox) {
//     let lastChecked = null;
//     const checkboxes = Array.from(document.querySelectorAll(inbox))
//   checkboxes.forEach( checkbox => checkbox.addEventListener( 'click', event => {
//       if ( !lastChecked ) {
//         lastChecked = checkbox;

//         return;
//       }
//       if ( event.shiftKey ) {
//         const start = checkboxes.indexOf( checkbox );
//         const end   = checkboxes.indexOf( lastChecked );

//         checkboxes
//           .slice( Math.min( start, end ), Math.max( start, end ) + 1 )
//           .forEach( checkbox => checkbox.checked = lastChecked.checked );
//       }
//       lastChecked = checkbox;
//     } ) );
//   }


  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

  function handleCheck(e){
      console.log(e)
  }
  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
  console.log(checkboxes)

  console.log("hello world")