module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  themeConfig: {
    // 仓库链接配置
    repo: "https://github.com/wangtunan/blog",
    repoLabel: "Github",
    // 开启文档编辑
    editLinks: true,
    editLinkText: "编辑此页",
    // 导航栏
    nav: [
      { text: "首页", link: "/" },
      { text: "HTML", link: "/html/" },
      { text: "CSS", link: "/CSS/" },
      { text: "JavaScript", link: "/JavaScript/" }
    ],
    // 侧边栏
    // sidebar: [
    //   {
    //     title: "前端三剑客",
    //     collapsable: false,
    //     children: ["/CSS/", "/HTML/", "/JavaScript/"]
    //   },
    //   {
    //     title: "Vue.js",
    //     collapsable: false,
    //     children: ["/Vue/", "/Vue/Vuex.md", "/Vue/Vue-Router.md"]
    //   }
    // ]
    // 自动生成侧边栏
    sidebar: "auto",
    // 1.接受字符串，它设置了最后更新时间的label，例如：最后更新时间：2019年5月3日 21:51:53
    lastUpdated: "最后更新时间"
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "docs"
      }
    }
  }
};
