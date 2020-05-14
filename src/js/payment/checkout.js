function MakePayment(){

    var email = document.getElementById("ticket-email").value;
    var phone = document.getElementById("ticket-phone").value;
    var reference = document.getElementById("ticket-reference").value;
    var amount = 5000;

    payWithRave(email, phone, reference, amount, paymentCallback);
}


function paymentCallback(){
    var event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });
    var doc = document.getElementById("download-ticket-button");
    doc.dispatchEvent(event);
    console.log("Done");
}




