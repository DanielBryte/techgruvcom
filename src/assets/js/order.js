const serviceType = document.querySelector(".serviceType");
const serviceTime = document.querySelector(".serviceTime");

const designAmount = document.querySelector(".designAmount");
const deliveryTime = document.getElementById("deliveryTime");

deliveryTime.addEventListener('change', function(){



  

  //Delivery Time
  if (serviceTime.options[serviceTime.selectedIndex].text == "urgently") {
    answer = 1 * 2;
  }
  else if (serviceTime.options[serviceTime.selectedIndex].text == "Within 1 week") {
    answer = 1 * 1;
  } 
  else 
  answer = "NIL";



  
  //quantity 
  if (serviceType.options[serviceType.selectedIndex].text == "Logo") {
    answer = answer * 5000;
  } 
  else if (serviceType.options[serviceType.selectedIndex].text == "Flyer") {
    answer = answer * 10000;
  } 
  else if (serviceType.options[serviceType.selectedIndex].text == "Banner") {
    answer = answer * 10000;
  } 
  else if (serviceType.options[serviceType.selectedIndex].text == "Poster design") {
    answer = answer * 10000;
  } 
  else if (serviceType.options[serviceType.selectedIndex].text == "Business card") {
    answer = answer * 5000;
  }
  else if (serviceType.options[serviceType.selectedIndex].text == "Social media design") {
  answer = answer * 5000;
  }
  else if (serviceType.options[serviceType.selectedIndex].text == "Mockup design") {
    answer = answer * 10000;
  }
  else if (serviceType.options[serviceType.selectedIndex].text == "NFT art") {
    answer = answer * 20000;
  }
    else {
    answer = "NIL";
  }
  
  // Price system/quantity ending

 //Currency

  


  
    designAmount.innerText = answer;
    document.getElementById('amount').value = answer
});



