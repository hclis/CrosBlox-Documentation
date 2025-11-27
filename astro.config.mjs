// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
const REPO_NAME = 'CrosBlox-Documentation';

// https://astro.build/config
export default defineConfig({
base: `/${REPO_NAME}/`,
    integrations: [
        starlight({
            title: 'CrosBlox Docs',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/hclis/' }],
            
            // FIX: Using the correct 'customCss' array to inject styles
            customCss: [
                // Link the file where we define the custom colors
                './src/styles/starlight-custom.css', 
            ],
            
            // INVALID CONFIG REMOVED: The 'palette' block caused the error
            
            sidebar: [
                // Updated Introduction section (Guides has been removed)
                {
                    label: 'Introduction',
                    // NOTE: If your folder is named 'introductions' (plural), this 
                    // should be updated to autogenerate: { directory: 'introductions' },
                    autogenerate: { directory: 'introduction' },
                },
                {
                    label: 'Prerequisites',
                    autogenerate: { directory: 'pre' },
                },
            ],
        }),
    ],
});
