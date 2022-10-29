export const checkResponse = (res: Response) => !res.ok ? Promise.reject(res) : res.json();
