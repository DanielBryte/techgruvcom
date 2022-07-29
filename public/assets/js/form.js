const form = document.getElementById('paymentForm');
form.addEventListener("submit", purchaseNow);

function purchaseNow(e) {
 e.preventDefault();

    //  set configuration
 FlutterwaveCheckout({
        public_key: "FLWPUBK-82ef0799c2836e9f4fa19214995c256b-X",
        tx_ref: "TG_"+Math.floor((Math.random() * 1000000000) + 1),
        amount: document.getElementById("amount").value,
        currency: "NGN",

      //payment_options: "card,mobilemoney,ussd",

        customer: {
           email: document.getElementById("client-email").value,
           phone_number: document.getElementById("client-number").value,

        },

        meta: {
           package: document.getElementById("serviceType").value,
           referral: document.getElementById("referralcode").value,
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




  function handleSubmit () {
   const passAmount = document.getElementById('amount').innerText;
   // to set into local storage
   /* localStorage.setItem("NAME", name); */
   
   sessionStorage.setItem("PASSAMOUNT", passAmount);
   return;
}


function handleSubmit1() {
   const passAmount = document.getElementById('samount').innerText;
   // to set into local storage
   /* localStorage.setItem("NAME", name); */
   
   sessionStorage.setItem("PASSAMOUNT", passAmount);
   return;
}


function handleSubmit2() {
   const passAmount = document.getElementById('aamount').innerText;
   // to set into local storage
   /* localStorage.setItem("NAME", name); */
   
   sessionStorage.setItem("PASSAMOUNT", passAmount);
   return;
}