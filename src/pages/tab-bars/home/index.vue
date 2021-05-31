<template>
    <m-tabbar>
        <view class="h-full w-full relative">
            <text class="ab-center">这是首页</text>
        </view>
    </m-tabbar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

    onLoad(){
        this.$toast('1');
    }
})
</script>

<style scoped>
</style>