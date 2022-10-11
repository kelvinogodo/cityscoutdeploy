import {useState} from 'react'
import Swal from 'sweetalert2'
import Head from 'next/head'

const Admin = () => {
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  
  const createAdmin = async ()=>{
    const adminData = {
      name:name,
      email:email,
      password:password
    }
    const request = await fetch(`${getBaseApiUrl()}/createAdmin`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
      Swal.fire(
        'congrats',
        'welcome boss! ',
        'success'
      )
      window.location.href= '/Dashboard' 
    }
    else{
      Swal.fire(
        'error',
        `${res}`,
        'error'
      )
    }
  }

  const login = async  ()=>{
      const loginData = {
        email:email,
        password:password
      }
      const req = await fetch(`${getBaseApiUrl()}/login`,
      {
        method:'POST',
        headers :{
          'Content-Type': 'application/json',
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
        Swal.fire(
          'congrats',
          'welcome boss! ',
          'success'
        )
        window.location.href = '/Dashboard'
      }
      else{
        window.location.href = '/Admin'
      }
  }
  return (
    <section className='login-form-container'>
      <Head>
        <title>
          real estate brokerage and development
        </title>
        <meta name="description" content="a property agency website, for properties around ebonyi state, Nigeria" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
        <form className="login-form" onSubmit={(e)=>{
          e.preventDefault()
          createAdmin()}}>
          <h2>welcome admin</h2>
          <input type="text" required onChange={(e)=>{
            setName(e.target.value)
          }} placeholder='enter your name'/>
          <input type="email" className="login-input" required onChange={(e)=>{
            setEmail(e.target.value)
          }} placeholder='enter your email'/>
          <input type="password" className="login-input" required onChange={(e)=>{
            setPassword(e.target.value)
          }} placeholder='enter your password'/>
          <input type="submit" value="create account" className='login-submit-btn'/>
        </form>

        <form  onSubmit={(e)=>{
          e.preventDefault()
          login()}} className='login-form'>
          <h2>welcome admin</h2>
          <input type="email" required onChange={(e)=>{
            setEmail(e.target.value)
          }} placeholder='enter your email'/>
          <input type="password" required onChange={(e)=>{
            setPassword(e.target.value)
          }} placeholder='enter your password'/>
          <input type="submit" value="login" className='login-submit-btn'/>
        </form>
    </section>
  )
}
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
export default Admin