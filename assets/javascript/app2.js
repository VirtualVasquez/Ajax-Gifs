//VARIABLES AND FUNCTIONS
//===================================================================================
var topics = ['Attack on Titan', 'Bleach', 'Digimon', 'DragonBall', 'Full Metal Alchemist', 'My Hero Academia', 'Naruto', 'One Punch Man', 'Pokemon', 'Yu-Gi-Oh' ]
var newTopics = [];

//MAKE A LOOP THAT APPENDS TOPICS ARRAY TO #BUTTONS
function renderButtons(){
  $('#buttons').empty();
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

function renderNewButtons(){
  $('#newButtons').empty();
  //looping through the array of topics
  for (var i = 0; i < newTopics.length; i++){
    //dynamically generates buttons for each topic in the array
    var b = $('<button>');
    //adding a class of topic-btn to our button
    b.addClass('topic');
    //adding a data-attribute
    b.attr('data-name', newTopics[i]);
    //providing the initial button text
    b.text(newTopics[i]);
    //adding the button to the buttons-view div
    $('#newButtons').append(b);
  }  
}

//MAIN PROCESSES
//===================================================================================

$(document).ready(function(){
  renderButtons();

  $('#gifHolder').delegate('img.gif', 'click', function(){
    var state = $(this).data('state');
    //if gif is paused, click will animate
    if (state == 'still'){
      state = 'animate';
      $(this).data('state', state);
      $(this).attr('src', $(this).data('animate'))
    }
    //if gif is animated, click will pause
    else{
      state = 'still';
      $(this).data('state', state);
      $(this).attr('src', $(this).data('still'));
    }
  });

  $('#addButton').on("click", function(event){
    event.preventDefault();
    //take the string from "#animeInput" and add it to the array
    var newButton = $("#animeInput").val().trim();
      newTopics.push(newButton);
      $('#animeInput').val('');
      renderNewButtons();
  }); 

  //WHEN #buttons CLICKED...
  //THEN GENERATE 10 PAUSED GIFS WITH RATING
  $("#buttons").delegate("button.topic", "click", function(){
    var show = $(this).attr('data-name');    
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
          var gifDiv = $("<div class='item col-xs-12'>"),
              rating = results[i].rating,
              p = $("<p>").addClass('col-xs-12').text("Rating: " + rating);
          var showImage = $("<img>");
          showImage.attr("src", results[i].images.fixed_height_still.url)
                   .data('still', results[i].images.fixed_height_still.url)
                   .data('animate', results[i].images.fixed_height.url)
                   .data('state', 'still')
                   .addClass('gif col-xs-12');
          //***append the gifs to #gifHolder paused
          gifDiv.prepend(p).prepend(showImage);
          //***below every gif, display its rating
          $("#gifHolder").prepend(gifDiv);
        }
    });
  });

  $("#newButtons").delegate("button.topic", "click", function(){
    var show = $(this).attr('data-name');    
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
          var gifDiv = $("<div class ='item col-xs-6'>"),
              rating = results[i].rating,
              p = $("<p>").text("Rating: " + rating);
          var showImage = $("<img>");
          showImage.attr("src", results[i].images.fixed_height_still.url)
                   .data('still', results[i].images.fixed_height_still.url)
                   .data('animate', results[i].images.fixed_height.url)
                   .data('state', 'still')
                   .addClass('gif');
          //***append the gifs to #gifHolder paused
          gifDiv.prepend(p).prepend(showImage);
          //***below every gif, display its rating
          $("#gifHolder").prepend(gifDiv);
        }
    });
    
  });

});


