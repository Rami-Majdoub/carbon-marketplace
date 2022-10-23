// https://www.leonelngande.com/automatically-add-a-protocol-to-a-url-string-in-angular/

export const GetLocation = (href: string) => {
    const parser = document.createElement("a");
    parser.href = href;
    return parser;
};

export const AutoAddProtocol = (href: string) => {
    const parser = GetLocation(href);

	console.log({ href, proto: parser.protocol});
	
    if (parser.protocol == 'https:') {
		return href
	}

	return 'https://' + href;
};