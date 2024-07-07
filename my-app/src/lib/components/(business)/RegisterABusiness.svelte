<script lang="ts">
        import { Input, Label, Helper, Button, Card, P, Checkbox} from 'flowbite-svelte';
        import { enhance, applyAction } from '$app/forms';

        var businessName  = ""

        var becomingPremium = false;
        var becomingPremiumState = "selected"

        function changeBecomingPremium(){
            becomingPremium = !becomingPremium;
            console.log(becomingPremium)
        }
</script>


<div class="formWrapper">  
    <Card class="mx-a">
            <form method="POST" id="signup" action="?/register_business"
                use:enhance={({ formElement, formData, action, cancel, submitter }) => {
                    return async ({ result, update }) => {
                        console.log(result);
                    };
                }}
                >
                    <div class="flex items-center justify-center mb-8">
                            <img src="https://placehold.co/1200x800" class="me-18 h-24" alt="Flowbite Logo" />
                    </div>
                    
                    <P class = "flex justify-center mb-6" size="xl">Register your business</P>
        
                    <div class="mb-6">
                        <Label for="email"  class="mb-1">Business name</Label>
                        <Input  bind:value={businessName} name="businessName" type="text"  placeholder="your business name" required/>
                    </div>
                    
                    <Checkbox class="mb-3" on:click={()=>changeBecomingPremium()} selected>Upgrade to premium?</Checkbox>
                    {#if becomingPremium}
                        
                    {:else}
                        <P class="mb-3">learn about our pricing</P>
                    {/if}




                    <Button type="submit" class="w-full mb-3">Create your business</Button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                      Looking to join a business? <a href="/signup" class="text-primary-700 hover:underline dark:text-primary-500"> Join a business </a>
                    </div>     
            </form>
    </Card>
</div>