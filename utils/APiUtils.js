class APIUtils
{
    async get Token()
    {
        const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
                {
                    data: loginPayLoad
                })
                expect(loginResponse.ok().toBeTruthy);
                const loginResponseJson = await loginResponse.json();
                 token = loginResponseJson.token;
                console.log(token);
                return token;
        
    }



}