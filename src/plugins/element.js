import Vue from 'vue'
import { Button, Select, Option, Dialog,  Form, FormItem, Input, InputNumber, Checkbox, Notification, Loading , Drawer} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Checkbox)
Vue.use(Notification)
Vue.use(Drawer)

Vue.prototype.$notify = Notification;
Vue.prototype.$loading = Loading.service;
