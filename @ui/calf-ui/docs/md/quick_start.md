#### npm 安装

> 使用 npm 快速安装依赖包

```shell
npm install calf-ui  --save
```

calf-ui 搭配 webpack 3+ 支持后编译和普通编译 2 种构建方式（默认使用后编译），使用前都需要修改应用的依赖和配置。

#### CDN 引入

```html
<script src="https://xxx.com/xxx.js"></script>
<link rel="stylesheet" href="https://xxx.com/xxx.min.css">
```

### 使用

**全部引入**
一般在入口文件中：

```javascript
import Vue from 'vue'
import 'calf-ui/lib/calf.min.css'
import Calf from 'calf-ui'
Vue.use(Calf)
```

**按需引入**

```javascript
import { Button } from 'calf-ui'
```
