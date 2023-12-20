import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  routes: [{ "src": "/[^.]+", "dest": "/", "status": 200 }] 
})
