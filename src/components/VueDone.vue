<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="(item, index) in todos">
            <div class="form-check" :key="'todo' + index">
                <label class="form-check-label" :for="'exampleCheck' + index">{{item}}</label>
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
                todos: computed(() => store.state.dones),
            })
        }
    })
</script>

<style scoped>

</style>