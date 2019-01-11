const menus = [
  {
    title: '网站概述',
    icon: 'home',
    path: '/homes'
  }, {
    title: '基础教程',
    icon: 'hourglass',
    path: '/start'
  }, {
    title: '示例中心',
    icon: 'appstore',
    children: [{
      title: '表格',
      path: '/policy/list',
      icon: 'schedule'
    }]
  },
];

export default menus;
