const API_publicKey = "FLWPUBK-47f659e67f89a4964e121e4c4e052f7c-X";

function payWithRave(email, phone, reference, amount, cbFunction) {
    var x = getpaidSetup({
        PBFPubKey: API_publicKey,
        customer_email: email,
        amount: amount,
        customer_phone: phone,
        currency: "NGN",
        txref: reference,
        meta: [{
            metaname: "flightID",
            metavalue: "AP1234"
        }],
        onclose: function() {},
        callback: function(response) {
            var txref = response.data.txRef; // collect txRef returned and pass to a                    server page to complete status check.
            console.log("This is the response returned after a charge", response);
            if (
                response.data.chargeResponseCode == "00" ||
                response.data.chargeResponseCode == "0" || response.data.data.responsecode === "0" 
                || response.data.data.responsecode === "00"
            ) {
                cbFunction();
                //var event = $.Event('click');
                //var doc = $("#download-ticket-button").trigger(event);
                console.log("Done2");

            } else {
                // redirect to a failure page.
            }

            x.close(); // use this to close the modal immediately after payment.
        }
    });
}