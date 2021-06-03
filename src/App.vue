<template>
	<div id="app">
		<div style="text-align: center;width: 1400px;background: #d6d6d6;padding: 10px 0px;">
			<router-link to="/">首页</router-link>
			<router-link to="/about/index/pages1">管理中心</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'

	export default {
		name: 'app',
		components: {
			HelloWorld
		}
	}
</script>

<style>
	body{
		padding: 0 0 ;
		margin: 0 0;
	}
	a {
		text-decoration: none;
		color: black;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>
