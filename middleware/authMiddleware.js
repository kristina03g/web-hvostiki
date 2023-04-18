const sKey = "random_secret_key123"

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({message: "Не авторизован"})
        }
        const decoded = jwt.verify(token, sKey)
        req.client = decoded
        next()
    } catch (e) {
        res.status(403).json({message: "Не авторизован"})
    }
}