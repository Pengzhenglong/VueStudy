<template>
  <div>
    <img
      class="headerimg"
      src="https://browser9.qhimg.com/bdm/1000_618_80/t01028e5f2ec69e423d.jpg"
      alt=""
    />
    <ul>
      <li
        class="mineitem"
        v-for="item in minearry"
        :key="item.label"
        @click="itemclick(item)"
      >
        <span class="minetitle">{{ item.label }}</span>
        <i class="cubeic-arrow"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minearry: [
        { label: '商品收藏' },
        { label: '我的足迹' },
        { label: '店铺收藏' },
        { label: '我的订单' },
        { label: '退出', type: 'exit' },
      ]
    }
  },
  methods: {
    itemclick(item) {
      if (item.type == 'exit') {
        this.$store.commit('settoken', '')
        localStorage.removeItem('token')
        this.$router.push({ path: '/login' })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.mineitem {
  text-align: left;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
  padding-left: 5%;
  border-bottom: 1px solid #eee;

  .minetitle {
    display: inline-block;
    width: 90%;
  }
}

.headerimg {
  width: 100%;
  height: 150px;
}
</style>