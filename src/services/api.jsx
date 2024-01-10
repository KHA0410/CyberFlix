import axios from "axios";

export const https = axios.create({
    baseURL: "https://movienew.cybersoft.edu.vn",
    headers: {
        TokenCybersoft : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1OCIsIkhldEhhblN0cmluZyI6IjExLzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxODA2NDAwMDAwMCIsIm5iZiI6MTY5MDM5MDgwMCwiZXhwIjoxNzE4MjExNjAwfQ.631rl3EwTQfz6CuufNTJlys36XLVmoxo29kP-F_PDKU"
    }
})