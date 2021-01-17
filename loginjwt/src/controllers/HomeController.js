module.exports = {
    async home(req, res) {
        return res.json({autorizado: true, user: req.userId});
    }
}