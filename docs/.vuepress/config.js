module.exports = {
  title: "Knowledge about Computer",
  description: "As a IT developer, you must know this!",
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/zh/": {
      lang: "zh-CN", // this will be set as the lang attribute on <html>
      title: "计算机知识",
      description: "作为一个 IT 从业者, 不了解一下吗?"
    },
    "/": {
      lang: "en-US",
      title: "Knowledge of Computer",
      description: "Knowledge is power, you need this!"
    }
  },
  themeConfig: {
    locales: {
      "/": {
        // text for the language dropdown
        selectText: "Languages",
        // label for this locale in the language dropdown
        label: "English",
        // text for the edit-on-github link
        editLinkText: "Edit this page on GitHub",
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [{ text: "guide", link: "/guide/" }],
        sidebar: {
          "/": [
            /* ... */
          ],
          "/guide/": [
            /* ... */
          ]
        }
      },
      "/zh/": {
        selectText: "选择语言",
        label: "简体中文",
        editLinkText: "在 GitHub 上编辑此页",
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: [{ text: "指南", link: "/zh/guide/" }],
        algolia: {},
        sidebar: {
          "/zh/": [
            /* ... */
          ],
          "/zh/guide/": [
            /* ... */
          ]
        }
      }
    }
  }
};
