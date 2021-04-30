import { createRouter, createWebHistory } from "vue-router"

const routes = [
	{
		path: "/",
		name: "Search",
		component: () => import("@/views/Search.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () => import("@/views/About.vue"),
	},
	{
		path: "/track/:id",
		name: "Track",
		props: true,
		component: () => import("@/views/TrackDetail.vue"),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
