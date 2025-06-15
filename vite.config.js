import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: '/Weather-Dashboard/',
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/img",
          dest: "src/",
        },
      ],
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
