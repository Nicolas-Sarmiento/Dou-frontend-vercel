import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  base: '/', // Ajusta esto según la URL de tu app en Vercel
})
