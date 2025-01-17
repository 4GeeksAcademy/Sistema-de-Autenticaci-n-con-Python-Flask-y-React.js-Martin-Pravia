const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			message: null,
			token: null,
			currentUser: null,
			isLogged: false,
			name: "",
			lastname: "",
			email: "",
			password: "",
			password2: "",
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			handleSubmit: async (e) => {
				e.preventDefault();
				try {
					const { email, password, name, lastname, password2 } = getStore()
					if (password !== password2) {
						alert("Las contraseñas no coinciden")
						return;
					}
					console.log({ email: email, password: password, name: name, lastname: lastname })
					const response = await fetch("https://friendly-happiness-g45g5gjqw5463w6pj-3001.app.github.dev/api/signup", {
						method: "POST",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify({ email: email, password: password, name: name, lastname: lastname })
					})
					if (response.ok) {

						const data = await response.json();
						const currentUser = {
							email: data.email,
							name: data.name,
							lastname: data.lastname,
						};

						console.log ("Datos usuario current user:", currentUser)
						sessionStorage.setItem("token", data.token);
						sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
						setStore({
							token: data.token,
							isLogged: false,
							email: "",
							name: "",
							lastname: "",
							password: "",
							password2: "",
							currentUser
						})
						alert("Usuario creado correctamente")



					}
				} catch (error) {
					console.error("Error al realizar el fetch: ", error)
				}

			},
			handleChange: e => {
				const { name, value } = e.target
				setStore({
					[name]: value
				})
			},
			handleSubmitLogin: async (e) => {
				e.preventDefault();
				try {
					const { email, password } = e.target
					const response = await fetch("https://friendly-happiness-g45g5gjqw5463w6pj-3001.app.github.dev/api/login", {
						method: "POST",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify({ email: email.value, password: password.value })
					})
					if (response.ok) {

						const data = await response.json();
						const currentUser = {
							email: email.value,
							name: data.name,
							lastname: data.lastname,
							
						};

						console.log("Token:", data.token);
						sessionStorage.setItem("token", data.token);
						sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
						setStore({
							token: data.token,
							isLogged: true,
							currentUser
						})
						email.value = ""
						password.value = ""

					}
				} catch (error) {
					console.error("Error al realizar el fetch: ", error)
				}

			},
			handleLogout: () => {
				sessionStorage.removeItem("token")
				sessionStorage.removeItem("currentUser")
				setStore({
					token: null,
					isLogged: false,
					currentUser: null,

				})
			}
		}
	};
};

export default getState;
