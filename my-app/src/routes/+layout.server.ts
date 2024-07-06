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

