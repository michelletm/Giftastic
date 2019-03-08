$(document).ready(function(){

    
   $(".btn").on("click", function() {
    
      var show = $(this).attr("data-show")
    	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=dc6zaTOxFJmzC&limit=10";
    
    		$.ajax({
            url: queryURL,
            method: "GET"
         })
            .then(function(response) {
					console.log(response);
            
    				var results = response.data;
    				console.log(response.data);
    			
    				for (var i = 0; i < results.length; i++) {
					 
						var gifDiv = $("<div>")
						var rating = results[i].rating;
	
						console.log(results.rating);
	
						var p = $("<p>").text("Rating: " + rating);
	
						var showImage = $("<img>");
	
						showImage.attr("src", results[i].images.fixed_height.url);
						//console.log(showImage);
						showImage.attr("data-state", "still")
	
						gifDiv.append(p);
						gifDiv.append(showImage);
	
						$("#newShowGifs").prepend(gifDiv); 
					};	
				
					$("<img>").on("click", function() {
						
						var state = $(this).attr("data-state");
						
						if (state === "still") {
						  $(this).attr("src", $(this).attr("data-animate"));
						  $(this).attr("data-state", "animate");
						} else {
						  $(this).attr("src", $(this).attr("data-still"));
						  $(this).attr("data-state", "still");
						}
					 });
				
				});			
    	});
	});
	 
	$("#submit-btn").on("click", function () {
    	var newShow = $(this).attr("value")
    	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newShow + "&api_key=dc6zaTOxFJmzC&limit=10";
	 
		 var newShows = [];
		 
    	$.ajax({
    		url: queryURL,
    		method: "GET"
    	})
    		//.then(function(response) {
    
    			//console.log(response);
    
    			//var addResults = response.data;
    
    			//var newBtn = $(".btn")
    			
    			//newBtn.attr("data-show", (this).value);
    			
    			//$(".btn").append(newBtn)
    
			//})

			
				



	});
    
			 
	
			
