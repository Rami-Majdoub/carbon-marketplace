export const AutoAddProtocol = (href: string) => {    
    if (
        href.startsWith("https://")
        || href.startsWith("http://")
    ) return href;

    if (
        href.startsWith("www.")
    ) return "https://" + href;
    
    return 'https://www.' + href;
};