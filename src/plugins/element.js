import Vue from 'vue'
import { Button, Select, Option } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
