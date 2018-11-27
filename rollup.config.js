import { rollup } from 'rollup';
import minify from 'rollup-plugin-babel-minify';

const plugins = [];

//"build": "rollup -c --environment INCLUDE_DEPS,BUILD:production"
if (process.env.BUILD === "production") {
    
}

export default {
    input: "index.js",
    output: [{
        file: "react-hook-use-resize-observer.es6.js",
        format: "es",
        dir: "build",
    }, {
        file: "react-hook-use-resize-observer.cjs.js",
        format: "cjs",
        dir: "build",
    },
    {
        name: "useResizeObservable",
        file: "react-hook-use-resize-observer.umd.js",
        format: "umd",
        dir: "build",
    }],
    external: ["react"],
    plugins: [
		minify({
            comments: false
        })
	]
};
