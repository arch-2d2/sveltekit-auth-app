<script lang="ts">
	import Navbar from '$lib/components/(Navbar)/Navbar.svelte';
	import StickyNavbar from '$lib/components/(Navbar)/StickyNavbar.svelte';
	import '../app.css';

export let data;

let loggedIn = data.isValid;

</script>
<Navbar {loggedIn}/>
<!-- {#if !isLoggedIn}
	
{:else}
	<StickyNavbar/>
{/if} -->
	
<slot></slot>