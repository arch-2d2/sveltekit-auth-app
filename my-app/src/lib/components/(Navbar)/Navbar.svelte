<script>
	import '../../../app.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
    import { UserSolid, BriefcaseSolid, BookOpenSolid, CogSolid } from 'flowbite-svelte-icons'
    import { page } from '$app/stores';

    export var loggedIn = false;
    $: activeUrl = $page.url.pathname;
</script>

    <Navbar color="blue" class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b">
        <div class="signupContainer">
            {#if loggedIn}
            <Button size="xs" href=/joinabusiness>
                <BookOpenSolid class="w-5 h-5 me-2"/> Join a business
            </Button>
            <Button class="ml-2" size="xs" href=/registerabusiness>
                <BriefcaseSolid class="w-5 h-5 me-2"/> Register a business
            </Button>
            <Button class="ml-2" size="xs" href=/settings>
                <CogSolid class="w-5 h-5 me-2"/> Settings
            </Button>
            {:else}
            <Button size="xs" href=/login>
                <UserSolid class="w-5 h-5 me-2"/> Login
            </Button>
            {/if}
        </div>
    </Navbar>
    <div class = "nonFloat">
        <Navbar class="border-b-2 border-gray-100">
            <NavBrand href="/">
              <img src="https://placehold.co/600x400" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
              <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
            </NavBrand>

            {#if loggedIn}
                <div class="flex md:order-2 space-x-4">
                    <form id="logout" method="POST" action="?/logout">
                    <Button type="submit" size="sm">Logout</Button>
                    </form>
                    <NavHamburger />
                </div>
            {:else}
                <div class="flex md:order-2 space-x-4">
                    <Button size="sm" href=/signup>Get started</Button>
                    <NavHamburger />
                </div>
            {/if}
            <NavUl class="order-1" {activeUrl}>
              <NavLi href="/" active={true}>Home</NavLi>
              <NavLi href="/about">About</NavLi>
              <NavLi href="/docs/components/navbar">Navbar</NavLi>
              <NavLi href="/pricing">Pricing</NavLi>
              <NavLi href="/contact">Contact</NavLi>
            </NavUl>
        </Navbar>
    </div>

<style>
    .signupContainer{
        width:100%; 
        display: flex;
        justify-content: end;
    }

    .nonFloat{
        margin-top: 57px;
    }
</style>