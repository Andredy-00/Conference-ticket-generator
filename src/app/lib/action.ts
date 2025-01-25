
type User = {
    avatar:File,
    name: string,
    emailAddress:string,
    githubUsername:string,
}


export const formData = ( data:FormData ) => {
    console.log(data);
    
}