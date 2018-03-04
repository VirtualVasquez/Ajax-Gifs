var topics = ['My Hero Academia', 'DragonBall', 'Full Metal Alchemist',
'Naruto', 'Attack on Titan', 'Bono Bono', 'Yu-Gi-Oh', 'Digimon', 'Pokemon'
'Bleach' ]

var show = aMuZaMUV4XlGlcpfWZ91SRE076EX4Av3
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
show + "&api_key=aMuZaMUV4XlGlcpfWZ91SRE076EX4Av3"

//make a for loop that appends topics array as a button to $(#buttons)
$(document).ready(function(){


	function renderButtons(){
        // Deleting the topics prior to adding new topics
        // (this is necessary otherwise you will have repeat buttons)
		$('#buttons').empty();

		//looping through the array of topics
		for (var i = 0; i < topics.length; i++){
			//dynamically generates buttons for each topic in the array
			var a = $('<button>');
			//adding a class of topic-btn to our button
			a.addClass('topic-btn');
			//adding a data-attribute
			a.attr('data-name', topics[i]);
			//providing the intiial button text
			a.text(topics[i]);
			//adding the button to the buttons-view div
			$('#buttons').append(a);
		}
	};
};
//when a button in the #buttons container is clicked, 
//clear #gifHolder container, then generate 10 GIFs
	//append the gifs to #gifHolder
	//gifs MUST be still/paused
	//below every gif, display its rating 

//on click, make GIPHY image animate
	//if giphy is playing, stop animation

//-----------STOP HERE AND MAKE SURE THE STUFF ABOVE WORKS!----------------------

//take the string from "#cartoonInput" and add it to the array
	//have function remake the buttons added to it
