# https://gisto.github.io

~~Web pages of [www.gistoapp.com](http://www.gistoapp.com)~~
Web pages of Gisto app https://gisto.github.io

**NOTE!** Default branch is `src`, deployment branch is `master`

### Depends on:

 - jekyll

### Running:

- `bundle install` - to install jekyll and it's dependencies
- `npm install` - to install dependencies (runs `bower install` via postinstall script)
- `gulp` - to run the site with browserSync (will open http://localhost:3000)

### Deploy

- `gulp release --min` - generate `_site` dir, minify files, runs the site with browserSync (will open http://localhost:3000) - it is basically for release and preview
- Commit and push changes (to `src` branch)
- `npm run site-deploy` - will deploy content of generated `_site` with git subtree 
