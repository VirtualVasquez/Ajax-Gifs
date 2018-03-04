//VARIABLES AND FUNCTIONS
//===================================================================================
var topics = ['My Hero Academia', 'DragonBall', 'Full Metal Alchemist',
'Naruto', 'Attack on Titan', 'One Punch Man', 'Yu-Gi-Oh', 'Digimon', 'Pokemon',
'Bleach']

//MAKE A LOOP THAT APPENDS TOPICS ARRAY TO #BUTTONS
function renderButtons(){

	//looping through the array of topics
	for (var i = 0; i < topics.length; i++){
		//dynamically generates buttons for each topic in the array
		var a = $('<button>');
		//adding a class of topic-btn to our button
		a.addClass('topic');
		//adding a data-attribute
		a.attr('data-name', topics[i]);
		//providing the initial button text
		a.text(topics[i]);
		//adding the button to the buttons-view div
		$('#buttons').append(a);
	}
};



//MAIN PROCESSES
//===================================================================================

$(document).ready(function(){

	renderButtons();
	//WHEN #buttons CLICKED...
	//THEN GENERATE 10 PAUSED GIFS WITH RATING
	$('button.topic').on("click", function(){
		var show = $(this).attr('data-name');
		console.log(show);
		//clear #gifHolder
		$('#gifHolder').empty();
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
		show + "&api_key=aMuZaMUV4XlGlcpfWZ91SRE076EX4Av3";

		$.ajax({
			url: queryURL,
			method: "GET"
		})
		  .then(function(response){
		  	var results = response.data;
		  	//generates 10 GIFs, hence i < 10 
		  	for (var i = 0; i < 10; i++){
		  		var gifDiv = $("<div class ='item'>");
		  		var rating = results[i].rating;
		  		var p = $("<p>").text("Rating: " + rating);
		  		
		  		var showImage = $("<img>");
		  		showImage.attr("src", results[i].images.fixed_height_still.url);
		  		showImage.attr('data-still', results[i].images.fixed_height_still.url);
				showImage.attr('data-animate', results[i].images.fixed_height.url);
				showImage.attr('data-state', 'still');
				showImage.addClass('gif');
		  		//***append the gifs to #gifHolder
		  		gifDiv.prepend(p);
		  		//***below every gif, display its rating 
		  		gifDiv.prepend(showImage);

		  		$("#gifHolder").prepend(gifDiv);

		  			$('div > img.gif').on('click', function(){

					var state = $(this).attr('data-state');
					console.log(state);

				//if (state == 'still'){
				//	state = 'animate';
				//	$(this).attr('data-state', state);
				//	$(this).attr('src', $(this).attr('data-animate'))
				//}
				//else{
				//	state = 'still';
				//	$(this).attr('data-state', state);
				//	$(this).attr('src', $(this).attr('data-still'));
				//}
				});
		  	}

		  })
	});


});
	//***gifs MUST be still/paused

//***on click, make GIPHY image animate
	//***if giphy is playing, stop animation

//-----------STOP HERE AND MAKE SURE THE STUFF ABOVE WORKS!----------------------

//take the string from "#cartoonInput" and add it to the array
	//have function remake the buttons added to it
