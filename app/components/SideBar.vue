<template>
	<div class="side-bar" id="sidebar">
		<b-list-group class="sim-menu">
			<b-list-group-item v-for="item in simMenuItems">
				<div class="side-bar-item">
					<i v-bind:class="item.icon" class="mdi side-bar-item-icon"></i>
					<p class="side-bar-item-text">{{ item.name }}</p>
				</div>
			</b-list-group-item>
		</b-list-group>
		<b-list-group class="app-menu">
			<b-list-group-item v-for="item in appMenuItems">
				<div class="side-bar-item">
					<i v-bind:class="item.icon" class="mdi side-bar-item-icon"></i>
					<p class="side-bar-item-text">{{ item.name }}</p>
				</div>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<style lang="scss" >
    @import '../../static/theme_colors';
	.side-bar {
		position: fixed;
		width:3em; height: 100%;
		max-width: 15em;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		background: white;
		font-family: inherit;
		z-index: 100;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.14);

		// bootstrap overrides
		.list-group-item{
			padding: 0px; 
			width: 15rem;
			border-radius: 0px;
		}

		.app-menu{
			// set the bottom to an adequate number
			// to compensate for relative height of sidebar
			margin-bottom:5rem; 
			margin-top: auto;
		}

		.side-bar-item{
			display: inline-flex;
			flex-direction: row;
			height: 3rem;
			width: 100%;
			align-items: center;
			border-radius: 0px;

			.side-bar-item-icon{
				// font-size: 1.1rem;;
				flex: 0 0 3em;
				text-align: center;
				margin-left:0px;
				margin-right: 0px;
				color: $primary_color;

			}
			.side-bar-item-text {
				margin: 0px;
			}
		}
	}
</style>
<script>
export default {
	name : 'SideBar',
	data(){
		return {
			isOpen: false,
			simMenuItems:[
				{icon:'mdi-account ', name:'User'},
				{icon:'mdi-timer', name:'Practice'}, 
				{icon:'mdi-book-open-variant', name:'Tutorials'},
				{icon:'mdi-medical-bag', name: 'Equipment'}, 
				{icon:'mdi-chart-bar', name:'Review'}
			],
			appMenuItems:[
				{icon: 'mdi-settings', name: 'Settings'},
				{icon: 'mdi-logout', name: 'Logout'}
			]
		}
	},
	methods:{
		// closes a sidebar
		close() {

		},
		// opens a sidebar
		open() {
			if(!this.isOpen){
				// set sidebar height
				this.height = '3em';
				alert('open');
			}
		}
	}
}
</script>

