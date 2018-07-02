<template>
  <ul class="progress-list">
    <li class="progress-item"
      :class="{'prev': current > index, 'current': current === index, 'next': current < index}"
      v-for="(item, index) in steps" :key="index">
      <div class="item-logo-wrap">
        <i class="item-logo" :class="{'is-finish': isFinish, 'not-finish' : !isFinish}"></i>
        <div class="line"></div>
      </div>
      <div class="item-content">
        <h4 class="item-title" v-if="item.title">{{item.title}}</h4>
        <p class="item-desc" v-if="item.desc">{{item.desc}}</p>
      </div>
      <span class="item-label" v-if="item.label">{{item.label}}</span>
    </li>
  </ul>
</template>

<script>
const COMPONENT_NAME = 'progress-line'

export default {
  name: COMPONENT_NAME,
  data() {
    return {}
  },
  props: {
    current: {
      type: Number,
      default: 0
    },
    steps: {
      type: Array,
      default() {
        return ['']
      }
    },
    isFinish: {
      type: Boolean,
      default: false
    }
  },
  computed: {},
  watch: {},
  methods: {},
  components: {},
  mounted() {}
}
</script>

<style lang="postcss" scoped>
@import '../../common/style/variable.css';
@import '../../common/style/animation.css';
@import '../../common/style/mixin.css';

.progress-list {
  .progress-item {
    @include flex(row, flex-start, flex-start);
    position: relative;
    width: 100%;
    height: 72px;
    &:nth-last-child(1) {
      .item-logo-wrap {
        .item-logo.is-finish {
          background: resolve('calfic-money.png');
          background-size: 100% 100%;
        }
      }
      .item-logo-wrap {
        .item-logo.not-finish {
          background: resolve('calfic-tick.png');
          background-size: 100% 100%;
        }
      }
      .line {
        display: none;
      }
    }
    &.prev {
      .item-logo-wrap {
        .line:after {
          height: 100%;
        }
        .item-logo {
          background: resolve('calfic-tick-red.png');
          background-size: 100% 100%;
        }
      }
      .item-content .item-title {
        color: #f95c06;
      }
    }
    &.current {
      .item-logo-wrap {
        .line:after {
          height: 50%;
        }
        .item-logo {
          background: resolve('calfic-tick-red.png');
          background-size: 100% 100%;
        }
        .item-content .item-title {
          color: #f95c06;
        }
      }
    }
    &.next {
      .item-logo-wrap {
        .item-logo {
          background: resolve('calfic-tick.png');
          background-size: 100% 100%;
        }
      }
      .item-content .item-title {
        color: #333333;
      }
    }
    .item-logo-wrap {
      @include flex(column, flex-start, center);
      position: relative;
      width: 46px;
      height: auto;
      padding-top: 4px;
      .item-logo {
        display: block;
        width: 18px;
        height: 18px;
      }
      .line {
        position: absolute;
        left: 50%;
        top: 22px;
        width: 1px;
        height: 54px;
        background: #cccccc;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 1px;
          height: 0;
          background: #f95c06;
        }
      }
    }
    .item-content {
      @include flex(column, flex-start, flex-start);
      .item-title {
        font-size: 16px;
        color: #f95c06;
      }
      .item-desc {
        font-size: 12px;
        color: #999999;
        line-height: 16px;
        margin-top: 4px;
      }
    }
    .item-label {
      position: absolute;
      top: 14px;
      right: 16px;
      font-size: 12px;
      color: #afafaf;
      text-align: right;
    }
  }
}
</style>
