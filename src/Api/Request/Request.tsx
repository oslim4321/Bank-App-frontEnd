
import axios from "axios";


let TOKEN
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJpZCI6IjYzYTQzZDU5Njk1ZDM2MjVmNGU1YzM1ZCIsImlzQWRtaW4iOmZhbHNlfSwiaWF0IjoxNjcxNzA3OTkzLCJleHAiOjE2NzE5NjcxOTN9.YMptTSA-YbbQiZ4YC9ppILq3GyqGH_mNwkrLN3Zs7zs";

if (typeof window !== "undefined") {
    TOKEN = localStorage.getItem('BankToken')
}

// console.log(localStorage.getItem('BankToken'))

console.log(TOKEN)
const Base_Url = 'http://localhost:1234/api/v1/banking/'


export const PublicRequest = axios.create({
    baseURL: Base_Url
})

export const UserRequest = axios.create({
    baseURL: Base_Url,
    headers: {
        token: `Bearer ${TOKEN}`,
    }
})