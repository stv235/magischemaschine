import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import css from 'rollup-plugin-css-only';
import { terser } from 'rollup-plugin-terser';

const production = true;

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/bundle.js'
    },
    plugins: [
        svelte({ compilerOptions: { dev: production },
        preprocess: sveltePreprocess({
            defaults: {
                style: 'scss'
            }
        }
        )
        }),
        css({ output: 'bundle.css' }),
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        commonjs(),
        !production && serve('public'),
        !production && livereload('public'),
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
};