export default function generatePass(passWordLength: number = 8) {
   let password: string = '';
   let characters: string =
     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
   for (let index = 0; index < passWordLength; index++) {
     password += characters.charAt(
       Math.floor(Math.random() * characters.length)
     );
   }
   return password;
 }
 