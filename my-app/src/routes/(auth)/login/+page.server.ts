import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit'
import { fail } from '@sveltejs/kit';


export async function load({ locals }) {
    if(locals.pb.authStore.isValid){
        return {
            isValid: locals.pb.authStore.isValid,
            token: locals.pb.authStore.token,
            id: locals.pb.authStore.model.id,
        };
    }else{
        return {
            isValid: false,
            token: "",
            id: "",
        };
    }
}




export const actions = {
    login: async ({locals,request}) => {
        const data = await request.formData();   
        
        const email =data.get('email');
        const password = data.get('password');

        console.log(email)
        console.log(password)

        try {
            const authData = await locals.pb.collection('users').authWithPassword(
                email,
                password,
            );
            return {status: 301, redirect: '/home'}       
        } catch (error) {
            console.log(error);
            const response = {errorMessage: "Unable to sign in, check your details"}
            return fail(400, response);
        }

    },
    logout: async ({locals}) => {
        console.log("here")
        locals.pb.authStore.clear();
        redirect(302,'/')
    },   
} satisfies Actions;