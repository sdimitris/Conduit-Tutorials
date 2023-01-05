import React, {useState} from 'react';
import './Login.css'
async function loginUser(credentials) {
    return fetch(`http://localhost:3000/authentication/local`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: credentials.email,
            password: credentials.password
        }),
    }).then(data => data.json());
}


export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password,
        });

        console.log(token);
    }

    return (

        <html lang="pt-br">

        <head>
            <meta charSet="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                        <title>Login</title>
                        <link rel="stylesheet" href="Login.css"/>
        </head>

        <body>
        <div className="box">
            <form className="form" onSubmit={handleSubmit}>
               <img src="/conduitLogo.svg" alt="Conduit Logo"/>
                <div className="inputBox">
                    <input type="text" name="email" id="email" onChange={ e => { setEmail(e.target.value)} } required/>
                        <label htmlFor="email">Email</label>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="password" name="password" id="password" required onChange={e => {setPassword(e.target.value)} }/>
                        <label htmlFor="password">Password</label>
                    <i></i>
                </div>
                <input type="submit" name="login" id="login" value="Login"/>
            </form>
        </div>
        </body>
        </html>
    )
}