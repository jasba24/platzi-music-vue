import { createApp } from "vue"
import App from "@/App.vue"
import router from "@/router"
import { convertMsToMm } from "./filters"
import store from "@/store"
import i18n from "@/i18n"

const app = createApp(App)

app.directive("blur", (el, binding) => {
	el.style.filter = !binding.value ? "blur(3px)" : "(none)"
	el.style.cursor = !binding.value ? "not-allowed" : "pointer"
})

app.use(router)
app.use(store)
app.use(i18n)

app.config.globalProperties.$filters = {
	msToMm(value) {
		return convertMsToMm(value)
	},
}

app.mount("#app")
