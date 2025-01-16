import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='container'>
            <form className="register-form d-flex flex-column bg-light aling-items-center text-center mx-auto my-5 p-5" action="#" method="GET" //onSubmit={actions.handleSubmit}
            >
                <div className='row mb-3'>
                    <h1 className="h1"> ACCEDER </h1>
                </div>
                <div className='row mb-3'>
                    <div className='col-2 offset-3'>
                        <label className="form-label" htmlFor="user_name"> Email <span className='text-danger'> * </span></label>
                    </div>
                    <div className='col-3'>
                        <input type="text" id="email" className="form-control bg-light" placeholder="Ingrese su email..." />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-2 offset-3'>
                        <label className="form-label" htmlFor="user_name"> Contraseña <span className='text-danger'> * </span></label>
                    </div>
                    <div className='col-3'>
                        <input type="text" id="email" className="form-control bg-light" placeholder="Ingrese su contraseña..." />
                    </div>
                </div>
                <button className="bg-dark w-25 rounded-4 p-1 mx-auto text-light fs-5 mt-3" type="submit"> Ingresar </button>
                <Link className="bg-dark w-25 rounded-4 p-1 mx-auto text-light fs-5 mt-3" to={'/signup'} > Crear cuenta </Link>
            </form>
        </div>
    )
}

export default Login