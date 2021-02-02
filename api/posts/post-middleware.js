function checkForm(req, res, next){
    const post = req.body;
    if (post.name && post.description && post.city && post.state && post.zip && post.creator_id){
        next();
    } else {
        res.status(400).json({ message: "Your post must include a name, description, city, state, and zip code. Your post must also be submitted by a valid user" })
    }
}

module.exports = checkForm;