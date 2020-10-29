<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="(item, index) in todos">
            <div class="form-check" :key="'todo' + index">
                {{item}}
            </div>
        </li>
    </ul>
</template>

<script>
    import {defineComponent, reactive, computed} from 'vue'
    import store from '@/store'

    export default defineComponent({
        name: "VueAdd",
        setup() {
            return reactive({
                todos: computed(() => store.state.deletes),
            })
        }
    })
</script>

<style scoped>

</style>