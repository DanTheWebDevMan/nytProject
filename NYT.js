    $("button").on("click", function() {
    var keyword = $(this).attr("searchTerm");
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + keyword + "&api-key=MVqPB2g9BhG6MXiWqaCSwiZjrDz0ua8U";
    //pub_date - start year/end year fields

    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
});    