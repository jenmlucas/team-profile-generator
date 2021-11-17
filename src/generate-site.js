const fs = require("fs");

const generateHTML = () => {
    return (
        `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
	<title> Team Profile Generator </title>
</head>
<body>

<header>
    <h1 class="text-center"> Team Profile Generator </h1>
</header> 

<main> 

<section> 

    <h1></h1>

</section>


</main>
    
</body>

</html>
`
    )
}

const html = generateHTML();

fs.writeFile('./dist/index.html', html, err => {
    if (err) {
        reject(err);
        return;
    }
    resolve({
        ok: true,
        message: "File Created!"
    })
});