let url = "https://api.menukhov.ru:1339"
let getData = url+"/getData"
let register = url +'/auth/local/register'
let auth  = url + '/auth/local'
let forgot = url + '/auth/forgot-password'
let me = url + '/users/me'
let reset = url + '/auth/reset-password'

export default {url, getData, register, auth, forgot, me, reset}