const express = require('express')
const router = express.Router()

// import file
const database = require("../../config")

router.post("/add", (request, response) => {
    const userId = request.body.orderingId
    const productId = request.body.productId

    const query = "INSERT INTO ordered_product(ordering_Id, product_Id) VALUES(?, ?)"

    const args = [userId, productId]

    database.query(query, args, (error, result) => {
        if (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                response.status(500).send("Deplicate Entry")
            } else {
                throw error;
            }
        } else {
            response.status(200).send("Added to orderProduct")
            console.log(userId)
        }
    });
});

module.exports = router