import { useQuery } from "@tanstack/react-query";

import { getBanners, getCollections, getShortcuts } from "./api";

import { ICollection, IShortcut, Ibanner } from "@/types/product";

export const useGetBanners = () => {
    return useQuery({
        queryKey: ['banners'],
        queryFn: getBanners,
        select: (data: Ibanner[]) => data
    });
}

export const useGetShortcuts = () => {
    return useQuery({
        queryKey: ['shortcuts'],
        queryFn: getShortcuts,
        select: (data: IShortcut[]) => data
    });
}

export const useGetCollections = () => {
    return useQuery({
        queryKey: ['collections'],
        queryFn: getCollections,
        select: (data: ICollection[]) => data
    });
}