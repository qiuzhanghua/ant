import {defineConfig} from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    "react-dom": ["react-dom"],
                    "antd": ["antd"],
                    // "antd-pro": ["@ant-design/pro-components"],
                }
            }
        }
    },
    plugins: [react()],
})
