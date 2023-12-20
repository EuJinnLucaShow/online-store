import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    middleware: [
      (req, res, next) => {
        // Redirect all routes to '/'
        if (req.url !== '/') {
          res.writeHead(301, { Location: '/' })
          res.end()
        } else {
          next()
        }
      }
    ]
  }
})

