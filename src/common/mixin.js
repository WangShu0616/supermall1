import { debounce } from './utils'
export const ItemListenerMixin = {
  data() {
    return {
      ItemImgLoad: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    this.ItemImgLoad = () => {
      refresh();
    };
    this.$bus.$on("ItemImgLoad", this.ItemImgLoad);
    console.log('我是混入内容')
  }
}