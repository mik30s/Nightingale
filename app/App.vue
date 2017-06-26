<template>
	<!-- The HTML template for our component -->
	<div id="app">
		<sidebar>
		</sidebar>
	</div>
</template>

<script>
	// GNARLY JS
	import Sidebar from './components/Sidebar.vue'
	import Content from './components/Content.vue'

	export default {
		components:{
			Sidebar, Content
		},

		data() {
			return {}
		},

		created() {
		},

		methods:{
		
		}
	}

</script>