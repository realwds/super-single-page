module.exports = {
  title: 'super single page',
  description: '静态html单页面，极简，极炫 ~',
  themeConfig: {
  	// logo: '/hero.png',
    nav: [
      { text: 'guide', link: '/guide/' },
      { text: 'disnot', link: 'https://disnot.com/' },
      {
        text: 'other',
        items: [
          { text: 'github', link: 'https://github.com/realwds/' },
          { text: 'gitee', link: 'https://gitee.com/wrongcode/' }
        ]
      }
    ],
    sidebar: [
      {
        title: 'STEP1',
        collapsable: false,
        children: [
          { title: 'bar', path: '/bar/' },
          { title: 'bar-three', path: '/bar/three' },
          { title: 'bar-four', path: '/bar/four' }
        ]
      },
      {
        title: 'STEP2',
        collapsable: false,
        children: [
          { title: 'foo', path: '/foo/' },
          { title: 'foo-one', path: '/foo/one' },
          { title: 'foo-two', path: '/foo/two' }
        ]
      },
      {
        title: 'STEP3',
        collapsable: false,
        children: [
          { title: 'about', path: '/about' },
          { title: 'contact', path: '/contact' }
        ]
      }
    ],
    lastUpdated: 'Last Updated', // string | boolean
	// 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: false,
    //启用页面滚动效果。
    smoothScroll: true,
    base: '/super-single-page/'
  }
}