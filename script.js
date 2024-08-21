/* General Reset */
body, h1, p, a {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
}

/* Hero Section */
.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.hero-content {
    text-align: center;
    color: #fff;
    max-width: 600px;
    padding: 20px;
}

.hero-content h1 {
    font-size: 3em;
    margin-bottom: 20px;
}

.hero-content p {
    font-size: 1.2em;
    margin-bottom: 30px;
}

.explore-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #e60023;
    color: #fff;
    text-decoration: none;
    border-radius: 25px;
    font-size: 1em;
}

.explore-button:hover {
    background-color: #d5001c;
}
