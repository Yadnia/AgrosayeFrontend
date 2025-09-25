import axios from "axios";

// Cambia esto por la URL de tu backend
const API_URL = "http://localhost:3000/api/auth"; 

// Función para hacer login
export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    return response.data; // devuelve lo que manda el backend, por ejemplo token y usuario
  } catch (error: any) {
    if (error.response) {
      // Error que devuelve el backend
      throw new Error(error.response.data.message || "Error de login");
    } else {
      // Error de conexión
      throw new Error("No se pudo conectar con el servidor");
    }
  }
};
