<template>
 <div class="page-picker">
   <calf-button
    @click="handlePicker1">单列</calf-button>
  <calf-button
    @click="handlePicker2">多列</calf-button>
  <calf-button
    @click="handlePicker3">级联</calf-button>
  <calf-button
    @click="handlePicker4">日期</calf-button>
  <calf-button
    @click="handlePicker5">城市</calf-button>
  <calf-button
    @click="handlePicker6">较少选项</calf-button>
  <calf-button
    @click="pickerVisible = true">测试</calf-button>
  <calf-picker :data="[data1]" v-model="pickerVisible"/>
 </div>
</template>

<script>
import { cascadeData } from '../data/cascade.js'
import { provinceList, cityList, areaList } from '../data/area'
import { data1, data2, data3, data4 } from '../data/picker'

const asyncProvinceList = provinceList.slice()
const asyncCityList = JSON.parse(JSON.stringify(cityList))
const asyncAreaList = JSON.parse(JSON.stringify(areaList))

const addressData = provinceList
addressData.forEach(province => {
  province.children = cityList[province.value]
  province.children.forEach(city => {
    city.children = areaList[city.value]
  })
})

const asyncData = asyncProvinceList
const asyncSelectedIndex = [0, 0, 0]
asyncData[0].children = asyncCityList[asyncData[0].value]
asyncData[0].children[0].children =
  asyncAreaList[asyncData[0].children[0].value]

export default {
  name: 'page-picker',
  data() {
    return {
      selectListIndex: 1,
      pickerVisible: false,
      data1: data1
    }
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    initPicker() {
      this.picker1 = this.$createPicker({
        title: '单列内容',
        data: [data1],
        onSelect: this.selectHandle,
        onChange: this.onChange
      })
      this.picker2 = this.$createPicker({
        title: '多列内容',
        data: [data1, data2, data3],
        onSelect: this.selectHandle
      })
      this.picker3 = this.$createCascadePicker({
        title: '级联内容',
        data: cascadeData,
        onSelect: this.asyncChangeHandle
      })
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
      this.picker5 = this.$createCascadePicker({
        title: 'Async Load Data',
        data: asyncData,
        selectedIndex: asyncSelectedIndex.slice(),
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
      this.picker6 = this.$createListPicker({
        data: data4,
        selectedIndex: this.selectListIndex,
        onSelect: this.seletListHandle
      })
    },
    handlePicker1() {
      this.picker1.show()
    },
    handlePicker2() {
      this.picker2.show()
    },
    handlePicker3() {
      this.picker3.show()
    },
    handlePicker4() {
      this.picker4.show()
    },
    handlePicker5() {
      this.picker5.show()
    },
    handlePicker6() {
      this.picker6.show()
    },
    selectListCancel() {
      this.$createDialog({
        content: `picker cancel`
      }).show()
    },
    asyncChangeHandle(i, newIndex) {
      if (newIndex !== asyncSelectedIndex[i]) {
        asyncSelectedIndex[i] = newIndex
        // If the first two column is changed, request the data for rest columns.
        if (i < 2) {
          // Mock async load.
          setTimeout(() => {
            if (i === 0) {
              const current = asyncData[newIndex]
              current.children =
                current.children || asyncCityList[current.value]
              current.children[0].children =
                current.children[0].children ||
                asyncAreaList[current.children[0].value]
              asyncSelectedIndex[1] = 0
              asyncSelectedIndex[2] = 0
            }

            if (i === 1) {
              const current =
                asyncData[asyncSelectedIndex[0]].children[newIndex]
              current.children =
                current.children || asyncAreaList[current.value]
              asyncSelectedIndex[2] = 0
            }
            this.asyncPicker.setData(asyncData, asyncSelectedIndex)
          }, 500)
        }
      }
    },
    onChange(current, index) {
      console.log(current, index, data1[index])
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        content: `Selected Item: <br/>  value: ${selectedVal.join(
          ', '
        )} <br/>  index: ${selectedIndex.join(
          ', '
        )} <br/>  text: ${selectedText.join(' ')}`
      }).show()
    },
    seletListHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        content: `Selected Item: <br/>
        value: ${selectedVal} <br/>
        index: ${selectedIndex} <br/>
        text: ${selectedText}`
      }).show()
    },
    selectDateHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        content: `Selected Item: <br/>  value: ${selectedVal} <br/>  index: ${selectedIndex.join(
          ', '
        )} <br/>  text: ${selectedText.join(' ')}`
      }).show()
    },
    cancelHandle() {}
  },
  components: {},
  mounted() {
    this.initPicker()
  }
}
</script>

<style lang="postcss" scoped>
.page-picker {
  padding: 20px;
  .calf-button {
    margin: 10px 0;
  }
}
</style>
