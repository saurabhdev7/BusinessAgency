


const siteVerifiy = async (req, res, next) => {
    const API_KEY = "SECRET_KEY";
    const { providedKey } = req.body;

    if(!providedKey) return res.status(400).json({ message: 'API key is required' })
    if(providedKey !== API_KEY) return res.status(401).json({ message: 'Unauthorized' })
    next();    
}

module.exports = {
    siteVerifiy
};