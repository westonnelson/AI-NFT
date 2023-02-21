const axios = require("axios");
const Readable = require("stream").Readable;

const FormData = require("form-data");
const JWT = `Bearer ${process.env.PINATA_JWT}`;

export const pinJSONToIPFS = async (JSONBody) => {
    var config = {
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        headers: {
            "Content-Type": "application/json",
            Authorization: JWT,
        },
        data: JSONBody,
    };

    const res = await axios(config);
    return res;
};

export default async function handler(req, res) {
    const { name, image, description } = req.body;
    console.log(name);
    const response = await pinJSONToIPFS(req.body);

    res.status(200).json(response);
}
