import { defineConfig } from "vitepress";
import { globSync } from "glob";
import { sep } from "node:path";
const genNavAndSidebar = () => {
  const pages = globSync("./docs/pages/*/**.md");
  return pages.reduce(
    (navAndSidebar, path) => {
      const [_0, _1, text, link] = path.split(sep);
      let _link = link.replace(".md", "");
      if (_link.startsWith('lib.'))
          return navAndSidebar
      // nav 只要第一层
      navAndSidebar.nav[text] = navAndSidebar.nav[text]
        ? navAndSidebar.nav[text]
        : _link;
      // sidebar要所有层
      navAndSidebar.sidebar[text] = navAndSidebar.sidebar[text]
        ? [...navAndSidebar.sidebar[text], _link]
        : [_link];
      return navAndSidebar;
    },
    { nav: {}, sidebar: {} }
  );
};

const navAndSidebar = genNavAndSidebar();

const genLink = (text, name) => {
  return `/pages/${text}/${name}`;
};
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "文档标题",
  description: "这是文档的描述",
  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/webp', href: '/logo.svg' }],
  ],
  themeConfig: {
    logo: { src: "/logo.svg", width: 24, height: 24 },

    // https://vitepress.dev/reference/default-theme-config
    nav: Object.keys(navAndSidebar.nav)
      .reverse()
      .map((text) => {
        return {
          text,
          link: genLink(text, navAndSidebar.nav[text]),
        };
      }),

    search: {
      provider: "local",
    },

    sidebar: Object.keys(navAndSidebar.sidebar)
      .reverse()
      .map((text) => {
        return {
          text,
          collapsed: false,
          items: navAndSidebar.sidebar[text].map((name) => {
            return { text: name, link: genLink(text, name) };
          }),
        };
      }),

    socialLinks: [
      { icon: "github", link: "https://github.com/njzzzz/njzzzz-blog" },
    ],
  },
});
