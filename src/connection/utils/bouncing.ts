export const bouncing = (() => {
    let timer: any = null;
    return (callback: any, delay: number) => {
        clearTimeout(timer);
        timer = setTimeout(callback, delay)
    }
})();