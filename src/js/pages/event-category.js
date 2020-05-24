
domReady(function(){
    //Get Current page params
    var params = getParams(window.location.href);


    function GetCategory()
    {
        if(params.category !== null)
        {
            switch(params.category)
            {
                case "conference":
                    return "Conferences"
                case "concert":
                    return "Concerts";
                case "festival":
                    return "Festivals";
                case "family":
                    return "Family Events";
                case "theater":
                    return "Arts and Theater Events";
                case "opera":
                    return "Opera Events";
                case "cirque":
                    return "Cirque Events";
                case "ballet":
                    return "Ballet Events";
            }
        }
    }

    

    function FixPage()
    {
        if(params == null || params.category == null) return;
        //Set the header text
        var category = GetCategory();
        console.log(category);

        document.getElementById("category-title").innerText = "Upcoming " + category;
        //hide all the venue Events, and show the events corresponding to this page
        var all_events = document.getElementsByClassName("category-event");
        var venue_events = document.getElementsByClassName(params.category);
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




