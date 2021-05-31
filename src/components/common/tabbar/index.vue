<template>
    <view class="w-full h-screen">
        <view class="u-page">
            <slot></slot>
            <!-- 所有内容的容器 -->
        </view>
        <!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
        <view class="w-full main-tabbar">
            <u-tabbar
                :list="list"
                active-color="#007FFF"
                inactive-color="#9FA8B9"
            ></u-tabbar>
        </view>
    </view>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data() {
        return {
            list: [
                {
                    iconPath: "home",
                    selectedIconPath: "home-fill",
                    text: '首页',
                    pagePath: '/pages/tab-bars/home/index'
                },

                {
                    text: '我的',
                    iconPath: "home",
                    pagePath: '/pages/tab-bars/mine/index'
                }
            ]
        }

    },
    
    created() {

    }
})

</script>
<style lang="scss">
.u-page {
    height: calc(100% - 60px - env(safe-area-inset-bottom));
}

.main-tabbar {
    box-shadow: 0px -8px 10px 0px rgba(10, 33, 73, 0.04);
}
</style>