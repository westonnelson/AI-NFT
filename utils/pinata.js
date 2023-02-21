const axios = require("axios");
const Readable = require("stream").Readable;

const FormData = require("form-data");
const JWT = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIzMDZhOGRhZC0yYTUzLTQ2ODMtODIwMS03N2M5NmNiZDFiZTgiLCJlbWFpbCI6ImV0aGFuaGFzYnJvdWNrMDJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjFjMjFhNTg1Zjc2N2E4NTYwZjY1Iiwic2NvcGVkS2V5U2VjcmV0IjoiNWRmYjdjZWYzZTEwZWFjMjk5NjA4OWIxYTZkNzQwZGEwZmY5MzNkYjU4NTIxYjU4MWI3N2FhMjBjNTk1NjM4NiIsImlhdCI6MTY3Njc0NTAwNX0.9VJOsNVP1gMbZYZHfyv6gp4W5Jdgja8gsHsD6wSgR0k`;

export const pinJSONToIPFS = async (JSONBody) => {
var config = {
    method: "post",
    url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    headers: {
        "Content-Type": "application/json",
        Authorization:
            JWT,
    },
    data: JSONBody,
};

const res = await axios(config);
return res
};

module.exports = {pinJSONToIPFS};
