import { createI18n } from "vue-i18n"

const messages = {
	en: {
		search: "Search",
		about: "About",
		input: "Search songs",
		find: "Found",
	},
	es: {
		search: "Buscar",
		about: "Nosotros",
		input: "Buscar canciones",
		find: "Encontrados",
	},
}

const i18n = createI18n({
	messages,
	locale: "en",
})

export default i18n
