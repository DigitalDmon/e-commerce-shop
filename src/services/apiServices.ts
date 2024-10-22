// apiService.ts
export const apiUser = async () => {
    const response = await fetch('https://fakestoreapi.com/users');
    if (!response.ok) throw new Error('Error fetching API User');
    return response.json();
};
