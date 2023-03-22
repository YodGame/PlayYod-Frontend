import { API_URL } from "@/config";
import axios from "axios";
import qs from "qs";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const formData = { username: req.body.username, password: req.body.password };

        let send = await axios.post(
            API_URL + "auth/login",
            qs.stringify(formData),
            {
                headers: {"Content-Type": "application/x-www-form-urlencoded"}
            }
        ).catch(e => {
            return res.json({status: 'error', message: 'Authentication server is down, Please try again later.'});
        });

        const data = send.data;
        if (data?.access_token) {
            const now = new Date();
            const expires = new Date(now.getTime() + 30 * 60000); // set the expiration time to 30 minutes from now
            const cookieValue = 'token='+data.access_token+'; HttpOnly; Path=/ ;expires=' + expires.toUTCString();
            res.setHeader('Set-Cookie', cookieValue);

            const user = (await axios.get(API_URL + "auth/me", {
                headers: {
                    "Authorization": "Bearer " + data.access_token
                }
            })).data

            return res.json({status: 'success', user: user});
        } else {
            return res.json({status: 'error', message: data.message});
        }
    }

    return res.status(400).json({status: 'error', message: '400 Bad Request'});
}
