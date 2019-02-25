
$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burgerInfo").val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("Created a new burger.");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

$(".devourbtn").on("click", function(event) {
    var id = $(this).data("id")
    var changeBurger = {
        devoured: 0
    };
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: changeBurger
    }).then(
        function () {
            console.log("Burger Devoured");
            location.reload();
        }
    );
});