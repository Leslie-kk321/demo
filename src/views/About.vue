<template>
	<div>
		<div style="display: flex;width: 1400px;">
			<div
				style="display: flex;flex-direction: column;background: black;width: 30px;align-items: center;padding: 5px;height: 875px;">
				<router-link to="/about/index/pages1"><i class="el-icon-s-home" style="color: aliceblue;font-size: 30px;"></i></router-link>
				<router-link to="/about/user"><i class="el-icon-s-custom" style="color: aliceblue;font-size: 30px;"></i></router-link>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					authName: "3",
					url: require('@/assets/images/course-icon.png'),
					children: [{
						label: '3',
						path: '/about/pages3'
					}]
				}],
				dataList: [{
						authName: "1",
						url: require('@/assets/images/course-icon.png'),
						children: [{
							label: '1',
							path: '/about/pages1'
						}, ]
					},
					{
						url: require('@/assets/images/course-icon.png'),
						children: [{
							label: '2',
							path: '/about/pages2'
						}, ]
					},
				]
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			//跳转
			routerGo(path) {
				console.log(this.$route);
				if (this.$route.path == path) return
				this.$router.push(path)
			},
		},
		mounted() {

		},
	}
</script>

<style>
	a{
		margin: 20px;
	}
</style>
