
exports.show = (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in a specific user' */

    res.setHeader('Content-Type', 'application/json')
    return res.status(200).send(true)
}