export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Polo Academico",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Noticias",
			href: "#Noticias",
		},
		{
			label: "Becas",
			href: "#Becas",
		},
		{
			label: "Eventos",
			href: "#Eventos",
		},
	],
	navMenuItems: [
		{
			label: "Home",
			href: "#Home",
		},
		{
			label: "Noticias",
			href: "#Noticias",
		},
		{
			label: "Becas",
			href: "#Becas",
		},
		{
			label: "Eventos",
			href: "#Eventos",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
