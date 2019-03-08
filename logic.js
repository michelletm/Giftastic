$(document).ready(function(){
 
	var tvshows = ["Game of Thrones", "Black Sails", "Deadwood", "The Punisher"]
	 
	function renderButtons() {
		$(".buttoncontainer").empty();

		for (var i = 0; i < tvshows.length; i++) {
		
			var a = $("<button>");
					
			a.addClass("btn");
				
			a.attr("data-show", tvshows[i]);
					
			a.text(tvshows[i]);
			$(".buttoncontainer").append(a);
		};
	}
	 
	
    $("div.buttoncontainer").on("click", ".btn", function() {
    
      var show = $(this).attr("data-show")
    	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=dc6zaTOxFJmzC&limit=10";
   
    		$.ajax({
            url: queryURL,
            method: "GET"
         }).then(function(response) {
					console.log(response);
            
    				var results = response.data;
    				console.log(response.data);
    			
    				for (var i = 0; i < results.length; i++) {
					 
						var gifDiv = $("<div>")
						var rating = results[i].rating;
	
						console.log(results.rating);
	
						var p = $("<p>").text("Rating: " + rating);
	
						var showImage = $("<img>");

						var iStill = results[i].images.fixed_height_still.url;
						var iNot = results[i].images.fixed_height.url;
	
						showImage.attr("src", iStill); 
						showImage.attr("data-still", iStill); 
						showImage.attr("data-animate", iNot); 
						showImage.attr("data-state", "still"); 
						showImage.addClass("gif");
			
						console.log()

						gifDiv.append(p);
						gifDiv.append(showImage);
	
						$("#newShowGifs").prepend(gifDiv); 
					};	

					$(".gif").on("click", function() {
						
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


	$("#submit-btn").on("click", function () {
		
		var newShow = $("#textbox").val().trim();
    	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newShow + "&api_key=dc6zaTOxFJmzC&limit=10";
	
    	$.ajax({
    		url: queryURL,
    		method: "GET"
		}).then(function(response) {
			console.log(response);
		
			var results = response.data;
			console.log(response.data);

			//var newTv = [];
			
			tvshows.push(newShow);
			console.log(this);
			renderButtons();
		
		});
	
		
	});
	
});
