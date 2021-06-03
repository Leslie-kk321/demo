<template>
	<div class="all">
		<div>当前位置：行业监管-企业档案-涉能单位分组管理</div>
		<div class="content">
			<div class="left">
				<h4 style="border-bottom: 1px #2C3E50 solid;margin-bottom: 10px;margin-top: 10px;">
					<i class="el-icon-menu"></i>涉能单位管理
				</h4>
				<div style="display: flex;">
					<div style="box-shadow: 1px 1px 3px 2px #ebe7e6;">

						<el-col :span="10">
							<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"
								@close="handleClose" background-color="#545c64" text-color="#fff"
								active-text-color="#ffd04b" style="height: 811px;width: 270px;">
								</el-submenu>
								<el-submenu :index="`num`+index" v-for="(item,index) in dataList" :key="index">
									<template slot="title">
										<img :src="item.url" width="20px" height="20px" style="margin-right: 5px;" />
										<p style="width: 50px;">{{item.authName}}</p>
									</template>
									<el-menu-item @click="routerGo($item.path)" :index="`${index}-${$index}`"
										v-for="($item,$index) in item.children" :key="$index">
										{{$item.label}}
									</el-menu-item>
								</el-submenu>
							</el-menu>
						</el-col>
						
					</div>
					<div><router-view></router-view></div>
				</div>
			</div>
			<div class="right">
				<h4 style="border-bottom: 1px #2C3E50 solid;margin-bottom: 10px;margin-top: 20px;">
					<i class="el-icon-menu"></i>相关功能
				</h4>
				<div style="display: flex;justify-content:space-between;margin: 10px auto;padding: 5px 0;flex-wrap: wrap;width: 125px;">
					<div style="display: flex;flex-direction: column;width: 50px;align-items: center;" v-for="(i,index) in list"
						:key="index">
						<img :src="i.url" style="background: #000000;width: 50px;height: 50px;border-radius: 5px;" />
						<span>{{i.name}}</span>
					</div>
				</div>
				<h4 style="border-bottom: 1px #2C3E50 solid;margin-bottom: 10px;margin-top: 20px;">
					<i class="el-icon-menu"></i>功能说明
				</h4>
				<div>1.说明xxxxxxxxxxxxssssssssssssss</div>
				<div>2.说明xxxxxxxxxxxx</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						url: require('@/assets/images/course-icon.png'),
						name: '1'
					},
					{
						url: require('@/assets/images/course-icon.png'),
						name: '2'
					},
					{
						url: require('@/assets/images/course-icon.png'),
						name: '3'
					},
					{
						url: require('@/assets/images/course-icon.png'),
						name: '3'
					},
					{
						url: require('@/assets/images/course-icon.png'),
						name: '3'
					},
					{
						url: require('@/assets/images/course-icon.png'),
						name: '3'
					},
					
				],
				dataList: [{
						authName: "1",
						url: require('@/assets/images/course-icon.png'),
						children: [{
							label: '1',
							path: '/about/index/pages1'
						}, ]
					},
					{
						url: require('@/assets/images/course-icon.png'),
						children: [{
							label: '2',
							path: '/about/index/pages2'
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
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		justify-content: space-around;

	}

	.right {
		box-shadow: 1px 1px 3px 2px #ebe7e6;
		height: auto;
		width: 20%;
		border-radius: 5px;
	}

	.mid {
		box-shadow: 1px 1px 3px 2px #ebe7e6;
		// border: 1px red solid;
		height: auto;
		width: 60%;
	}

	.left {
		box-shadow: 1px 1px 3px 2px #ebe7e6;
		height: 844px;
		width: 80%;
		margin-right: 10px;
		padding: 10px 0px;
		border-radius: 5px;
	}

	.all {
		display: flex;
		width: 100%;
		flex-direction: column;
		margin-left: 10px;
	}

	.el-submenu .el-menu-item {
		height: 50px;
		line-height: 50px;
		padding: 0 45px;
		min-width: 100px;
	}
</style>
