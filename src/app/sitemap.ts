export default async function sitemap() {
    const staticRoutes = [""];
    const routes = staticRoutes.map((route:any) => ({
        url: `https://www.tebfarda.com${route}`,
        lastModified: new Date().toString(),
    }));
    return [...routes]
}