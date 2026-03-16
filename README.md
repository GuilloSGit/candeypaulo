# Cande y Paulo - Official Website

Sitio web oficial del dúo musical Cande y Paulo, construido con HTML5, CSS3 y JavaScript vanilla.

## 🎵 Sobre el Proyecto

Este es el sitio web oficial del dúo musical argentino Cande y Paulo. El sitio presenta su música, videos, y permite a los fans contactarse con ellos. Incluye soporte para múltiples idiomas (español, inglés, portugués) y una experiencia de usuario interactiva con efectos visuales modernos.

## ✨ Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos móviles y de escritorio
- **Multiidioma**: Soporte para español, inglés y portugués
- **Música Integrada**: Enlaces directos a plataformas de streaming (Spotify, Apple Music, etc.)
- **Galería de Videos**: Reproductor de videos integrado de YouTube
- **Formulario de Contacto**: Sistema funcional con EmailJS
- **Efectos Visuales**: Cursor con efectos de brillo y animaciones suaves
- **Navegación Intuitiva**: Menú overlay moderno con transiciones fluidas
- **SEO Optimizado**: Meta tags completas y datos estructurados

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesibilidad
- **CSS3**: Diseño moderno con animaciones y transiciones
- **JavaScript Vanilla**: Funcionalidad interactiva sin dependencias
- **EmailJS**: Gestión de formularios de contacto
- **YouTube API**: Integración de videos

## 📁 Estructura del Proyecto

```
candeypaulo/
├── index.html          # Página principal
├── styles.css          # Hoja de estilos principal
├── script.js           # Lógica JavaScript
├── assets/             # Recursos estáticos
│   ├── icons/          # Iconos y favicons
│   └── images/         # Imágenes del sitio
├── videos/             # Páginas individuales de videos
├── es/                 # Versión en español
├── contacto/           # Página de contacto
└── README.md           # Este archivo
```

## 🚀 Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/candeypaulo.git
   cd candeypaulo
   ```

2. **Abrir el sitio**:
   - Para desarrollo local: Abre `index.html` en tu navegador
   - Para producción: Despliega los archivos en tu servidor web

3. **Configurar EmailJS** (opcional):
   - Reemplaza las credenciales de EmailJS en `script.js` línea 538
   - Actualiza los IDs de servicio y plantilla en la línea 569

## 🎨 Personalización

### Colores y Tema
Los colores principales están definidos en `styles.css`:
- `--gold`: #d4af37 (color dorado principal)
- `--white`: #ffffff (blanco)
- `--black`: #000000 (negro)

### Contenido
- **Música**: Actualiza los enlaces en la sección `.music-grid`
- **Videos**: Modifica el array `videos` en `script.js` línea 9
- **Redes Sociales**: Actualiza los enlaces en el `.social-sidebar`

## 🌐 Navegación

El sitio utiliza un sistema de navegación por secciones:
- **Home**: Página principal con información del dúo
- **Music**: Discografía y enlaces a streaming
- **Videos**: Galería de videos de YouTube
- **Contact**: Formulario de contacto

## 📱 Compatibilidad

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ iOS Safari (iOS 12+)
- ✅ Chrome Mobile (Android 8+)

## 🔧 Funcionalidades Principales

### Sistema de Idiomas
El sitio detecta automáticamente el idioma del navegador y permite cambiar entre:
- Español (predeterminado para América Latina)
- Inglés
- Portugués

### Efectos Interactivos
- **Sparkle Cursor**: Efecto de brillo que sigue el cursor
- **Parallax**: Efecto de desplazamiento en el título principal
- **Hover Effects**: Animaciones en tarjetas de música y videos
- **Smooth Scrolling**: Navegación suave entre secciones

### Reproductor de Videos
Sistema modal para reproducción de videos de YouTube con:
- Controles de teclado (ESC para cerrar)
- Manejo de errores
- Diseño responsivo

## 📧 Contacto

Para consultas sobre el sitio web:
- **Desarrollador**: Guillermo Andrada
- **Email**: guillermoandrada@gmail.com
- **Web**: https://ga-software.dev

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:
1. Fork del proyecto
2. Crear una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de los cambios (`git commit -m 'Agregando nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🎶 Sobre Cande y Paulo

Cande y Paulo es un dúo musical argentino conocido por su álbum debut y sus cautivadoras presentaciones en vivo. Su música combina elementos del pop latino con influencias folclóricas, creando un sonido único que ha resonado con audiencias en toda América Latina.

**Redes Sociales Oficiales**:
- [Instagram](https://www.instagram.com/candeypaulo/)
- [YouTube](https://www.youtube.com/user/TheMsChazz)
- [Spotify](https://open.spotify.com/artist/305J40TcfZv1ntw9RI6dc1)
- [Apple Music](https://music.apple.com/gb/artist/cande-y-paulo/1523944385)
- [TikTok](https://www.tiktok.com/@candeypaulo)
- [Facebook](https://www.facebook.com/CandeyPaulo)
- [Twitter](https://twitter.com/candeypaulo)

---

**Desarrollado con ❤️ por [Guillermo Andrada](https://ga-software.dev)**