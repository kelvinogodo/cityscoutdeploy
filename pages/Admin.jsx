import {useState} from 'react'
const app = {
  API_URL: process.env.API_URL ? process.env.API_URL : "https://localhost:3000",
};

export const getBaseApiUrl = () => {
  const url = process.browser ? "/api" :app.API_URL
  if (process.browser) {
    return "/api";
  }
// see `app` defined in my previous reply
  return url;
};
const Admin = () => {
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  
  const createAdmin = async (e)=>{
    e.preventDefault()
    const adminData = {
      name:name,
      email:email,
      password:password
    }
    const request = await fetch(`${getBaseApiUrl()}/api/createAdmin`,
    {
      method: 'POST',
      headers: {
        'content-Type' : 'application/json'
      },
      body: JSON.stringify({
        name:adminData.name,
        email: adminData.email,
        password:adminData.password
      })
    }
    )
    const res = await request.json()
    if(res.status === 200){
      window.location.href= '/dashboard' 
    }
  }

  const login = async  (e)=>{
      e.preventDefault()
      const loginData = {
        email:email,
        password:password
      }
      const req = await fetch(`${getBaseApiUrl()}/api/login`,
      {
        method:'POST',
        headers :{
            'content-Type':'application/json'
        },
        body: JSON.stringify(
          {
            email: loginData.email,
            password:loginData.password
          }
        )
      })
      const res = await req.json()
      if (res.status == 200){
        localStorage.setItem('user','admin')
        window.location.href = '/dashboard'
      }
      else{
        window.location.href = '/admin'
      }
  }
  return (
    <section className='login-form-container'>
        <form className="login-form" onSubmit={createAdmin}>
          <h2>welcome admin</h2>
          <input type="text" required onChange={(e)=>{
            setName(e.target.value)
          }} />
          <input type="email" className="login-input" required onChange={(e)=>{
            setEmail(e.target.value)
          }}/>
          <input type="password" className="login-input" required onChange={(e)=>{
            setPassword(e.target.value)
          }}/>
          <input type="submit" value="create account" className='login-submit-btn'/>
        </form>

        <form action="" onSubmit={login} className='login-form'>
          <h2>welcome admin</h2>
          <input type="email" required onChange={(e)=>{
            setEmail(e.target.value)
          }} />
          <input type="password" required onChange={(e)=>{
            setPassword(e.target.value)
          }} />
          <input type="submit" value="login" className='login-submit-btn'/>
        </form>
    </section>
  )
}

export default Admin