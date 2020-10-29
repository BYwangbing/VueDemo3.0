<template>
    <div class="container" @mousedown="mousedown">
        <h1>TodoList</h1>
        <h3>
            共有 <span class="text-primary">{{lists.length}}</span>个任务
            已完成 <span class="text-success">{{finished.length}}</span>个任务
        </h3>
        <h3>未完成的列表</h3>
        <ul class="list-group">
            <template v-for="(item, index) in lists">
                <li class="list-group-item d-flex justify-content-between"
                    v-if="!item.checked" :key="index">
                    <div class="form-group form-check mb-0">
                        <label @click="() => item.checked = !item.checked">
                            <input type="checkbox" class="form-check-input"
                                   :id="'item-'+ index" v-model="item.checked">
                        </label>
                        <label class="form-check-label" v-if="!item.isEdit"
                               @dblclick="showEdit(item, index)">
                            {{item.name}}
                        </label>
                        <label class="form-check-label" v-else>
                            <input type="text" v-model="editValue" ref="myInput">
                        </label>
                    </div>
                    <button type="button" class="close" aria-label="Close" @click="remove(index)">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </li>
            </template>
        </ul>
        <h3>已完成的列表</h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) in finished"
                :key="index" @click="() => item.checked = !item.checked">
                <div class="form-group form-check">
                    <label>
                        <input type="checkbox" class="form-check-input"
                               v-model="item.checked" disabled
                               :id="'finished-'+ index">
                    </label>
                    <label class="form-check-label" :id="'finished-'+ index">{{item.name}}</label>
                </div>
            </li>
        </ul>
        <h3>添加新的Task</h3>
        <div class="form-group">
            <label for="add">添加
                <input type="text" id="add" class="form-control"
                       aria-describedby="sizing-addon2"
                       placeholder="添加新的Task" v-model="value"
                       @keydown.enter="add">
            </label>
        </div>
        <button class="btn btn-success btn-block btn-lg" @click="add">确定添加</button>
    </div>

</template>

<script>
    import {ref, reactive, toRefs, computed, onUpdated} from 'vue'

    export default {
        name: "TodoList",
        setup() {
            let editIndex = 0;
            const myInput = ref(null);
            /*
                1.加入checkbox ->checked
                2.统计哪些-> checked-> finish列表
            */
            // 3.add添加item -> item数据结构->name,checked,isEdit
            const add = () => {
                state.lists.push({
                    name: state.value,
                    check: false,
                    finished: false
                });
                state.value = '';
            };
            // 4.双击进行编辑
            const showEdit = (item, index) => {
                editIndex = index;
                item.isEdit = true;
                state.editValue = item.name;
            };
            const mousedown = e => {
                if (myInput.value && e.target !== myInput.value) {
                    state.lists[editIndex] = {
                        name: state.editValue,
                        check: false,
                        finished: false
                    }
                }
            };
            // 5.删除功能—>删除特定index的元素
            const remove = index => {
                state.lists.splice(index, 1);
            };
            const state = reactive({
                value: '',
                editValue: '',
                lists: [
                    {
                        name: '吃饭',
                        checked: false,
                        isEdit: false
                    },
                    {
                        name: '睡觉',
                        checked: true,
                        isEdit: false
                    },
                    {
                        name: '打王福坤坤',
                        checked: false,
                        isEdit: false
                    }
                ],
                finished: computed(() =>
                    state.lists.filter(item => item.checked === true)
                )
            });
            onUpdated(() => {
                console.log(myInput.value);
            });
            return {...toRefs(state), add, showEdit, mousedown, myInput, remove}
        }
    }
</script>

<style scoped>

</style>