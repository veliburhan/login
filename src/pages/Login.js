import {useState} from "react"
import useApi from "../Hooks/useApi"

function Login() {
    const Api=useApi()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const Login=()=>{
        const PostData={email,password}
        console.log("POST DATA >>> ", PostData)
        Api.post(`https://api.adoptez1artisan.com/auth/login`,PostData)





        
    }

    return (
        <div className="container w-50 text-center">
        <main className="form-signin w-75">
            <form>
                
                <h1 className="h3 mb-3 fw-normal">Lütfen Giriş Yapın</h1>
                <div className="form-floating my-2">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={event => setEmail(event.target.value)} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating my-2">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={event => setPassword(event.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                
                <button className="w-100 btn btn-lg btn-primary my-2" type="button" onClick={Login}>Giriş</button>
                <p className="mt-5 mb-3 text-muted">© 2022–2023</p>
            </form>
        </main>
        </div>

    )
}

export default Login