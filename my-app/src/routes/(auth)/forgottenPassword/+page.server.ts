import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit'
import { fail } from '@sveltejs/kit';

export const actions = {
    requestPasswordChange: async ({locals,request}) => {
        const data = await request.formData();   
        const email =data.get('email');
        console.log(email)

        try {
            await locals.pb.collection('users').requestPasswordReset(email);
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