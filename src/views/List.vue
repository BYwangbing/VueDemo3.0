<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <a class="navbar-brand" href="#">TodoList</a>
            <ul class="navbar-nav mr-auto d-flex">
                <li class="nav-item">
                    <router-link to="/add" class="nav-link">待办事件</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/done" class="nav-link">已完成</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/delete" class="nav-link">已删除</router-link>
                </li>
            </ul>
        </nav>
    </div>
    <div class="container">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "List"
    }
</script>

<style scoped>

</style>