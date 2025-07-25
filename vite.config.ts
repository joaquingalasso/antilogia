import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Reemplaza '<NOMBRE_DE_TU_REPOSITORIO>' con el nombre de tu repositorio en GitHub.
  // Por ejemplo, si tu repositorio es 'https://github.com/tu-usuario/mi-blog',
  // la base debería ser '/mi-blog/'.
  base: '/<NOMBRE_DE_TU_REPOSITORIO>/',
})
