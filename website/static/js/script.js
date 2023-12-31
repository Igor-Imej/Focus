function deleteNote(noteId) {
  // take note id that was passed in index.html
  fetch("/delete-note", {
    // send post request to delete note endpoint
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/notes"; // redirect to home page (refresh page)
  });
}

function deleteNoteAll(userId) {
  // take note id that was passed in index.html
  fetch("/delete-note-all", {
    // send post request to delete note endpoint
    method: "POST",
    body: JSON.stringify({ userId: userId }), // make sure it's userId, not id
  }).then((_res) => {
    window.location.href = "/notes"; // redirect to home page (refresh page)
  });
}

function deleteTodo(todoId) {
  // take note id that was passed in index.html
  fetch("/delete-todo", {
    // send post request to delete note endpoint
    method: "POST",
    body: JSON.stringify({ todoId: todoId }),
  }).then((_res) => {
    window.location.href = "/todo"; // redirect to home page (refresh page)
  });
}

function completeTodo(todoId) {
  fetch("/complete-todo", {
    method: "POST",
    body: JSON.stringify({ todoId: todoId }),
  }).then((_res) => {
    window.location.href = "/todo";
  });
}

function deleteQuiz(quizId) {
  // take note id that was passed in index.html
  fetch("/delete-quiz", {
    // send post request to delete note endpoint
    method: "POST",
    body: JSON.stringify({ quizId: quizId }),
  }).then((_res) => {
    window.location.href = "/quiz"; // redirect to home page (refresh page)
  });
}

function deleteQuizAll(userId) {
  fetch("/delete-quiz-all", {
    method: "POST",
    body: JSON.stringify({ userId: userId }),
  }).then((_res) => {
    window.location.href = "/quiz";
  });
}

function deleteDeck(deckId) {
  fetch(`/delete-deck/${deckId}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        location.reload();
      } else {
        alert("Error deleting deck");
      }
    });
}

function toggle() {
  var x = document.getElementById("dropdown-toggle");

  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleMobile() {
  var x = document.getElementById("mobile-menu");

  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
