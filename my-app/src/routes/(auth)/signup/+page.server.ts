import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit'
import { fail } from '@sveltejs/kit';

// function validateEmail(email:string) {
//     var re = /\S+@\S+\.\S+/;
//     return re.test(email);
//   }

export const actions = {
    default: async ({locals,request,url}) => {
        const data = await request.formData();   

        // const username =data.get('username');
        const email = data.get('email');
        const password = data.get('password');
        const passwordConfirm = data.get('passwordConfirm');
        const name = data.get('firstName') + " " + data.get('secondName')
        
        const dataToSend = {
            "email": email,
            "password": password,
            "passwordConfirm": passwordConfirm,
        };


        try {
            const record = await locals.pb.collection('users').create(dataToSend);
            try {
                const authData = await locals.pb.collection('users').authWithPassword(
                    email,
                    password,
                );
                return {status: 301, redirect: '/home'}
                  
            } catch (error) {
                return {status: 301, redirect: '/login'}
            }
        } catch (error) {
            let response = {}
            if(error.response.data.password){
                console.log(error.response.data.password.message)
                Object.assign(response, {passwordError: true})
                Object.assign(response, {passwordErrorMessage: error.response.data.password.message})
            }
            if(error.response.data.passwordConfirm){
                Object.assign(response, {passwordConfirmError: true})
                Object.assign(response, {passwordConfirmErrorMessage: error.response.data.passwordConfirm.message})
            }

            if(error.response.data.email){
                Object.assign(response, {emailError: true})
                Object.assign(response, {emailErrorMessage: error.response.data.email.message})
            }
            return fail(400, response);
        }
    },
} satisfies Actions;