export function isInputNotEmpty(req, res, next) {
    try {
        const { name, rocketType, latitude, longitude, city } = req.body
        if (!name) {
            return res.json("you didn't enter a name")
        }
        if (!latitude) {
            return res.json("you didn't enter a latitude")
        }
        if (!longitude) {
            return res.json("you didn't enter a longitude")
        }
        if (!city) {
            return res.json("you didn't enter a city")
        }
        next()
    } catch (error) {
        return res.json({ error: `the problrem is in the middeware isEmpty: ${error}` })
    }
}