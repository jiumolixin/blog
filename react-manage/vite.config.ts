import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";
const path = require('path')
import { viteMockServe } from 'vite-plugin-mock'
import { UserConfigExport, ConfigEnv } from 'vite'
// https://vitejs.dev/config/
export default({ command }: ConfigEnv): UserConfigExport=>({
  plugins: [
    react(),
    viteMockServe({
      mockPath: "mock",
      localEnabled: command === "serve",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server:{
    port:7070
  }
});
