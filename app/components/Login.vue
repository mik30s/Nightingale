<template>
	<div id="login" class="login" v-bind:class="{content_hidden : !isNotLoggedIn}">
		<div class="login-form-wrapper animated slideInDown">
			<b-form>
				<div class="logo"></div>
				<b-form-input  v-model="username" type="text" placeholder="Username"></b-form-input>
				<b-form-input  v-model="password" type="password" placeholder="Password"></b-form-input>
				<b-button v-on:click="login" class="login-btn" variant="success">
					<span class="mdi mdi-lock-open"></span>Login
				</b-button>
			</b-form>
		</div>
	</div>
</template>

<script>

export default{
	created(){
		window.bus.$on("logoutBtnClicked", () => this.logout());
	},
	data(){
		return{
			isNotLoggedIn: true,
			username: '',
			password: '',
		};
	},
	methods:{
		// Logs a user in.
		login() {
			if(this.isNotLoggedIn === true) this.isNotLoggedIn = false;
		},
		// Logs a user out.
		logout() {
			if(this.isNotLoggedIn === false) this.isNotLoggedIn = true;
		}
	}

}
</script>

<style lang="scss">
	@import '../../static/theme_colors';

	.login.content_hidden{
		visibility: hidden;

	}

	#login.login{
		top: 32px;
    	position: fixed;
    	width: 100%;
    	height: 100%;
    	background: $secondary_color;
    	z-index: 2;
    	display: inline-flex;
    	flex-direction: row;
    	align-items:center;

    	.login-form-wrapper{
    		margin: auto;

    		.login-btn{
    			width: 100%;
    			background-color: $green;
    			@include on_hover_selectable($green);
    		}

    		.logo{
    			width: 100%;
    			background: darken($secondary_color, 10%);
    			height: 100px;
    		}
    	}
	}
</style>