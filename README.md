### kn-cnpm

[cnpm](http://cnpm-registry.cardniu.work) 私有库代码

#### 文件夹说明
```
    - @cardniu 所有模块都放置@cardniu作用域下
```

#### 项目约定

- 1、每个package以小写英文单词+中划线组成，不能用驼峰模式
- 2、项目已经整合eslint, 写代码时候需要开启，可以在外层目录执行 npm run lint
- 3、每新加一个package需要添加单元测试，请参考demo
- 4、每个package目录规定如下：

```
    - package-name
        - test #测试文件目录 【必须】
        - dist #输出的打包文件目录【可选】
        - src  #源代码目录【可选】
        - index.js #入口文件 
        - package.json 【必须】
        - readMe.md 【必须】
```

- 5、提交代码前需要在项目第一层执行：npm run lint


