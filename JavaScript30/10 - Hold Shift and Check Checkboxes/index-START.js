


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

  var myFavoriteFlavor = "Phish Food";

  if (myFavoriteFlavor === "chocolate") {
      console.log("user likes chocolate");
  } else if (myFavoriteFlavor === "vannilla") {
      console.log("user likes vanilla");
  } else if (myFavoriteFlavor === "mint chocolate chip") {
      console.log("user likes mint chocolate chip");
  } else {
      console.log("User likes " + myFavoriteFlavor + myFavoriteFlavor + "best.")
  }
