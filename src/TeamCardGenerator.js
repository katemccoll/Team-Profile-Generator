

function generateCards(employees) {

    let employeeCards = "";
    employees.forEach((employee) => {
        employeeCards += employee.generateCard();
    });

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <title>Team Profile Generator</title>
</head>
<body>

<div class="jumbotron jumbotron-fluid bg-danger text-white">
    <div class="container">
        <h1 class="display-4 text-center font-weight-bold">My Team</h1>
    </div>
</div>

<div class="container d-flex flex-row flex-wrap w-75 p-3 justify-content-center">
    ${employeeCards}
</div>

</body>
</html>`


}

module.exports = generateCards;