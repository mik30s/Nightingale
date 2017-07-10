<template>
	<div class="simulation" id="simulation">
		<canvas v-render-scene id="glCanvas" width="640" height="480"></canvas>
	</div>
</template>

<script>

export default {
	data() {
		return {}
	},
	directives: {
		renderScene: (canvasEl, binding) => {
			// var canvas = canvasEl.getContext;
			var gl = canvasEl.getContext('webgl');

			if (!gl)
			{
				alert('No webgl!');
				return;
			}

			gl.clearColor(0.0, 0.0, 0.0, 1.0);
			gl.enable(gl.DEPTH_TEST);
			gl.depthFunc(gl.LEQUAL);
			gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		}
	},
	mounted() {
		
	}

}
</script>

<style>
	
</style>