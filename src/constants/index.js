let url = "https://api.menukhov.ru:1339"
let getData = url+"/getData"
let register = url +'/auth/local/register'
let auth  = url + '/auth/local'
let forgot = url + '/auth/forgot-password'
let me = url + '/getMyData'
let reset = url + '/auth/reset-password'
let upload = url + '/upload'
let setAvatar = url + '/setAvatar'
let setDz = url + '/setDz'

export default {url, getData, register, auth, forgot, me, reset, upload, setAvatar, setDz}