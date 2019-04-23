$("#addBurger").on("click", function(event){
    
    event.preventDefault();

    console.log("button clicked")

    var addBurger = $("#makeBurger").val().trim();

    $.ajax("/api/burgers", {
        type: "POST",
        data: addBurger
    }).then(function () {
            console.log("created new burger");
        });

});