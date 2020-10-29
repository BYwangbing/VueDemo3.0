<template>
	<div class="hello">
		<h2>{{ msg }}</h2>
		<label>
			<input type="text" v-model="num1" @keyup="add()">
		</label>
		<span>+</span>
		<label>
			<input type="text" v-model="num2" @keyup="add()">
		</label>
		<span>=</span>
		{{result}}
		<h1></h1>

	</div>
</template>

<script>
    import {defineComponent} from 'vue';
    import {ref} from 'vue'

    export default defineComponent({
        name: 'HelloWorld',
        props: {
            msg: String,
        },
        setup() {
            const num1 = ref(0);
            const num2 = ref(0);
            const result = ref(0);

            function add() {
                result.value = parseInt(num1.value) + parseInt(num2.value)
            }

            return {
                num1,
                num2,
                result,
                add
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
