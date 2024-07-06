<script lang="ts">
	import Navbar from '$lib/components/(Navbar)/Navbar.svelte';
	import StickyNavbar from '$lib/components/(Navbar)/StickyNavbar.svelte';
	import '../app.css';

export let data;

let isLoggedIn = data.isValid;

</script>

{#if !isLoggedIn}
	<Navbar/>
{:else}
	<StickyNavbar/>
{/if}
	
<slot></slot>