const BASE_URL = "http://localhost:8080";

export const getBuses = async (page = 0, size = 5) => {
    const response = await fetch(`${BASE_URL}/bus?page=${page}&size=${size}`);
    if (!response.ok) throw new Error("Error al obtener buses");
    return response.json();
};

export const getBusById = async (id) => {
    const response = await fetch(`${BASE_URL}/bus/${id}`);
    if (!response.ok) throw new Error("Bus no encontrado");
    return response.json();
};