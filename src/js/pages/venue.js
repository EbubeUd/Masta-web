
domReady(function(){
    //Get Current page params
    var params = getParams(window.location.href);

    if(params.location !== null)
    {
        switch(params.location)
        {
            case "eko":
                break;
            case "pistis":
                break;
            case "arcadian":
            break;
            case "silverbird":
                break;
        }
    }

    function GetLocation()
    {
        if(params.location !== null)
        {
            switch(params.location)
            {
                case "eko":
                    return "Eko Hotel"
                case "pistis":
                    return "Pistis Event Center";
                case "arcadian":
                return "Arcadian Lounge";
                case "silverbird":
                    "Silverbird Cinema";
                    break;
            }
        }
    }

    

    function FixPage()
    {
        if(params == null || params.location == null) return;
        //Set the header text
        var location = GetLocation();
        document.getElementById("location-title").innerText = "Coming Events in " + location;

        //hide all the venue Events, and show the events corresponding to this page
        var all_events = document.getElementsByClassName("venue-event");
        var venue_events = document.getElementsByClassName(params.location);
        var event_count_text = document.getElementById("event-count-text");
        var event_count = venue_events.length;
      

        if(event_count > 0){
            for (var i=0;i<all_events.length;i+=1){
                all_events[i].style.display = 'none';
              }
              for (var i=0;i<venue_events.length;i+=1){
                venue_events[i].style.display = 'block';
              }
        }

        //Display the event count text
        event_count_text.innerHTML = event_count + " Events found";


    }

    FixPage();
})




