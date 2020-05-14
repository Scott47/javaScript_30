// function enableGroupSelection(inbox) {
//     let lastChecked = null;
//     const checkboxes = Array.from(document.querySelectorAll(inbox))
//   checkboxes.forEach( checkbox => checkbox.addEventListener( 'click', event => {
//       if ( !lastChecked ) {
//

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

  let lastChecked;

  function handleCheck(e){
      //check if user had shift key down and checking box
      let inBetween = false;
      if ( e.shiftKey && this.checked ) {
          checkboxes.forEach(checkbox => {
              console.log(checkbox)
              if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
              }
              if (inBetween) {
                  checkbox.checked = true;
              }
          })
        }
      lastChecked = this;
  }
  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
  console.log(checkboxes)

  console.log("hello world")