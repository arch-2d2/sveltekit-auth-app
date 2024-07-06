<script lang="ts">
    import { Input, Label, Helper, Button, Card, P} from 'flowbite-svelte';
    import type { PageData, ActionData } from './$types';
    import { enhance, applyAction } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';
    import { onMount } from 'svelte';


    export let data;

    let isLoggedIn = data.isValid;

    var emailColor = "base"
    var emailLabelColour="gray"
    var email = ""
    var emailErrorMessage = ""
    var emailError = false;

    var count = 5;

    var passwordColor = "base"
    var passwordLabelColour="gray"
    var password = ""
    var passwordErrorMessage = ""
    var passwordError = false;

    function resetEmail(){
        emailErrorMessage = ""
        emailError = false;
        emailColor="base";
        emailLabelColour="gray";
    }
    function setEmailError(){
        emailError = true;
    }
    function setEmailErrorMessage(message:string){
        emailErrorMessage = message;
    }
    
    function resetPassword(){
        passwordErrorMessage = ""
        passwordError = false;
        passwordColor="base";
        passwordLabelColour="gray";
    }
    function setPasswordError(){
        passwordError = true;
    }
    function setPasswordErrorMessage(message:string){
        passwordErrorMessage = message;
    }

    function resetError(){
        resetEmail();
        resetPassword();
    }

    function startTimer(){
        var intervalId = window.setInterval(function(){
            count = count-1;
            if(count==0){
                clearInterval(intervalId);
                window.location.replace("http://localhost:5173")
            }
        }, 1000);
    }
    onMount(() => {
        if(isLoggedIn)startTimer()
	});

</script>
{#if !isLoggedIn}
 <div class="formWrapper">  
    <Card class="mx-a">
                <form method="POST" id="signup" action="?/login"
                use:enhance={({ formElement, formData, action, cancel, submitter }) => {
                    return async ({ result, update }) => {
                        console.log(result);
                        if (result.type === 'failure' ) {
                            setEmailError()
                            setEmailErrorMessage(result.data?.errorMessage)
                            emailColor="red"
                            emailLabelColour="red"

                            setPasswordError()
                            setPasswordErrorMessage(result.data?.errorMessage)
                            passwordColor="red"
                            passwordLabelColour="red"
                        
                        }
                        if(result.data.redirect){
                            window.location.replace("http://localhost:5173" + result.data.redirect)
                        }
                    };
                }}
                >
                    <div class="flex items-center justify-center mb-8">
                            <img src="https://placehold.co/1200x800" class="me-18 h-24" alt="Flowbite Logo" />
                    </div>
                    
                    <P class = "flex justify-center mb-8" size="xl">Create your account</P>
        
                    <div class="mb-6">
                        <Label for="email" color={emailLabelColour} class="mb-2">Email address</Label>
                        <Input color={emailColor} bind:value={email} name="email" type="email"  placeholder="john.doe@company.com" required on:input={()=>resetError()}/>
                        <!-- <Helper class="mt-2" color="red">
                            <span class="font-medium">{emailErrorMessage}</span>
                        </Helper> -->
                    </div>
                    <div class="mb-6">
                        <Label for="password" color={passwordLabelColour} class="mb-2">Password</Label>
                        <Input color={passwordColor} bind:value={password} name="password" type="password"  placeholder="password" required on:input={()=>resetError()}/>
                        <Helper class="mt-2" color="red">
                            <span class="font-medium">{passwordErrorMessage}</span>
                        </Helper>
                    </div>
                    <div class="flex items-center justify-center mb-31">
                        <Button type="submit">Sign-in</Button>
                    </div>      
                    
                </form>
            </Card>
        </div>
{:else}
    <div class="formWrapper">  
        <Card class="mx-a">
            <P> you are already logged in... taking you back home in {count} seconds</P>
        </Card>
    </div>
{/if}



<style>
    .formWrapper{
        width: 100%;
        display:flex;
        justify-content: center;
        align-items: center ;
        margin-top: 1em;
    }
</style>

<!-- 
<form method="POST" action="/login" id="login" >
    <P class = "flex justify-center mb-4" size="xl">Log in to your account</P>
    
    <Label class="space-y-2">
        <span>Email</span>
        <Input name="email" type="email" placeholder="email@email.com" size="md" />
    </Label>
    <Label class="space-y-2 mt-4">
        <span>password</span>
        <Input name="password" type="password" placeholder="password" size="md" />
    </Label>
    <div class="flex items-center justify-center mb-1 mt-3">
        <Button type="submit" size="sm">Log in!</Button>
    </div> 
</form> -->