const express = require("express")
const app = express()
const port = 8080

const htmlContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <!-- Include the following line in the head section to link to the Tailwind CSS CDN -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100">
    <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p class="text-lg text-gray-600 mb-8">We offer the best services for your needs with version 2.</p>
        <a href="#"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Get
            Started</a>
    </div>
</body>

</html>`

app.get('/', (req, res)=> res.send(htmlContent))

app.listen(port)
console.log(`app is running on port https://localhost:${port}`)