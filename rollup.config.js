import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import external from 'rollup-plugin-peer-deps-external'

const config = {
  input: 'src/index.ts',
  plugins: [
    typescript({
      exclude: [
        '**/tests',
        '**/*.test.ts',
        '**/*.cy.tsx',
        '**/stories',
        '**/*.stories.ts',
      ],
    }),
    external(),
    resolve(),
    commonjs(),
    terser(),
    babel({
      babelrc: false,
      presets: [['@babel/preset-env']],
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
  ],
  output: [
    { file: 'dist/index.es.js', format: 'es', sourcemap: true },
    { file: 'dist/index.js', format: 'cjs', sourcemap: true },
  ],
}
export default config
