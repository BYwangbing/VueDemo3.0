<template>
    <div class="hello">
        <h2>{{ msg }}</h2>
        <label>
            <input type="text" v-model="num1">
        </label>
        <span>+</span>
        <label>
            <input type="text" v-model="num2">
        </label>
        <span>=</span>
        {{result}}
        <button class="btn btn-success " @click="clickEvent()">emit Event</button>
    </div>
</template>

<script>
    import {defineComponent} from 'vue';
    import {reactive, computed, toRefs,
        onMounted, onUpdated, onUnmounted,
        onRenderTracked, onRenderTriggered
    } from 'vue'

    function useAdd() {
        const state = reactive({
            num1: 0,
            num2: 0,
            result: computed(() => parseInt(state.num1) + parseInt(state.num2))
        });
        /*
        * toRefs()函数可以将reactive()创建出来的响应式对象，转换为普通对象，
        * 只不过这个对象上的每个属性节点，都是ref()类型的响应式数据
        * */
        return toRefs(state)
    }

    export default defineComponent({
        name: 'HelloWorld',
        props: {
            msg: String,
        },
        setup(props, {emit}) {
            console.log("setup ==> props", props);
            const {num1, num2, result} = useAdd();
            onMounted(() => {
                console.log('mounted!')
            });
            onUpdated(() => {
                console.log('updated!')
            });
            onUnmounted(() => {
                console.log('unmounted!')
            });
            onRenderTracked((e) => {
                console.log('onRenderTracked!', e)
            });
            onRenderTriggered((e) => {
                // 检查哪个依赖性导致组件重新渲染
                console.log('onRenderTriggered!', e)
            });
            const clickEvent = () => {
                // this.$emit('', payload)
                console.log(result.value);
                emit("sendMsg", result.value)
            };
            return {
                num1, num2, result,
                clickEvent
            }
        }
    });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
