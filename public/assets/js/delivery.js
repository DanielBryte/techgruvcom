
function populate(s1, deliveryTime) {
    var s1 = document.getElementById(s1);
    var deliveryTime = document.getElementById(deliveryTime);
    deliveryTime.innerText = "";
 
 
   // Delievery Time
    if(s1.value == "Logo") {
      var optionArray = [
       "Select below", "urgently", "Within 1 week",
       ];
     }
 
    else if(s1.value == "Flyer") {
     var optionArray = [
      "Select below","urgently", "Within 1 week",
      ];
   }

   else if(s1.value == "Banner") {
    var optionArray = [
     "Select below","urgently", "Within 1 week",
     ];
  }

  else if(s1.value == "Poster design") {
    var optionArray = [
     "Select below","urgently", "Within 1 week",
     ];
  }

  else if(s1.value == "Business card") {
    var optionArray = [
     "Select below","urgently", "Within 1 week",
     ];
  }

  else if(s1.value == "Social media design") {
    var optionArray = [
     "Select below","urgently", "Within 1 week",
     ];
  }

  else if(s1.value == "Mockup design") {
    var optionArray = [
     "Select below","urgently", "Within 1 week",
     ];
  }

  else if(s1.value == "NFT art") {
    var optionArray = [
     "Select below","urgently", "Within 1 week",
     ];
  }

        
   for (var i = 0; i < optionArray.length; i++) {
    var newOption = document.createElement('option');
    newOption.value = optionArray[i];
    newOption.innerHTML = optionArray[i];
    deliveryTime.appendChild(newOption);
  }

}

