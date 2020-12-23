declare const VERSION:string;

const version = `v${VERSION}`;

const cacheList = [
	"/",
	"/main.css",
	"/main.js",
	"/fonts/dark.png",
	"/fonts/light.jpg",
	"/core.worker.worker.js"
];

self.addEventListener("install", (event) => {
	console.log(version, event);
});

/*self.addEventListener("activate", (event) => {
});*/