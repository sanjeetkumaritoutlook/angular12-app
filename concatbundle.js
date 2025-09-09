const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
	    './dist/my-first-project/main.0c65c9dc7e7614fbc883.js',
		'./dist/my-first-project/polyfills.a51ee12752b356932c49.js',
		'./dist/my-first-project/runtime.7acc4d57f510ef4c6b32.js'

    ]

    await fs.ensureDir('elements')

    await concat(files, 'elements/fluid-element.js')
}) ()