export const checkResponse = (res: Response) => res.ok ? res.json() : Promise.reject(res);
