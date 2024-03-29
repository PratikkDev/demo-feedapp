const MESSAGES = {
    401: "You are unauthorised",
    9999: "Something went wrong!",


    2001: 'Post create Successfully',
    2002: 'All Post Get Successfully',
    2003: 'The image field is required',


};

const getMessage = (messageCode) => {
    if (isNaN(messageCode)) {
        return messageCode;
    }
    return messageCode ? MESSAGES[messageCode] : "";
};
module.exports = getMessage;