module.exports = {

    async isName(req, res){
        name = req.params.name;
        res.send("Olá " + name)
    }

}