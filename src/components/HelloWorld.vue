<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<div>
			<p>模板语法和数据的双向绑定：</p>
			<label>
				<input type="text" v-model="num1">
			</label>
			<span>+</span>
			<label>
				<input type="text" v-model="num2">
			</label>
			<span>=</span>
			{{result1}}
		</div>
		<div>
			<h1>事件绑定 数据模板</h1>
			<label>
				<input type="text" ref="num3" @keyup="add()">
			</label>
			<span>+</span>
			<label>
				<input type="text" ref="num4" @keyup="add()">
			</label>
			<span>=</span>
			{{result2}}
		</div>
	</div>
</template>

<script>
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'HelloWorld',
        props: {
            msg: String,
        },
        data() {
            return {
                num1: 0,
				num2: 0,
				result2: 0
            }
        },
		computed: {
            result1() {
                return parseInt(this.num1) + parseInt(this.num2)
			}
		},
		methods: {
            add() {
                this.result2 = parseInt(this.$refs.num3.value) + parseInt(this.$refs.num4.value)
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
