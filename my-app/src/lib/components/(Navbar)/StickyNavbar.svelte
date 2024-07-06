<script>
    import '../../../app.css';
  	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
    import { page } from '$app/stores';

    var loggedIn = false;
    $: activeUrl = $page.url.pathname;



</script>
<Navbar>
    <NavBrand href="/">
      <img src="https://placehold.co/600x400" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
    </NavBrand>
    <div class="flex md:order-2 space-x-4">
        <form id="logout" method="POST" action="?/logout">
          <Button type="submit" size="sm">Logout</Button>
        </form>
        
        <NavHamburger />
    </div>
    <NavUl class="order-1" {activeUrl}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/docs/components/navbar">Navbar</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
</Navbar>


  