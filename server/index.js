const express = require("express");
const path = require("path");

const app = express();
const port = process.env.SERVER_PORT || 5000;

if(process.env.NODE_ENV === "production" ){
    app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get('/health', (req, res) => {
    res.status(200).json({oki:"dok"});
})
app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});

module.exports = app;
