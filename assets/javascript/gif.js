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
            console.log(response);
            for (var i = 0; i < results.length; i++) {
                var animalDiv = $("<div>"); //empty div
                var p = $('<p>').text("rating: " + results[i].rating); //displays rating
                var image = $("<img>");
                image.attr("src", results[i].images.fixed_height.url); //displays image
                animalDiv.append(p);
                animalDiv.append(image);
                $("#gifs-appear-here").prepend(animalDiv);
            }
        });
    });
}

$('.movImage').on('click', function () { //this code allows the gif to move and freeze
    var state = $(this).attr('data-state');
    if (state == 'still') {
        $(this).attr('src', $(this).attr("data-animate"));
        $(this).attr('data-state', 'animate');
    } else {
        $(this).attr('src', $(this).attr("data-still"));
        $(this).attr('data-state', 'still');
    }
});

//code for putting the picturesd 3 per row 