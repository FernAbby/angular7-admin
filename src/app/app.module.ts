import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

// antd支持
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

// 根目录
import { AppComponent } from './app.component';

// 页面
import { HomesComponent } from './pages/homes/homes.component';
import { StartComponent } from './pages/start/start.component';
import { DemoComponent } from './pages/demo/demo.component';
import { TableComponent } from './pages/demo/table/index.component';
import { TableSimpleComponent } from './pages/demo/table/table-simple/table-simple.component';
import { TableEditableComponent } from './pages/demo/table/table-editable/table-editable.component';

// 组件
import { AlertComponent } from './components/alert/alert.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    StartComponent,
    DemoComponent,
    AlertComponent,
    TableComponent,
    TableSimpleComponent,
    TableEditableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    MarkdownModule.forRoot({
      loader: HttpClientModule, // optional, only if you use [src] attribute
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
