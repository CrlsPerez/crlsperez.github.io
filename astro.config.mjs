import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://crlsperez.github.io',
  // Si el repo no es <usuario>.github.io sino otro nombre, descomenta:
  // base: '/nombre-del-repo',
  output: 'static',
});
