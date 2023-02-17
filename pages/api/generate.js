import openai from "openai"

export default async function handler(req, res) {
    try {
        const response = await openai.createImage({
            prompt: req.prompt,
            n: 1,
            size: "256x256",
        });

        console.log(response.data.data[0].url);
        res.status(200).json(response.data.data[0].url)
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}
