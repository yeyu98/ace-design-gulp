# ace-design-gulp
以gulp作为编译工具构建组件库

<h3>组件库搭建</h3>


- 组件库技术选型？
    - React、Typescript、Gulp、Less；
- 如何调试组件库？
    - 创建play目录之后使用pnpm workspace添加组件库；
- 如何构建组件库？
    - 需要编译哪些东西？
        - TS、TSX语法（先用tsc编译再使用babel编译成js）、
        - Less（使用gulp-less编译成css）；
    - 编译后的产物都有哪些？
        - lib目录 用于兼容cjs方式引入组件库；
        - es目录 用于兼容esm方式引入组件库；
        - dist目录 用于兼容umd方式引入组件库（cjs和cdn），运用webpack编译；
    - 用什么编译呢？vite还是gulp？
        - 这里优先尝试使用gulp，可定制化程度高；
- 如何发布组件库？
- 如何测试组件库？