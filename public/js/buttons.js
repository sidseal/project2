// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
  const userExercises = JSON.parse(localStorage.getItem("userExercises")) || {
    Sun: [],
    Mon: [],
    Tues: [],
    Wed: [],
    Thurs: [],
    Fri: [],
    Sat: []
  };

  // display exercises in local storage on cards
  function displayStoredExercises() {
    // for each day
    Object.entries(userExercises).forEach(([key, value]) => {
      const exerciseDiv = $("#" + key).find("ul");
      // loop though the exercises
      userExercises[key].forEach(ex => {
        if (ex) {
          $("#instruction").text("");
        }
        //display the exercises
        const liEl = $("<li>").text(ex);
        exerciseDiv.append(liEl);
      });
    });
  }

  $(".fa-heartbeat").on("click", e => {
    const heartbeat = $(e.target);
    const input = heartbeat.siblings("input").val();
    const day = heartbeat.parents(".row").attr("id");
    const category = heartbeat.siblings(".dropdown-menu").val();

    if (!category && !input) {
      heartbeat
        .siblings(".message")
        .text("Please select a category or type an exercise.");
      return;
    }
    // clear any prior message
    heartbeat.siblings(".message").text("");
    $("#instruction").text("");

    //clear category
    heartbeat.siblings(".dropdown-menu").val(" ");

    //clear input
    heartbeat.siblings("input").val("");

    if (input) {
      // add input to day's array
      userExercises[day].push(input);

      // display input and button on screen
      const exerciseDiv = $("#" + day).find("ul");

      const liEl = $("<li>").text(input);

      exerciseDiv.append(liEl);

      // store category and input to localStorage
      localStorage.setItem("userExercises", JSON.stringify(userExercises));
    } else {
      // get exercise selection from db
      $.ajax({
        url: "/api/exercises/" + category,
        method: "GET"
      }).then(data => {
        console.log("data", data);

        // display relevant exercises in second drop down (one option is to create a second drop down in the html that will be placed in the same area as the input box; then when the user chooses a category, you hide the input box and display the second drop down)
      });
    }
  });

  // needs to clear item from local storage
  $(".fa-trash").on("click", function() {
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/exercises" + id, {
      type: "DELETE"
    }).then(() => {
      console.log("deleted exercise", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  displayStoredExercises();
});
