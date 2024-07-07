<script>
    import '../../../app.css';
  	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
    import { UserSolid } from 'flowbite-svelte-icons'
    import { page } from '$app/stores';

    var loggedIn = false;
    $: activeUrl = $page.url.pathname;



</script>
<!-- <Navbar color="blue" class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b">
  <div class="signupContainer">
      <Button size="sm" href=/login>
          <UserSolid class="w-5 h-5 me-2"/> Login
      </Button>
  </div>
</Navbar> -->
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


  