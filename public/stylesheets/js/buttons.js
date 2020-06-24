// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
  $("#saveBTN").on("click", function() {
    const id = $(this).data("id");
    const exercise = $(this).data("exercise");

    const Exercise = {
        // COLUMN NAME HERE SLEEPYY
      sleepy: exercise
    };

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: Exercise
    }).then(() => {
      console.log("created new exercise");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $("#deleteBTN").on("click", function(event) {
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(() => {
      console.log("deleted exercise", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
