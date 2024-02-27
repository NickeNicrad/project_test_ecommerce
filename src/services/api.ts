import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "/api"
});

export const getBanners = async () => (await axiosInstance.get("/banners")).data;

export const getShortcuts = async () => (await axiosInstance.get("/shortcuts")).data;

export const getCollections = async () => (await axiosInstance.get("/collections")).data;