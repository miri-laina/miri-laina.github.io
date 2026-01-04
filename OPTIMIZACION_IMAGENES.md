# Guía de Optimización de Imágenes

Este documento describe las herramientas y técnicas recomendadas para optimizar las imágenes de tu landing page.

## 🎯 Objetivo
Reducir el tamaño de las imágenes sin perder calidad visual para mejorar significativamente los tiempos de carga.

## 📊 Estado Actual
- **SVG más grandes**: Hasta 19MB (12.svg, 7.svg, 3.svg)
- **PNG más grandes**: Hasta 9MB (imágenes de interiorism)
- **Total estimado**: ~150MB+ en imágenes

## 🛠️ Herramientas Recomendadas

### 1. **Para SVG (Recomendado: SVGO)**
Los SVG son vectores pero pueden contener datos innecesarios.

#### Opción A: SVGO (Línea de comandos)
```bash
# Instalar SVGO globalmente
npm install -g svgo

# Optimizar un archivo
svgo public/images/bento/12.svg -o public/images/bento/12-optimized.svg

# Optimizar toda una carpeta
svgo -f public/images/bento -o public/images/bento-optimized
```

#### Opción B: SVGO Online
- **https://jakearchibald.github.io/svgomg/** (Recomendado)
- Arrastra y suelta tus SVG
- Ajusta la configuración en tiempo real
- Descarga el resultado optimizado

#### Opción C: ImageOptim (Mac)
- Aplicación de escritorio gratuita
- Optimiza SVG, PNG, JPG automáticamente
- https://imageoptim.com/

### 2. **Para PNG/JPG (Recomendado: Squoosh)**

#### Opción A: Squoosh (Web - Gratis)
- **https://squoosh.app/** (Recomendado - Google)
- Soporta WebP, AVIF, MozJPEG, OxiPNG
- Comparación lado a lado
- Control total sobre calidad y tamaño

**Configuración recomendada para PNG:**
- Formato: **WebP** o **AVIF** (mejor compresión)
- Calidad: 80-85
- Reducir tamaño: Según necesidad (mantener proporción)

#### Opción B: TinyPNG (Web)
- **https://tinypng.com/**
- Optimización automática
- Límite: 20 imágenes por vez (gratis)
- API disponible para automatización

#### Opción C: Sharp (Node.js - Ya instalado)
```bash
# Script de ejemplo para optimizar imágenes
node scripts/optimize-images.js
```

### 3. **Herramientas de Escritorio**

#### ImageOptim (Mac)
- Optimiza múltiples formatos
- Drag & drop
- Gratis y open source

#### FileOptimizer (Windows/Mac/Linux)
- Soporta muchos formatos
- Optimización por lotes
- https://nikkhokkho.sourceforge.io/static.php?page=FileOptimizer

#### XnConvert (Multiplataforma)
- Conversión y optimización
- Procesamiento por lotes
- https://www.xnview.com/en/xnconvert/

## 📋 Plan de Acción Recomendado

### Paso 1: Optimizar SVG (Prioridad Alta)
1. Ir a https://jakearchibald.github.io/svgomg/
2. Optimizar todos los SVG en `public/images/bento/`
3. Reemplazar los archivos originales
4. **Reducción esperada**: 50-80% del tamaño

### Paso 2: Convertir PNG a WebP (Prioridad Alta)
1. Ir a https://squoosh.app/
2. Convertir todas las PNG en `public/images/interiorism/` a WebP
3. Guardar como `.webp` manteniendo nombres
4. Actualizar referencias en código si es necesario
5. **Reducción esperada**: 70-90% del tamaño

### Paso 3: Optimizar PNG restantes
1. Usar TinyPNG o Squoosh
2. Optimizar PNG en `public/images/` (1.png - 6.png)
3. **Reducción esperada**: 30-50% del tamaño

## 🔧 Automatización (Opcional)

### Script Node.js con Sharp
```javascript
// scripts/optimize-images.js
import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

async function optimizeImages(dir) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const stats = await stat(filePath);
    
    if (stats.isFile() && /\.(png|jpg|jpeg)$/i.test(file)) {
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
      
      console.log(`Optimized: ${file}`);
    }
  }
}

optimizeImages('./public/images');
```

## 📈 Resultados Esperados

### Antes
- SVG: ~150MB total
- PNG: ~60MB total
- **Total: ~210MB**

### Después (estimado)
- SVG optimizados: ~30-50MB (70% reducción)
- PNG → WebP: ~6-12MB (80% reducción)
- **Total: ~40-60MB (70-80% reducción)**

## ✅ Checklist de Optimización

- [ ] Optimizar todos los SVG con SVGO
- [ ] Convertir PNG grandes a WebP
- [ ] Optimizar PNG restantes
- [ ] Actualizar referencias en código si cambias formatos
- [ ] Verificar que las imágenes se vean bien
- [ ] Probar tiempos de carga antes/después

## 🚀 Mejoras Adicionales Implementadas

1. ✅ **Lazy loading** en todas las imágenes
2. ✅ **decoding="async"** para mejor rendimiento
3. ✅ **fetchpriority** para imágenes críticas
4. ✅ **Optimización de fuentes** con preconnect y carga asíncrona
5. ✅ **Sharp instalado** para optimización en build time

## 📝 Notas

- **WebP** es compatible con ~95% de navegadores modernos
- **AVIF** tiene mejor compresión pero menor compatibilidad
- Considera usar `<picture>` con fallbacks para máxima compatibilidad
- Las imágenes optimizadas pueden reducir el tiempo de carga en 2-5 segundos

