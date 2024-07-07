<script lang="ts">
    import { Input, Label, Button, Card, P} from 'flowbite-svelte';
    import { enhance, applyAction } from '$app/forms';

    var requestSend = false;
    function setRequestSend(){
        requestSend= !requestSend;
    }

</script>

<div class="formWrapper"> 
        <Card class="mx-a">
            {#if !requestSend}
                <form method="POST" id="signup" action="?/requestPasswordChange"
                use:enhance={({}) => {
                    return async ({ result }) => {
                        setRequestSend()
                    };
                }}
                >
                    <div class="flex items-center justify-center mb-8">
                        <img src="https://placehold.co/1200x800" class="me-18 h-24" alt="Flowbite Logo" />
                    </div>
                
                    <P class = "flex justify-center mb-8" size="xl">Reset your password</P>
                    <div class="mb-1 mt-6 mb-6">
                        <Label for="email" class="mb-2 text-left">Email</Label>
                        <Input  name="email" type="email" id="email" placeholder="john.doe@gmail.com" required/>
                    </div>
                    <Button class = "w-full" type="submit">Request password change</Button>
                </form>
            {:else}
                <div class="flex justify-center content-evenly flex-col">
                    <P class="mr-ax md:text-xl text-center self-center mb-6" weight="light" size="lg" color="text-gray-500 dark:text-gray-400">Your password reset has been sent to the email</P>
                     <div class="flex justify-center">
                        <Button on:click={()=>setRequestSend()}>Haven't recieved email?</Button>
                     </div>

                </div>
            {/if}
        </Card>
</div>

<style>
    .formWrapper{
        width: 100%;
        display:flex;
        justify-content: center;
        flex-direction: column;
        flex-wrap:wrap;
        align-items: center;
        margin-top: 1em;
    }
</style>