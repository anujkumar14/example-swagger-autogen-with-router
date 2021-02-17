module.exports = {

    async show(req, res) {
        /* 	#swagger.tags = ['User']
            #swagger.description = 'Endpoint to sign in a specific user' */

        res.setHeader('Content-Type', 'application/json')
        return res.status(200).send(true)
    },

    async delete(req, res) {
        return res.status(204).send("delete")
    }
}