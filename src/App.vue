<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    mpType: 'app',
    onLaunch() {
        console.log('App Launch')
    },
    onShow() {
        console.log('App Show')
    },
    onHide() {
        console.log('App Hide')
    }
});
</script>

<style lang="scss">
@import "uview-ui/index.scss";
@import '@/style/index.scss';
/*每个页面公共css */
</style>
