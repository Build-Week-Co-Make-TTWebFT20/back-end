function isValid(user){
    return Boolean(user.username && user.password && typeof user.password === "string" && typeof user.username === "string")
}

module.exports = {
    isValid
};
