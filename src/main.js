import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router"
import { convertMsToMm } from "./filters"

const app = createApp(App)
app.use(router)
app.config.globalProperties.$filters = {
	msToMm(value) {
		return convertMsToMm(value)
	},
}
app.mount("#app")
