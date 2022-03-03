function sendResponse(req, res, object) {
    let message = "";

    if (object.type == 'db_error') {
        console.info(object.error.sqlMessage);
        return res.status(400).json({
            status: false,
            message: "Invalid Data Processed",
            error_message: object.error.sqlMessage
        });
    } else if (object.type == 'bad_request') {
        return res.status(400).json({
            status: false,
            message: "Bad Request"
        });
    } else if (object.type == 'response') {
        if (object.message && object.message != undefined) {
            message = object.message;
        }
        let response = {
            status:  "Success",
            StatusCode: "GFS000001",
            Data: object.data
        }
        return res.status(200).json(response);
    } else {
        return res.status(401).json({
            statusCode: 401,
            
        });
    }
}

module.exports = sendResponse



// test