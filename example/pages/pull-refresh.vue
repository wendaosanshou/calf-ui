<template>
 <div class="page-pull-refresh">
   <h1 class="title">title</h1>
   <div class="content">
      <calf-pull-refresh
      :top-load-method="refresh"
      @top-state-change="stateChange">
        <ul class="list">
          <li class="item" v-for="(item, index) in 5" :key="index">{{item}}</li>
        </ul>
      </calf-pull-refresh>
   </div>
 </div>
</template>

<script>
export default {
  name: 'page-pull-refresh',
  data() {
    return {
      iconLink: ''
    }
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    refresh(loaded) {
      setTimeout(() => {
        loaded('done')
      }, 1000)
    },
    stateChange(state) {
      if (state === 'pull' || state === 'trigger') {
        this.iconLink = '#icon-arrow-bottom'
      } else if (state === 'loading') {
        this.iconLink = '#icon-loading'
      } else if (state === 'loaded-done') {
        this.iconLink = '#icon-finish'
      }
    }
  },
  components: {},
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.page-pull-refresh {
  .title {
    position: relative;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #f6f6f6;
    z-index: 999;
  }
  .content {
    position: relative;
    z-index: 1;
    .list {
      .item {
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding-left: 16px;
        &:nth-child(2n + 1) {
          background: #f6f6f6;
        }
      }
    }
  }
}
</style>
