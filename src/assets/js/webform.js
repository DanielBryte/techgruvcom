const webForm = document.getElementById('webForm');
webForm.addEventListener("submit", purchaseNow);

function purchaseNow(e) {
 e.preventDefault();

    //  set configuration
 FlutterwaveCheckout({
        public_key: "FLWPUBK-82ef0799c2836e9f4fa19214995c256b-X",
        tx_ref: "TG_"+Math.floor((Math.random() * 1000000000) + 1),
        amount: document.getElementById("webamount").innerText,
        currency: "NGN",

      //payment_options: "card,mobilemoney,ussd",
        
       customer: {
         email: document.getElementById('webemail').value,
         phone_number: document.getElementById('webnumber').value,
         name:  document.getElementById('webname').value,
       },

        meta: {
           referralcode: document.getElementById("webRefCode").value,
           description: document.getElementById("description").value,
        },

        callback: (data)=> { // specified callback function
            //console.log(data);
              const reference = data.tx_ref;
          alert('Payment complete! Reference: ' + reference);
          },

        customizations: {
            title: "TechGruv",
            description: "Payment for digital service",
            logo: "https://techgruv.co/assets/img/favicon/favicon.png",
        },
    });
  }








