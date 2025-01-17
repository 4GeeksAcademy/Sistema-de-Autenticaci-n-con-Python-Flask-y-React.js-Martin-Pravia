import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Private = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Bienvenido</h1>
      <span>{store.currentUser?.name}</span>
      <span> {store.currentUser?.lastname}</span>
      <div className="d-flex flex-column bg-light aling-items-center text-center mx-auto my-5 p-5">
        <button
          className="bg-dark w-25 rounded-4 p-1 mx-auto text-light fs-5 mt-3"
          type="submit"
          onClick={() => {
            actions.handleLogout()
          }}
        >
          {" "}
          Cerrar sesión{" "}
        </button>
      </div>
    </div>
  );
};
