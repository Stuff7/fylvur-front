import sveltePreprocess from 'svelte-preprocess';
import path from 'path';
import { readdirSync, statSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getDirectories(path) {
  return readdirSync(path).filter(function (file) {
    return statSync(path+'/'+file).isDirectory();
  });
}

const srcDirs = getDirectories(path.resolve(__dirname, 'src'));

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
  envPrefix: 'FYLVUR_',
  resolve: {
    alias: srcDirs.reduce((aliases, dir) => {
      aliases[dir] = path.resolve(__dirname, 'src', dir);
      return aliases;
    }, {}),
  },
};
