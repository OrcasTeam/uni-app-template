<template>
    <m-tabbar>
        <view class="h-full w-full relative">
            <text class="ab-center text-red-500">{{ title }}</text>
            <text>{{ counter.double }}</text>
        </view>
    </m-tabbar>
</template>

<script lang="ts">
import { useCounterStore } from "@/stores/counter";
import { defineComponent, ref } from "@vue/composition-api";
import Tabbar from '@/components/common/tabbar/index.vue';

export default defineComponent({
    setup() {
        const tabbarRef = ref<InstanceType<typeof Tabbar>>()
        const counter = useCounterStore();

        counter.increment();

        const title = ref('这是首页');
        return { title, counter }
    },
    onLoad() {
        console.log('11111111111');

    }
})
</script>

<style scoped>
</style>