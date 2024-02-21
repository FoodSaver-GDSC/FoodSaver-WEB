export const setItemToLocalStorage = (key: string, value: string): void => {
    if (typeof window !== 'undefined') {
        // 클라이언트 사이드에서만 실행되도록 체크
        localStorage.setItem(key, value);
    }
};

export const getItemFromLocalStorage = (key: string): string | null => {
    if (typeof window !== 'undefined') {
        // 클라이언트 사이드에서만 실행되도록 체크
        return localStorage.getItem(key);
    }
    return null;
};

export const removeItemFromLocalStorage = (key: string): void => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
    }
};