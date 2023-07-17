<script>
	import Header from '../components/main/Header.svelte';
	import '../assets/global.css'
</script>

<div class="app">
	<Header />
	<main>
		<div class="container mx-auto">
		<slot />
	</div>
	</main>
</div>

<style>
	
</style>
