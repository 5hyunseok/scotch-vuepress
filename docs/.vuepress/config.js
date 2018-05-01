module.exports = {
    title: 'Vue.js Todo 만들기',
    description: "vuejs 교육용 자료 for Yonsei DBLab",
    themeConfig:{
        nav: [
            { text: 'Todo 만들기', link: '/todo/' },
            { text: '추가자료', link: '/material/' },
        ],
        sidebar: [
            {
              title: 'Todo',
              collapsable: false,
              children: [
                '/todo/todo-app'
              ]
            },
            {
              title: '추가자료',
              collapsable: true,
              children: [
                  '/guide/guide',
                  '/guide/api'
              ]
            }
          ]
    }
}
