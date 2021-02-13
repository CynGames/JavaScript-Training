document.getElementById("button-1").addEventListener("click", loadPony);
document.getElementById("button-2").addEventListener("click", loadPonies);

function loadPony() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN: especificar que tipo de request vamos a hacer
  xhr.open("GET", "pony.json", true);

  xhr.onprogress = function () {
    console.log("ReadyState: ", xhr.readyState);
  }

  // Cuando el readystate esta en 4, esto corre.
  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const pony = JSON.parse(this.responseText);

      const output = `
      <ul>
        <li>ID: ${pony.id}</li>
        <li>Name: ${pony.name}</li>
        <li>Town: ${pony.town}</li>
        <li>Element: ${pony.element}</li>
      </ul>
      `;

      document.getElementById("pony").innerHTML = output;
    }
    // document.getElementById("output").innerHTML = `<h1>${this.responseText}</h1>`
  }

  xhr.onerror = function () {
    console.log("Request error... ");
  }

  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request recieved
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP Statuses
  // 200: OK
  // 403: Forbidden
  // 404: Not found
}

// Load Ponies
function loadPonies() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "ponies.json", true);

  xhr.onload = function () {
    if (this.status === 200) {

      const ponies = JSON.parse(this.responseText);
      let output = "";

      ponies.forEach(function (ponies) {
        // Se usa el += para hacer un APPEND en un bucle.
        output += `
        <ul>
          <li>ID: ${ponies.id}</li>
          <li>Name: ${ponies.name}</li>
          <li>Town: ${ponies.town}</li>
          <li>Element: ${ponies.element}</li>
        </ul>
        `;
      })

      document.getElementById("ponies").innerHTML = output;
    }
  }

  xhr.send();
}