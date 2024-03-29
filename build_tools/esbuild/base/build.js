/*
 * @Date: 2022-04-19 13:36:26
 * @LastEditTime: 2022-04-19 13:37:27
 * @FilePath: \rewrite\build_tools\esbuild\base\build.js
 * @Description:
 */
const { build, buildSync, serve } = require('esbuild');

async function runBuild() {
  const result = await build({
    absWorkingDir: process.cwd(),
    entryPoints: ['./src/index.jsx'],
    // bundle: true,
    format: 'esm',
    // external: ["react", "react-dom"],
    logLevel: 'error',
    splitting: true,
    sourcemap: true,
    outdir: 'dist',
    ignoreAnnotations: true,
    metafile: true,
    minify: true,
  });
  console.log(result);
}

// function runBuild() {
//   const result = buildSync({
//     absWorkingDir: process.cwd(),
//     entryPoints: ["./src/index.jsx"],
//     // bundle: true,
//     format: "esm",
//     // external: ["react", "react-dom"],
//     logLevel: "error",
//     splitting: true,
//     sourcemap: true,
//     outdir: "dist",
//     ignoreAnnotations: true,
//     metafile: true,
//     minify: true,
//   });
//   console.log(result);
// }

// function runBuild() {
//   serve(
//     {
//       port: 8000,
//       // servedir: "./dist",
//     },
//     {
//       absWorkingDir: process.cwd(),
//       entryPoints: ['./src/index.jsx'],
//       bundle: true,
//       format: 'esm',
//       // external: ["react", "react-dom"],
//       logLevel: 'error',
//       splitting: true,
//       sourcemap: true,
//       // outdir: "dist",
//       ignoreAnnotations: true,
//       metafile: true,
//       // minify: false,
//     }
//   ).then(server => {
//     console.log('HTTP Server starts at port', server.port);
//   });
// }

runBuild();
