import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
	const { request, url } = context;
	
	// Detectar si es mobile basado en User-Agent
	const userAgent = request.headers.get('user-agent') || '';
	const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
	
	// Si es mobile y no está en la página principal, redirigir a /
	if (isMobile && url.pathname !== '/' && !url.pathname.startsWith('/_astro') && !url.pathname.startsWith('/favicon') && !url.pathname.startsWith('/logo') && !url.pathname.startsWith('/fonts') && !url.pathname.startsWith('/images') && !url.pathname.startsWith('/projects') && !url.pathname.startsWith('/icons') && !url.pathname.startsWith('/cv-') && !url.pathname.startsWith('/blog') && !url.pathname.startsWith('/rss.xml')) {
		return context.redirect('/', 302);
	}
	
	return next();
};

