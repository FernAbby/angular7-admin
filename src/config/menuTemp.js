const menus = [
  {
    title: '网站概述',
    icon: 'home',
    path: '/homes'
  },
  {
    title: '保单中心',
    icon: 'schedule',
    children: [
      {
        title: '保单列表 ',
        path: '/policy/list',
        icon: 'file-text'
      }, {
        title: '续保列表 ',
        path: '/system/renewal',
        icon: 'bank',
      }, {
        title: '人保货运险',
        path: '/system/PICCFreightList',
        icon: 'file-text',
      }, {
        title: '太平洋保险',
        path: '/system/insuranceList',
        icon: 'file-text',
      }, {
        title: '满帮医保健康险',
        path: '/system/healthy',
        icon: 'file-text',
      }, {
        title: '华泰雇主责任险',
        path: '/system/htMaster',
        icon: 'file-text',
      }
    ]
  }, {
    title: '车险',
    icon: 'car',
    children: [
      {
        title: '车险管理',
        icon: 'file-text',
        path: '/system/autoinsuranceManage',
      }, {
        title: '车险订单',
        path: '/system/orderList',
        icon: 'file-text'
      }
    ],
  }, {
    title: '保费贷',
    icon: 'credit-card',
    children: [
      {
        title: '人保/车险保费贷',
        path: '/system/loanpayList',
        icon: 'file-text'
      }, {
        title: '众安保费贷',
        path: '/system/annual',
        icon: 'file-text'
      }
    ]
  }, {
    title: '保险索赔',
    icon: 'calculator',
    children: [
      {
        title: '案件中心',
        path: '/system/caseCentre',
        icon: 'file-text'
      },
      {
        title: '平安放空险案件管理',
        path: '/system/caseManage',
        icon: 'file-text'
      },
      {
        title: '平安放空险公共列表',
        path: '/system/publicList',
        icon: 'file-text'
      },
      {
        title: '平安放空险私人列表',
        path: '/system/privateList',
        icon: 'file-text'
      },
      {
        title: '平安放空险支付异常案件',
        path: '/system/abnormalPayment',
        icon: 'file-text'
      }, {
        title: '保险黑名单管理',
        path: '/system/blackList',
        icon: 'file-text'
      }, {
        title: '华泰放空险索赔',
        path: '/system/emptyannual',
        icon: 'file-text'
      }, {
        title: '高速扣费异常险索赔',
        path: '/system/etc',
        icon: 'file-text'
      }
    ]
  }, {
    title: '线下录单',
    icon: 'edit',
    path: '/system/enterForm',
  }, {
    title: '保险客户',
    icon: 'team',
    children: [
      {
        title: '客户管理',
        path: '/system/customerList',
        icon: 'file-text'
      }, {
        title: 'CRM管理',
        path: '/system/crmManage',
        icon: 'file-text'
      }, {
        title: '保费余额充值记录',
        path: '/system/orderManageList',
        icon: 'file-text'
      }, {
        title: '保费余额',
        path: '/system/InsuranceBalance',
        icon: 'file-text'
      }
    ]
  }, {
    title: '员工提成',
    icon: 'red-envelope',
    children: [
      {
        title: '不可绑货主 ',
        path: '/system/stabilityUser',
        icon: 'file-text'
      }, {
        title: '提成列表 ',
        path: '/system/commission',
        icon: 'file-text'
      }
    ]
  }, {
    title: '系统配置',
    icon: 'tool',
    path: '/system/setting',
    children: [
      {
        title: '投保攻略',
        path: '/system/strategy',
        icon: 'file-text'
      },
      {
        title: '车辆定位',
        path: '/system/carPosition',
        icon: 'car'
      }, {
        title: '连连商户号查询',
        path: '/system/LianLian',
        icon: 'file-search'
      }, {
        title: '声讯发券',
        path: '/system/voiceList',
        icon: 'file-text'
      }, {
        title: '发券详情',
        path: '/system/voucherList',
        icon: 'file-text'
      }, {
        title: '活动管理',
        path: '/system/activityList',
        icon: 'file-text'
      }, {
        title: '发送短信',
        path: '/system/sendSms',
        icon: 'phone'
      }
    ]
  }, {
    title: '退保中心',
    icon: 'idcard',
    path: '/system/retreatsInsurance',
  }, {
    title: '发票管理',
    icon: 'wallet',
    path: '/system/invoiceManage',
  },
  {
    title: '放空险定价配置',
    icon: 'wallet',
    path: '/system/emptyPrice',
  },
];
