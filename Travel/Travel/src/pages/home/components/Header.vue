<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right ">{{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>
<!--scoped表示只对当前样式有作用-->
<!--rem是相对于html-->
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display: flex
    line-height: $headerHeight
    /*background: #00bcd4*/
    background: $bgColor
    color : #fff
  .header-left
    width: .64rem
    float: left
    .back-icon
      text-align:center
      font-size: .4rem
  .header-right
    min-width : 1.04rem
    padding 0 .1rem
    float: right
    text-align : center
    color: white
    .arrow-icon
      margin-left: -.04rem
      font-size: .24rem

  .header-input
    flex: 1
    height: .64rem
    margin-top: .12rem
    margin-left: .2rem
    background: #fff
    border-radius: .1rem
    color: #ccc
    line-height: .64rem
    padding-left: .2rem

</style>
