import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit'

export const actions = {
    logout: async ({locals}) => {
        console.log("here")
        locals.pb.authStore.clear();
        redirect(302,'/')
    },   
} satisfies Actions;