import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
	// La redirección mobile se maneja con JavaScript del lado del cliente
	// basado en el ancho de pantalla, no en User-Agent
	return next();
};

