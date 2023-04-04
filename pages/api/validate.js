import { API_URL } from "@/config";
import axios from "axios";

export default async function handler(req, res) {
    const cookie = req.headers.cookie?.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

    if (cookie) {
        const user = await axios.get(API_URL + "auth/me", {
            headers: {
                "Authorization": "Bearer " + cookie
            }
        }).catch(() => {
            res.setHeader('Set-Cookie', 'token=expired; HttpOnly; Path=/ ;Max-Age=0');
            return res.json({ message: "Invalid token" });
        }).then(r => {
            if (r?.data?.username) {
                return res.json({user: r.data});
            }
        })
    } else {
        return res.json({});
    }
}
