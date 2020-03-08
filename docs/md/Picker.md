### Picker

---

> 选择器

注：由于 `picker` 组件依赖于`better-scroll`插件，该插件会在首次引入时初始化，如果后期屏幕大小变化会导致 `picker` 组件滚动异常,如果通过浏览器打开模拟器查看`picker`组件，需刷新后恢复

##### 例子

示例体验：http://123.206.17.49/docs/example//#/

![二维码](https://raw.githubusercontent.com/wendaosanshou/calf-ui/master/docs/assets/example-qrcode.png)

##### 使用

###### 1.单列与多列

```html
<template>
 <div class="page-picker">
   <calf-button @click="handlePicker1">单列</calf-button>
  <calf-button @click="handlePicker2">多列</calf-button>
 </div>
</template>
```

```javascript
export default {
  methods: {
    initPicker() {
      this.picker1 = this.$createPicker({
        title: '单列内容',
        data: [111, 222, 3333],
        onSelect: this.selectHandle,
        onChange: this.onChange
      })
      this.picker2 = this.$createPicker({
        title: '多列内容',
        data: [[111, 222, 333], ['a', 'b', 'c'], ['省道', '国道', '高速']],
        onSelect: this.selectHandle
      })
    },
    handlePicker1() {
      this.picker1.show()
    },
    handlePicker2() {
      this.picker2.show()
    },
    onChange(current, index) {
      console.log(current, index)
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      console.log(selectedVal, selectedIndex, selectedText)
    }
  },
  mounted() {
    this.initPicker()
  }
}
```

#### API

| 参数          |                          说明                          |   类型 |                         示例 | 默认值 |
| ------------- | :----------------------------------------------------: | -----: | ---------------------------: | -----: |
| title         |                          标题                          | String |                              |     '' |
| data          |    传入 picker 数据，数组的长度决定了 picker 的列数    |  Array |                              |     [] |
| selectedIndex | 被选中的索引值，拉起 picker 后显示这个索引值对应的内容 |  Array |                          [1] |     [] |
| subtitle      |                         副标题                         | String |                           '' |     '' |
| cancelTxt     |                      取消按钮文案                      | String |                              | '取消' |
| confirmTxt    |                      确定按钮文案                      | String |                              | '确定' |
| swipeTime     |  快速滑动 picker 滚轮时，惯性滚动动画的时长，单位：ms  | Number |                              |   2500 |
| alias         |               配置 value 和 text 的别名                | Object | { value: 'id', text: 'name'} |     {} |

> data 的子配置项

| 参数  |                说明                 |                  类型 | 示例 | 默认值 |
| ----- | :---------------------------------: | --------------------: | ---: | -----: |
| text  |       picker 每一列展示的文案       |         String/Number |      |        |
| value | picker 每一列展示的每项文案对应的值 | String/Number/Boolean |      |        |

#### EVENTS

> 使用`api`调用需要加前缀`on`，比如`onSelect`，`onChange`

| 参数   |          说明          |                                        参数 1 |                                            参数 2 |                                           参数 3 |
| ------ | :--------------------: | --------------------------------------------: | ------------------------------------------------: | -----------------------------------------------: |
| select | 点击确认按钮触发此事件 | selectedVal: 当前选中项每一列的值，Array 类型 | selectedIndex: 当前选中项每一列的索引，Array 类型 | selectedText: 当前选中项每一列的文案，Array 类型 |
| change |  滚轴滚动后触发此事件  |            index: 当前滚动列次序，Number 类型 |    selectedIndex: 当前列选中项的索引，Number 类型 |                                                  |
| cancel | 点击取消按钮触发此事件 |                                             - |                                                 - |                                                - |

#### Methods

| 参数    |        说明        |                                  参数 1 |                            参数 2 |
| ------- | :----------------: | --------------------------------------: | --------------------------------: |
| setData | 设置 picker 可选项 | picker 每列可选项的文案和值，Array 类型 | picker 每列选中的索引，Array 类型 |
| show    |        显示        |                                       - |                                 - |
| hide    |        隐藏        |                                       - |                                 - |

###### 2. 级联

> 在基本的 picker 基础上，data 数据有级联关系

```html
<template>
  <calf-button @click="handlePicker3">级联</calf-button>
</template>
```

```js
const cascadeData = [
  {
    value: 'Fruit',
    text: 'Fruit',
    children: [
      {
        value: 'Apple',
        text: 'Apple',
        children: [{ value: 1, text: 'One' }, { value: 2, text: 'Two' }]
      },
      {
        value: 'Orange',
        text: 'Orange',
        children: [{ value: 3, text: 'Three' }, { value: 4, text: 'Four' }]
      }
    ]
  },
  {
    value: 'Drink',
    text: 'Drink',
    children: [
      {
        value: 'Coffee',
        text: 'Coffee',
        children: [{ value: 1, text: 'One' }, { value: 2, text: 'Two' }]
      },
      {
        value: 'Tea',
        text: 'Tea',
        children: [{ value: 1, text: 'One' }, { value: 3, text: 'Three' }]
      }
    ]
  }
]
export default {
  methods: {
    initPicker() {
      this.picker3 = this.$createCascadePicker({
        title: '级联内容',
        data: cascadeData,
        selectedIndex: [0, 1, 0],
        onSelect: this.selectHandle
      })
    },
    handlePicker3() {
      this.picker3.show()
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      console.log(selectedVal, selectedIndex, selectedText)
    }
  },
  mounted() {
    this.initPicker()
  }
}
```

###### 3. 日期选择器

> 在级联选择器基础上，处理日期关系

```html
<template>
  <calf-button @click="handlePicker4">日期</calf-button>
</template>
```

```js
export default {
  methods: {
    initPicker() {
      this.picker4 = this.$createDatePicker({
        title: '日期',
        min: new Date(2008, 7, 8),
        max: new Date(2020, 9, 20),
        value: new Date(),
        format: {
          year: 'YYYY年',
          month: 'MM月',
          date: '第 D 日'
        },
        onSelect: this.selectDateHandle
      })
    },
    handlePicker4() {
      this.picker4.show()
    },
    selectDateHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        content: `Selected Item: <br/>  value: ${selectedVal} <br/>  index: ${selectedIndex.join(
          ', '
        )} <br/>  text: ${selectedText.join(' ')}`
      }).show()
    }
  },
  mounted() {
    this.initPicker()
  }
}
```

> 下面是日期选择器特殊 api,其他请参考 picker

#### API

| 参数        |            说明            |       类型 |                                                                                  示例 |                                                                   默认值 |
| ----------- | :------------------------: | ---------: | ------------------------------------------------------------------------------------: | -----------------------------------------------------------------------: |
| min         |       可选日期最小值       | Date/Array |                                                                                     - |                                                     new Date(2010, 1, 1) |
| max         |       可选日期最大值       | Date/Array |                                                                                     - |                                                   new Date(2020, 12, 31) |
| value       |           默认值           | Date/Array |                                                                                     - |                                                               new Date() |
| format      | 每项时间对应展示的文案格式 |     Object | {year: 'YYYY 年',month: 'MM 月',date: '第 D 日',hour: 'hh',minute: 'mm',second: 'ss'} | {year: 'YYYY',month: 'M',date: 'D',hour: 'hh',minute: 'mm',second: 'ss'} |
| startColumn |       日期选择开始列       |     String |                                        'year'/'month'/'date'/'hour'/'minute'/'second' |                                                                   'year' |
| columnCount |         可选择列数         |     Number |                                                                                     - |                                                                        3 |

#### EVENTS

> select 事件回调参数有所不同

| 参数   |          说明          |                             参数 1 |                                            参数 2 |                                           参数 3 |
| ------ | :--------------------: | ---------------------------------: | ------------------------------------------------: | -----------------------------------------------: |
| select | 点击确认按钮触发此事件 | selectedVal: 选择的时间，Date 类型 | selectedIndex: 当前选中项每一列的索引，Array 类型 | selectedText: 当前选中项每一列的文案，Array 类型 |

###### 4. 地址选择器

> 使用请参考级联选择器

###### 5. 较少选项

> 该选择器不同于上述 picker，api，event,method 有所不同

```html
<template>
  <calf-button @click="handlePicker6">较少选项</calf-button>
</template>
```

```js
const data4 = [
  {
    text: '顺丰',
    value: '顺丰'
  },
  {
    text: '中通',
    value: '中通'
  },
  {
    text: '圆通',
    value: '圆通'
  }
]
export default {
  methods: {
    initPicker() {
      this.picker6 = this.$createListPicker({
        data: data4,
        selectedIndex: 1,
        onSelect: this.seletListHandle
      })
    },
    handlePicker6() {
      this.picker6.show()
    },
    seletListHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        content: `Selected Item: <br/>
        value: ${selectedVal} <br/>
        index: ${selectedIndex} <br/>
        text: ${selectedText}`
      }).show()
    }
  },
  mounted() {
    this.initPicker()
  }
}
```

#### API

| 参数          |                          说明                          |   类型 | 示例 | 默认值 |
| ------------- | :----------------------------------------------------: | -----: | ---: | -----: |
| data          |                    传入 picker 数据                    |  Array |      |     [] |
| selectedIndex | 被选中的索引值，拉起 picker 后显示这个索引值对应的内容 | Number |    1 |     -1 |

> data 的子配置项

| 参数  |                说明                 |                  类型 | 示例 | 默认值 |
| ----- | :---------------------------------: | --------------------: | ---: | -----: |
| text  |       picker 每一列展示的文案       |         String/Number |      |        |
| value | picker 每一列展示的每项文案对应的值 | String/Number/Boolean |      |        |

#### EVENTS

> 使用`api`调用需要加前缀`on`，比如`onSelect`，`onCancel`

| 参数   |          说明          |                      参数 1 |                          参数 2 |                         参数 3 |
| ------ | :--------------------: | --------------------------: | ------------------------------: | -----------------------------: |
| select |     选中某项时触发     | selectedVal: 当前选中项的值 | selectedIndex: 当前选中项的索引 | selectedText: 当前选中项的文案 |
| cancel | 点击取消按钮触发此事件 |                           - |                               - |                              - |

#### Methods

| 参数 | 说明 | 参数 1 | 参数 2 |
| ---- | :--: | -----: | -----: |
| show | 显示 |      - |      - |
| hide | 隐藏 |      - |      - |
