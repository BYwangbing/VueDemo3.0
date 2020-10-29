<template>
    <div class="form-group">
        <label for="exampleInputEmail1">添加待办事项</label>
        <input type="text" class="form-control"
               id="exampleInputEmail1"
               aria-describedby="emailHelp"
               v-model="inputValue"
               @keydown.enter="add(inputValue)">
        <small id="emailHelp" class="form-text text-muted">回车即可添加</small>
    </div>
    <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between" v-for="(item, index) in todos">
            <div class="form-check" :key="'todo' + index">
                <input type="checkbox" class="form-check-input"
                       @click.prevent="check(index)"
                       id="'exampleCheck' + index" v-model="input">
                <label class="form-check-label" :for="'exampleCheck' + index">{{item}}</label>
            </div>
            <div class="float-right">
                <button type="button" class="btn btn-danger" @click="delItem(index)">删除</button>
            </div>
        </li>
    </ul>
</template>

<script>
    import {defineComponent, ref, reactive, computed} from 'vue'
    import store from '@/store'

    export default defineComponent({
        name: "VueAdd",
        setup() {
            const inputValue = ref('');
            const add = value => {
                if (value.trim() === '') return;
                store.commit('add', value);
                inputValue.value = ''
            };
            const delItem = index => {
                store.commit('delete', index)
            };
            const check = index => {
                store.commit('check', index)
            };
            return reactive({
                inputValue,
                todos: computed(() => store.state.todos),
                add,
                delItem,
                check
            })
        }
    })
</script>

<style scoped>

</style>