import { ChangeEvent, FormEvent, useState } from "react";
import "../styles/styles.css";



export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { name, email, password1, password2} = registerData;


  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
            setRegisterData(prev=>({
                ...prev,
                [event.target.name]: event.target.value,
            })); 
            console.log(registerData)
        };

    const onSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault(); 
    console.log(registerData);
    
    }

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={  onSubmit }>
        <input
          type="text"
          name='name'
          placeholder="Name"
          value={name}
          onChange={(ev)=>onChange(ev)}
        />
       <input
          type="email"
          name='email'
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
         <input
          type="password"
          name='password1'
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />
        <input
          type="password"
          name='password2'
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};


