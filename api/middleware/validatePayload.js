function validatePayload(req, res, next){
// We're going to clean the payload to make sure it doesn't have anything
// here we dont want.
    console.log('were in the cleaner')
    let cleanPayload = {}
    if (req.body["post_name"]){
        cleanPayload["post_name"] = req.body["post_name"]
    }
    if (req.body["description"]){
        cleanPayload["description"] = req.body["description"]
    }
    if (req.body["city"]){
        cleanPayload["city"] = req.body["city"]
    }
    if (req.body["zip"]){
        cleanPayload["zip"] = req.body["zip"]
    }
    if (req.body["abr_state"]){
        cleanPayload["abr_state"] = req.body["abr_state"]
    }
    console.log(cleanPayload);
    req.cleanPayload = cleanPayload;
    next();
}

module.exports = validatePayload;