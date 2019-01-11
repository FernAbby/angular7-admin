import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引入组件
import { HomesComponent } from './pages/homes/homes.component';
import { StartComponent } from './pages/start/start.component';
import { PolicyComponent } from './pages/policy/policy.component';

const routes: Routes = [{
  path: '',
  component: HomesComponent,
  data: {
    breadcrumb: '网站概述'
  }
},{
  path: 'homes',
  component: HomesComponent,
  data: {
    breadcrumb: '网站概述'
  }
}, {
  path: 'start',
  component: StartComponent,
  data: {
    breadcrumb: '基础教程'
  }
}, {
  path: 'policy',
  component: PolicyComponent,
  children: [ // 配置子路由
    {
      path: 'list',
      component: PolicyComponent,
      data: {
        breadcrumb: '示例中心'
      },
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
