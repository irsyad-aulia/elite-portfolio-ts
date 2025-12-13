import { useQuery } from "@tanstack/react-query";

export interface UserAPI {
    id: number;
    name: string;
    email: string;
}

const fetchUsers = async (): Promise<UserAPI[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
        throw new Error ("Gagal mengambil data");
    }
    return response.json();
};

export const useUsers = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
        staleTime: 1000 * 60,
    });
};