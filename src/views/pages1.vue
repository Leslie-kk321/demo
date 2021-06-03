<template>
	<div class="all-content">
		<div
			style="display: flex;flex-direction: column;background: #e5f1f1;height: auto;width: 800px;padding: 5px; border-radius: 5px;">
			<div style="display: flex;justify-content: space-between;">
				<div>
					单位名称：<el-input placeholder="请输入单位名称" v-model="input" show-password style="width: 150px;"></el-input>
					所在区域：
					<el-select v-model="select" slot="prepend" placeholder="请选择">
						<el-option label="餐厅名" value="1"></el-option>
						<el-option label="订单号" value="2"></el-option>
						<el-option label="用户电话" value="3"></el-option>
					</el-select>
				</div>
				<div>
					<el-button type="primary" icon="el-icon-search">搜索</el-button>
				</div>
			</div>
			<div style="text-align: right;margin-top: 10px;">
				单位名称：<el-input placeholder="请输入单位名称" v-model="input" show-password
					style="width: 150px;margin-right: 10px;"></el-input>
				<el-button type="primary" icon="el-icon-plus">新建</el-button>
				<el-button type="primary" icon="el-icon-delete">删除</el-button>
			</div>
		</div>

		<div>
			<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
				@selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column label="日期" width="120">
					<template slot-scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="120">
				</el-table-column>
				<el-table-column prop="address" label="地址" show-overflow-tooltip>
				</el-table-column>
			</el-table>
			<div class="block">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
					:current-page.sync="currentPage2" :page-sizes="[100, 200, 300, 400]" :page-size="100"
					layout="sizes, prev, pager, next" :total="1000">
				</el-pagination>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				input:'',
				select:'',
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 4,
				tableData: [{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-08',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-06',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-07',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				multipleSelection: []
			}
		},

		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			}
		}
	}
</script>

<style>
	.all-content {
		/* margin: 0 5px; */
	}
</style>
