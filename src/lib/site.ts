export const site = {
  name: "TARUKOTO",
  defaultTitle: "TARUKOTO Sample",
  description: "Design studio portfolio sample site",
  brand: "TARUKOTO / SAMPLE",
  footerText: "Astro minimal sample for TARUKOTO study.",
  locale: "ja-JP",
};

export const pages = {
  home: {
    href: "/",
    navLabel: "Top",
    title: "Top",
    description: "Astro minimal sample top page",
    kicker: "Minimal Astro Sample",
  },
  about: {
    href: "/about",
    navLabel: "About",
    title: "About",
    description: "About page sample",
    kicker: "About",
  },
  news: {
    href: "/news",
    navLabel: "News",
    title: "News",
    description: "News list sample",
    kicker: "News",
    heading: "お知らせ",
    listTitle: "News List",
    listNote: "src/content/news にファイル追加",
  },
  works: {
    href: "/works",
    navLabel: "Works",
    title: "Works",
    description: "Works list sample",
    kicker: "Works",
    heading: "制作実績",
    listTitle: "Works List",
    listNote: "一覧ページもテンプレート化可能",
  },
};

export const navItems = [
  { href: pages.home.href, label: pages.home.navLabel },
  { href: pages.about.href, label: pages.about.navLabel },
  { href: pages.news.href, label: pages.news.navLabel },
  { href: pages.works.href, label: pages.works.navLabel },
];

export function createPageTitle(pageTitle?: string) {
  return pageTitle ? `${site.defaultTitle} | ${pageTitle}` : site.defaultTitle;
}
