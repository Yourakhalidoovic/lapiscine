// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Assurez-vous que l'URL correspond à votre serveur

// Fonction pour récupérer tous les athlètes
export const getAthletes = async () => {
    try {
        const response = await axios.get(`${API_URL}/athletes`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des athlètes:', error);
        throw error;
    }
};

// Fonction pour ajouter un athlète
export const addAthlete = async (athlete) => {
    try {
        const response = await axios.post(`${API_URL}/athletes`, athlete);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout d\'un athlète:', error);
        throw error;
    }
};

// Fonction pour récupérer toutes les performances
export const getPerformances = async () => {
    try {
        const response = await axios.get(`${API_URL}/performances`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des performances:', error);
        throw error;
    }
};

// Fonction pour ajouter une performance
export const addPerformance = async (performance) => {
    try {
        const response = await axios.post(`${API_URL}/performances`, performance);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout d\'une performance:', error);
        throw error;
    }
};