// //
// let response = await fetch('https://localhost:7043/Account/Login', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         username: username.value,
//         password: password.value})}
// );
// if (!response.ok) {
//     isLoading.value = false; // Hide loading animation
//     alert('Invalid username or password');
//     return;
// }
//
// let data = await response.text();


 class LoginService {
    public static async login(username: string, password: string): Promise<string> {

        let response = await fetch('https://localhost:7043/Account/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password})}
        );
        if (!response.ok) {
            return "";
        }

        return await response.text();
    }

    public static async logout(): Promise<boolean> {
        // Call API to logout
        return true;
    }


}

export function useLoginService() {
    return  LoginService;
}