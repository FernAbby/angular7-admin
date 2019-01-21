import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引入组件
import { HomesComponent } from './pages/homes/homes.component';
import { StartComponent } from './pages/start/start.component';
import { TableComponent } from './pages/demo/table/index.component';
import { DemoComponent } from './pages/demo/demo.component';
import { TableSimpleComponent } from './pages/demo/table/table-simple/table-simple.component';
import { TableEditableComponent } from './pages/demo/table/table-editable/table-editable.component';

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
  path: 'demo',
  component: DemoComponent,
  children: [
    {
      path: 'table',
      component: TableComponent,
      data: {
        breadcrumb: '表格'
      },
      children: [{
        path: 'simple',
        component: TableSimpleComponent,
        data: {
          breadcrumb: '简单表格'
        },
      }, {
        path: 'editable',
        component: TableEditableComponent,
        data: {
          breadcrumb: '可编辑表格'
        },
      }]
    },
  ]
}, {
    path: '**',// 匹配不到路由时加载
    redirectTo: 'homes'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
