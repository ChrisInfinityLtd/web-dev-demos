import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Web Dev Demos",
    description: "Demos and Docs",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            // { text: "Examples", link: "/markdown-examples" },
        ],

        sidebar: [
            {
                text: "入门指南",
                items: [
                    { text: "HTML", link: "/html" },
                    { text: "CSS", link: "/css" },
                    { text: "JavaScript", link: "/js" },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/ChrisInfinityLtd/web-dev-demos" },
        ],
    },
});
