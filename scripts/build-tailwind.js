const { scanTailwindJSClasses } = require("@jonathanconway/tailwindjs/build");

const srcPath = `${__dirname}/../src`;

console.log(`Building TailwindJS classes from ${srcPath}...`)

scanTailwindJSClasses(srcPath);

console.log(`Building TailwindJS classes from ${srcPath} - done.`)