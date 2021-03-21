export function getApiUrl(): string {
    const url = typeof window !== "undefined" ? window.location.toString() : "";
    if (url.indexOf(":4200") !== -1) { // is dev
        const apiPortDev = 3000;
        const match = (url as string).match(/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g);
        return `http://${match ? match[0] : "localhost"}:${apiPortDev}/api/`;
    }
    return "/api/";
}
