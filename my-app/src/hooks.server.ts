import PocketBase from 'pocketbase';
// import { env } from '$env/dynamic/private'
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';



export const authentication: Handle = async ({ event, resolve }) => {
    // event.locals.pb = new PocketBase(env.PB_URL);
    event.locals.pb = new PocketBase("http://127.0.0.1:8090");
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
    try {
        console.log("success")
        event.locals.pb.authStore.isValid && await event.locals.pb.collection('users').authRefresh();
    } catch (_) {
        console.log("fail")
        event.locals.pb.authStore.clear();
    }
    const response = await resolve(event);
    response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());

    return response;
}

export const handle = sequence(authentication)




