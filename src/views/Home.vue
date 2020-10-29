<template>
    <div class="container">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
        <h1>ref只可以监听简单数据，reactive可以监听所有数据</h1>
        <VueRef msg="Vue3.0语法 ref"></VueRef>
        <VueReactive msg="Vue3.0语法 reactive"></VueReactive>
        <VueComputed msg="Vue3.0语法 computed" @sendMsg="handle"></VueComputed>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import VueRef from '@/components/VueRef.vue'
    import VueReactive from '@/components/VueReactive.vue'
    import VueComputed from '@/components/VueComputed.vue'

    export default defineComponent({
        name: 'Home',
        components: {
            HelloWorld,
            VueRef,
            VueReactive,
            VueComputed
        },
        setup() {
            const handle = value => {
                console.log("setup ==> value", value);
            };
            return {
                handle
            }
        }
    });
</script>
