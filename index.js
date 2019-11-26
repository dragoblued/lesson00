const browserSync = require('browser-sync');
browserSync({
	server: "app",
	files: ["app/index.html", "app/css/*.css", "app/js/*.js"]
});