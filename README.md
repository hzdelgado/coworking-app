# Proyecto: Sistema de Reservaciones de Espacios de Coworking

Descripción: Una aplicación web para reservar espacios de coworking o salas de reuniones, pueden verificar disponibilidad en tiempo real y realizar reservas. Incluye un buscador de reservas activas.

## Características

- **Gestión de espacios**: Listar y buscar espacios disponibles según filtros.
- **Gestión de reservaciones**: Crear y consultar reservaciones con validación de horarios.
- **NgRx**: Para manejar el estado global de la aplicación.
- **Angular Material**: Para la interfaz de usuario con componentes predefinidos.
- **ngx-translate**: Para gestionar la internacionalización (i18n)..

## Requisitos
Antes de iniciar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 16+)
- [Yarn](https://yarnpkg.com/) o npm

## Estructura

````src/
└── app/
    ├── core/                # Servicios globales
    ├── shared/              # Componentes y módulos compartidos
    ├── features/            # Módulos funcionales
    │   ├── reservations/    # Gestión de reservas
    │   └── spaces/          # Gestión de espacios
    ├── store/               # Estado global con NgRx
    └── app.config.ts        # Configuración del standalone
````
## Instalación

1. **Clona este repositorio**:

   ```bash
   git clone https://github.com/hzdelgado/coworking-app.git
   cd coworking-app
   ```
2. **Configurar variables de entorno**:

   ```env
   PORT=3000
   ```
3. **Instalar dependencias**:

   ```bash
   npm install
   ```
## Despliegue
#### Modo Desarrollo
```env
npm run start
```
#### Modo Producción
```bash
npm run start
npm run build
```
La API estará disponible en `http://localhost:3000`.
## Comandos Útiles
#### Limpiar el Proyecto
Elimina la carpeta `dist/` y `node_modules` para empezar desde cero:

```bash
npm run clean
```
## Configuración del Proyecto
- `src/app/`: Contiene todo el código fuente.
- `src/app/store/`: Lógica de estado con NgRx.
- `src/assets/i18n/`: Archivos de traducción.
- `src/environments/`: Configuraciones para diferentes entornos.
