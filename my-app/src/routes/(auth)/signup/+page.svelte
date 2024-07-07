<script lang="ts">
    import type { PageData, ActionData } from './$types';
    import { enhance, applyAction } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';

    import { Input, Label, Helper, Button, Checkbox, A, P, Card } from 'flowbite-svelte';

    export let form: ActionData;
    export let data: PageData;

    let email = ""
    let password = ""
    let passwordConfirm =""


    let emailError = false;
    let passwordError = false;
    let passwordConfirmError = false;
    let passwordErrorMessage = "";
    let emailErrorMessage = "";
    let passwordConfirmErrorMessage = "";

    var emailColor = "base"
    var emailLabelColour = "gray";
    var passwordColor = "base"
    var passwordLabelColour = "gray";
    var passwordConfirmColor = "base"
    var passwordConfirmLabelColour = "gray";


    function resetErrors(){
        resetPassword();
        resetEmail();
        resetPasswordConfirm();
    }

    function resetPassword(){
        passwordError = false;
        passwordErrorMessage = "" 
        passwordColor="base";
        passwordLabelColour="gray";
    }

    function resetPasswordConfirm(){
        passwordConfirmError = false;
        passwordConfirmErrorMessage = "" 
        passwordConfirmColor="base";
        passwordConfirmLabelColour="gray";
    }

    function resetEmail(){
        emailErrorMessage = ""
        emailError = false;
        emailColor="base";
        emailLabelColour="gray";
    }

    function setPasswordErrorMessage(message:string){
        passwordErrorMessage = message;
    }
    function setEmailErrorMessage(message:string){
        emailErrorMessage = message;
    }

    function setPasswordConfirmErrorMessage(message:string){
        passwordConfirmErrorMessage = message;
    }
    function setPasswordError(){
        passwordError = true;
    }
    function setEmailError(){
        emailError = true;
    }
    function setpasswordConfirmError(){
        passwordConfirmError = true;
    }

</script>


<div class="formWrapper">  
    <Card class="mx-a">
        <form method="POST" id="signup"
        use:enhance={({ formElement, formData, action, cancel, submitter }) => {
            return async ({ result, update }) => {
                
                resetErrors();
                console.log(result)
                if (result.type === 'failure' ) {
                    if(result.data?.emailError){
                        setEmailError()
                        setEmailErrorMessage(result.data?.emailErrorMessage)
                        emailColor="red"
                        emailLabelColour="red"
                    }
                    if(result.data?.passwordError){
                        setPasswordError()	
                        setPasswordErrorMessage(result.data?.passwordErrorMessage)
                        passwordColor="red"
                        passwordLabelColour="red"
                    }  
                    if(result.data?.passwordConfirmError){
                        setpasswordConfirmError()
                        setPasswordConfirmErrorMessage(result.data?.passwordConfirmErrorMessage)
                        passwordConfirmColor="red"
                        passwordConfirmLabelColour="red"
                    }  
                }else{
                    console.log(result)
                    if(result.data.redirect){
                        window.location.replace("http://localhost:5173" + result.data.redirect)
                    }
                    // applyAction(result)
                }
            };
        }}
        >
            <div class="flex items-center justify-center mb-8">
                    <img src="https://placehold.co/1200x800" class="me-18 h-24" alt="Flowbite Logo" />
            </div>
            
            <P class = "flex justify-center mb-8" size="xl">Create your account</P>

            <div class="mb-6">
                <Label for="email" color={emailLabelColour} class="mb-2">Email</Label>
                <Input color={emailColor} bind:value={email} name="email" type="email" id="emailError" placeholder="john.doe@company.com" required on:input={()=>resetEmail()}/>
                <Helper class="mt-2" color="red">
                    <span class="font-medium">{emailErrorMessage}</span>
                </Helper>

            </div>
            <div class="mb-6">           
                <Label color={passwordLabelColour} for="password" class="mb-2">Password</Label>
                <Input color={passwordColor} bind:value={password} name="password" type="password" id="passwordError" placeholder="•••••" required on:input={()=>resetPassword()}/>
                <Helper class="mt-2" color="red">
                    <span class="font-medium">{passwordErrorMessage}</span>
                </Helper>
            </div>
            <div class="mb-6">
                <Label color={passwordConfirmLabelColour} for="passwordConfirm" class="mb-2">Confirm password</Label>
                <Input color={passwordConfirmColor} name = "passwordConfirm" type="password" id="passwordConfirm" placeholder="•••••" required on:input={()=>resetPasswordConfirm()}/>
                <Helper class="mt-2" color="red">
                    <span class="font-medium">{passwordConfirmErrorMessage}</span>
                </Helper>
            </div>         
            <Button class="w-full mb-2" type="submit">Sign-up</Button>
            
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Already have an account? <a href="/login" class="text-primary-700 hover:underline dark:text-primary-500"> Register account </a>
              </div>    
        </form>
    </Card>
</div>



<style>
    .formWrapper{
        width: 100%;
        display:flex;
        justify-content: center;
        align-items: center ;
        margin-top: 1em;
    }
</style>