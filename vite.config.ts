import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { readdirSync, statSync } from 'fs';
import path from 'path';

export function getDirectories(path: string) {
  return readdirSync(path).filter(function (file) {
    return statSync(path+'/'+file).isDirectory();
  });
}

const srcDirs = getDirectories(path.resolve(__dirname, 'src'));

// https://vitejs.dev/config/
export default defineConfig({
  base: '/static/',
  plugins: [svelte()],
  resolve: {
    alias: srcDirs.reduce((aliases, dir) => {
      aliases[dir] = path.resolve(__dirname, 'src', dir);
      return aliases;
    }, {}),
  },
});
