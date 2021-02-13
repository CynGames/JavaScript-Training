document.getElementById("button-1").addEventListener("click", getText);
document.getElementById("button-2").addEventListener("click", getJSON);
document.getElementById("button-3").addEventListener("click", getAPIData);

// Get local text data
function getText(e) {
  fetch("test.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      document.getElementById("output").innerHTML = data;
    })
    .catch(function err() {
      console.log(err);
    });

  e.preventDefault();
}

// Get local json data
function getJSON(e) {
  fetch("posts.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = "";

      data.forEach(function (post) {
        output += `
        <li>Title: ${post.title}</li>
        <li>Body: ${post.body}</li>
        <br>
        `
      });

      document.getElementById("output").innerHTML = output;
    })
    .catch(function err() {
      console.log(err);
    });

  e.preventDefault();
}

// Get API
function getAPIData(e) {
  fetch("https://api.github.com/users")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = "";

      data.forEach(function (user) {
        output += `
      <li>${user.login}</li>
      `
      });

      document.getElementById("output").innerHTML = output;
    })
    .catch(function err() {
      console.log(err);
    });

  e.preventDefault();
}