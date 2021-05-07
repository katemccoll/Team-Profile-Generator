const fs = require("fs");
const util = require("util");
const cli = require("./src/cli");
const generateCards = require("./src/TeamCardGenerator");

const writeFileAsync = util.promisify(fs.writeFile);

const generateHTML = (answers) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <title>Team Profile Generator</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid bg-danger text-white"">
  <div class="container">
    <h1 class="display-4">My Team</h1>
  </div>
  <div class="card" style="width: 18rem;">
      <div class="card-header">
        <h2 class="name"></h2>
        <h2 class="role"></h2>
      </div>
      <ul class="list-group list-group-flush">
        <li class="id list-group-item"></li>
        <li class="email list-group-item"></li>
        <li class="number list-group-item"></li>
      </ul>
</div>
</div>
</body>
</html>`;

// Bonus using writeFileAsync as a promise
const init = () => {

    cli.askUserForTeamDetails().then((teamDetails) => {
        console.log(teamDetails);

        const cardsHtml = generateCards(teamDetails);
        writeFileAsync("dist/index.html", cardsHtml).then(() => console.log("Generated HTML in dist/"));

    });

};

init();
