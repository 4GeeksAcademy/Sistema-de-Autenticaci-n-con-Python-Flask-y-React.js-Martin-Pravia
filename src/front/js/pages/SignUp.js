import React from 'react'

const SignUp = () => {
  return (

    <form className="register-form d-flex flex-column bg-light align-items-center text-center mx-auto my-5">
      <div className="container text-center">
        <h1 className="h1">REGISTRO</h1>

        <div className="row mb-3 justify-content-center">
          <div className="col-2 text-end mt-2">
            <label className="register-label" htmlFor="name">Nombre <span className="asq">* </span></label>
          </div>
          <div className="col-3">
            <input
              type="text"
              id="name"
              name="name"
              className="bg-light register-input form-control"
              placeholder="Ingrese su nombre..."
              // value={store.name}
              // onChange={actions.handleChange}
            />
          </div>
        </div>

        <div className="row mb-3 justify-content-center">
          <div className="col-2 text-end">
            <label className="register-label" htmlFor="lastname">Apellido <span className="asq">* </span></label>
          </div>
          <div className="col-3">
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="bg-light register-input form-control"
              placeholder="Ingrese su apellido..."
              // value={store.lastname}
              // onChange={actions.handleChange}
            />
          </div>
        </div>

        <div className="row mb-3 justify-content-center">
          <div className="col-2 text-end">
            <label className="register-label" htmlFor="email">Email <span className="asq">* </span></label>
          </div>
          <div className="col-3">
            <input
              type="text"
              id="email"
              name="email"
              className="bg-light register-input form-control"
              placeholder="Ingrese su email..."
              // value={store.email}
              // onChange={actions.handleChange}
            />
          </div>
        </div>

        <div className="row mb-3 justify-content-center">
          <div className="col-2 text-end">
            <label className="register-label" htmlFor="password">Contraseña <span className="asq">* </span></label>
          </div>
          <div className="col-3">
            <input
              type="password"
              id="password"
              name="password"
              className="bg-light register-input form-control"
              placeholder="Ingrese su contraseña..."
              // value={store.password}
              // onChange={actions.handleChange}
            />
          </div>
        </div>

        <div className="row mb-3 justify-content-center">
          <div className="col-2 text-end">
            <label className="register-label" htmlFor="password2">Repetir Contraseña <span className="asq">* </span></label>
          </div>
          <div className="col-3">
            <input
              type="password"
              id="password2"
              name="password2"
              className="bg-light register-input form-control"
              placeholder="Repita su contraseña..."
              // value={store.password2}
              // onChange={actions.handleChange}
            />
          </div>
        </div>

        <button className="bg-dark w-25 rounded-4 p-2 mx-auto text-light fs-5 mt-3" type="submit">
          Register
        </button>
      </div>
    </form>
  )
}

export default SignUp