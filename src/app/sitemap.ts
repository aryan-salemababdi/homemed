export default async function sitemap() {
    const staticRoutes = [""];
    const routes = staticRoutes.map((route:any) => ({
        url: `https://www.khanebetoni.com${route}`,
        lastModified: new Date().toString(),
    }));
    return [...routes]
}