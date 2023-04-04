export default function handler(req, res) {
    res.setHeader('Set-Cookie', 'token=expired; HttpOnly; Path=/ ;Max-Age=0');

    return res.status(200).json({status: "success"});
}
