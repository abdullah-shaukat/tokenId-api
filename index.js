const express = require("express");
const ethjs = require("ethjs");

// Create an instance of the express app
const app = express();
app.use(express.json());

app.get("/token/:address/:tokenId", async (req, res) => {
    // Get the wallet address and token ID from the URL
    const address = req.params.address;
    const tokenId = req.params.tokenId;

    res.status(200).send(tokenId);
});

app.get("nft/:address/:tokenId", async(req, res) => {
    res.status(200).send(req.tokenId);
})

app.listen(3000, () => {
    console.log("API listening on port 3000");
});
