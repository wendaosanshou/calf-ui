<template>
  <div class="calf">
    <header class="calf-header">
      <h1>claf-ui</h1>
    </header>
    <section class="calf-content">
      <ul class="calf-list">
        <li class="calf-item" v-for="(item, index) in routes" :key="index" @click="handleRoute(item)">
          {{item.name}}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [{ name: 'Button', path: '/button' }]
    }
  },
  methods: {
    handleRoute(item) {
      this.$router.push(item.path)
    }
  }
}
</script>

<style lang="postcss">
.calf-header {
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #edf0f4;
  box-shadow: 0 2px 1px #e9eaea;
  backface-visibility: hidden;
  h1 {
    font-size: 18px;
    font-weight: 500;
  }
}

.calf-content {
  width: 100%;
  height: auto;
  .calf-list {
    width: 100%;
    height: auto;
    .calf-item {
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding-left: 16px;
      color: #333333;
      border-bottom: 1px solid #cccccc;
    }
  }
}
</style>
