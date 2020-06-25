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
      // laura edited
      console.log(input);
      console.log(category);
      $.post({
        url: "/api/exercises",
        data: {
          name: input,
          category: category
        }
      }).then(data => {
        console.log("data", data);
      });
    }
  });




  displayStoredExercises();

  function getDate() {
    $("#currentDay").text(moment().format("dddd"));
  }
  console.log("test");
  getDate();
});
