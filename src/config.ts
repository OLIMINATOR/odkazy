export const OPEN_GRAPH = {
	image: {
		src: 'og_image.png',
		alt: 'Just links',
	},
	twitter: 'xap3x',
};


export const BUTTONS = [
  {
    name: "GitHub",
    background: "bg-github hover:bg-github/80",
    href: "https://github.com/XAP3xOnTop",
  },
  {
    name: "Instagram",
    background: "bg-instagram hover:bg-instagram/80",
    href: "https://instagram.com/xap.3x",
  },
  {
    name: "SpigotMC",
    background: "bg-spigotmc hover:bg-spigotmc/80",
    href: "https://www.spigotmc.org/members/xap3x.1650610/",
  }
];

export const SITE = {
	title: 'XAP3X_ links',
	description: 'Website to view links',
	url: 'https://xap3xontop.github.io',
	themeColor: "#fbc119",
    schema: {
    	"@context": "https://schema.org/",
        "@type": "ItemList",
        name: "Redirects",
        itemListElement: BUTTONS.map((button, i) => ({
        	"@type": "ListItem",
        	position: i + 1,
        	name: button.name,
        	url: button.href,
        })),
    },
    originalAuthor: {
        name: "OLIMINATOR",
        url: "https://github.com/OLIMINATOR",
      },
};
