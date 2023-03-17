


export const returnId = () => {
    let id
    if (typeof window !== "undefined") {
        return id = localStorage.getItem('userId')
    }
}