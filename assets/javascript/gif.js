function AnimalButton() {
    var userInput = $('#animal-input').val();
    results(userInput);
}

function submitButton() { //when submit is pressed, a new button is added
    var userInput = $('#animal-input').val();
    if (userInput) {
        $('#animal-buttons').append("<button type='results' onclick= 'results(\"" + userInput + "\")'  class='btn btn-primary' value=' " + userInput + "'> " + userInput + " </button>");
    }
}

function results(animal) {
    $("button").on("click", function () { //this code will have the button when you click the tag 
       // var animal = $(this).attr("#animal-input");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            animal + "&api_key=dc6zaTOxFJmzC&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var animalDiv = $("<div>"); //empty div
                var p = $('<p>').text("rating: " + results[i].rating); //displays rating
                var image = $("<img>");//empty image
                var animation = results[i].images.fixed_height.url;
                var stop = results[i].images.fixed_height_still.url;
                image.attr("src", stop); 
                image.attr("data-still", stop);
                image.attr("data-animate", animation); //displays default image
                image.attr("data-state", "still"); 
                image.addClass("gif");
                animalDiv.append(p);
                animalDiv.append(image);
                $("#gifs-appear-here").prepend(animalDiv); //displays info
            }
        });
    });
}


$(document).on('click', '.gif', function () { //this code allows the gif to move and freeze
    var state = $(this).attr('data-state');
    if (state == 'still') {
        $(this).attr('src', $(this).attr("data-animate"));
        $(this).attr('data-state', 'animate');
    } else {
        $(this).attr('src', $(this).attr("data-still"));
        $(this).attr('data-state', 'still');
    }
});
