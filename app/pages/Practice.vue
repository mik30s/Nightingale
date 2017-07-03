<template>
	<div class="practice" id="practice">
		<b-button-toolbar>
			<b-button>Level 1</b-button>
			<b-button>Level 2</b-button>
			<b-button>Level 3</b-button>
		</b-button-toolbar>
		<div class="practice-content">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-7">
						<b-card 
				    		header="Scenario Information">
							
						</b-card>
					</div>
					<div class="col-md-5">
						<b-card  title="Scenario Image"
            			class="mb-2"> 
				    		
						</b-card>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components:{
	},
	data(){
		return {};
	},
}
</script>

<style lang="scss">
@import '../../static/theme_colors';

#practice.practice{
	height: 100%;
	background: white;
	@include default_page_setup();

	.practice-content{
		padding: 0.5em 0.5em;
	}

	.btn-toolbar{
		width: 100%;
		text-align:center;
		justify-content: center;
		height: 2.5em;
		background: white;
		//@include default_box_shadow();

		.btn {
			background: white;
			border: 0px;
			color: $secondary_color;
			max-width: 200px;
			width: 10em;
			margin-left: 2em;
			margin-right: 2em;
			transition: border-bottom ease-in 100ms;

			&:hover{
				border-bottom: 0.25rem solid $primary_color;
			}
		}
	}
}
</style>