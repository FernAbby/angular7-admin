# 基于 Angular CLI 新建项目

## 安装脚手架工具

使用官方的 @angular/cli 工具链辅助进行开发，可以满足项目构建、调试、代理、打包部署等一系列工程化需求。

`
$ npm install -g @angular/cli
$ ng --version
`

工具对应的angular版本: 

1.x.x --> angular5 

6.x.x --> angular6 

7.x.x --> angular7

## 使用 Angular CLI

- 新建项目 

` $ npm new myProject `

- 启动本地服务

` $ ng serve --port 3008 --open`

## 文件结构

Angular-CLI生成文件结构大致如下：

<span class="img-wrap">![angular-cli生成文件顶层目录](/assets/images/angular-cli生成文件顶层目录.png)</span>
<span class="img-wrap">![src目录结构](/assets/images/src目录结构.png)</span>
<span class="img-wrap">![APP目录结构](/assets/images/APP目录结构.png)</span>

## 创建页面

生成指定文件夹下组件,否则默认生成在app文件下
`
$ cd src/app/pages
$ ng generate component home
$ ng g c home // or
`
执行上述操作，生成四个文件：
- home.component.html —— 模版文件
- home.component.scss —— 样式文件
- home.component.spec.ts —— 单元测试文件
- home.component.ts —— 组件JS文件

# Angular创建组件

## 创建组件

`
$ cd src/app/components
$ ng generate component alert  // --inline-template --inline-style 
$ ng g c alert -it -is // or # 表示新建组件，该组件使用内联模板和内联样式
`

执行上述操作，生成组件：
- alert.component.spec.ts - 用于单元测试
- alert.component.ts - 新建的组件

Angular CLI 会自动帮我们更新 app.module.ts 文件，把新建的组件添加到 NgModule 的 declarations 数组中。









