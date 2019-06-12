//create new button when Submit is pressed 

$("button").on("click", function () { //this code will have the button when you click the tag 
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) { 
        console.log(response);
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var animalDiv = $("<div>");
            var p = $('<p>').text("rating: " + results[i].rating);
            var image = $("<img>");
            image.attr("src", results[i].images.fixed_height.url);
            animalDiv.append(p);
            animalDiv.append(image);
            $("#gifs-appear-here").prepend(animalDiv);
        }
    });
});

$('.movImage').on('click', function() { //this code allows the gif to move and freeze
    var state = $(this).attr('data-state');
    if (state == 'still') {
        $(this).attr('src', $(this).attr("data-animate"));
        $(this).attr('data-state', 'animate');
    } else {
        $(this).attr('src', $(this).attr("data-still"));
        $(this).attr('data-state', 'still');
    }

});

//need a code to search the giphy.api
//code for putting the picturesd 3 per row 