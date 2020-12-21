import React, {useState} from "react";

const Login = () => {
    const [email,setEmail] = useState({email:''});
    const [password,setPassword] = useState({password:''});

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('clicked');

        if(email == 'test@test.com' && password === 'test' ){
            localStorage.setItem('email', email);
            window.location = '/todos'
        } else {
            alert('wrong details');
        }
    }

  return (
    <div className="container">
      <div className="row justify-content-md-center mt-5">
        <form onSubmit={handleLogin} >
          <div class="form-group">
            <label htmlFor="exampleInputEmail1">Adresse e-mail :</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label htmlFor="exampleInputPassword1">Mot de passe :</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Soumettre
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
