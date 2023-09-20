//import topLevelAwait from "vite-plugin-top-level-await";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    target:['chrome90', 'edge90', 'firefox90', 'safari15']
  }
})
