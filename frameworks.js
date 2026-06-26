// ============================================================
// Enzo Ferrari 
// Descripción: Base de datos local que almacena la información
//              de todos los frameworks mostrados en el catálogo.
//              Es consumido por catalogControl.js para generar
//              las tarjetas y aplicar los filtros.
// ============================================================

// Se declara el arreglo como propiedad global de 'window'
// para que sea accesible desde cualquier otro script del proyecto.
window.FRAMEWORKS_DATA = [

    // ------ Framework 1: React ------
    {
        id: 'react',              // Identificador único del framework
        title: 'React',           // Nombre que se muestra en la tarjeta
        description: 'Biblioteca para construir interfaces de usuario basada en componentes.', // Descripción breve
        type: 'UI',               // Categoría/tipo (usado para el filtro de tipo)
        popularity: 'Baja',       // Nivel de popularidad (usado para el filtro de popularidad)
        license: 'MIT',           // Tipo de licencia (usado para el filtro de licencia)
        image: '../assets/img/react.png' // Ruta relativa a la imagen/logo del framework
    },

    // ------ Framework 2: Vue ------
    {
        id: 'vue',
        title: 'Vue',
        description: 'Framework progresivo para crear interfaces interactivas.',
        type: 'UI',
        popularity: 'Alta',
        license: 'MIT',
        image: '../assets/img/vue.png'
    },

    // ------ Framework 3: Angular ------
    {
        id: 'angular',
        title: 'Angular',
        description: 'Framework estructurado para aplicaciones a gran escala.',
        type: 'UI',
        popularity: 'Alta',
        license: 'MIT',
        image: '../assets/img/angular.png'
    },

    // ------ Framework 4: Svelte ------
    {
        id: 'svelte',
        title: 'Svelte',
        description: 'Compilador que convierte componentes en código eficiente.',
        type: 'Compilador',       // Tipo distinto: es un compilador, no un framework tradicional
        popularity: 'Media',
        license: 'MIT',
        image: '../assets/img/svelte.png'
    },

    // ------ Framework 5: Ember ------
    {
        id: 'ember',
        title: 'Ember',
        description: 'Convención sobre configuración para aplicaciones ambiciosas.',
        type: 'Framework',
        popularity: 'Baja',       // Popularidad baja en comparación con los demás
        license: 'MIT',
        image: '../assets/img/ember.png'
    },

    // ------ Framework 6: Preact ------
    {
        id: 'preact',
        title: 'Preact',
        description: 'Alternativa ligera a React con la misma API.',
        type: 'UI',
        popularity: 'Media',
        license: 'MIT',
        image: '../assets/img/preact.png'
    },

    // ------ Framework 7: Next.js ------
    {
        id: 'nextjs',
        title: 'Next.js',
        description: 'Framework de React para aplicaciones full-stack con SSR/SSG.',
        type: 'Framework',
        popularity: 'Alta',
        license: 'MIT',
        image: '../assets/img/nextjs.png'
    },

    // ------ Framework 8: Nuxt.js ------
    {
        id: 'nuxt',
        title: 'Nuxt.js',
        description: 'Framework de Vue para aplicaciones full-stack.',
        type: 'Framework',
        popularity: 'Alta',
        license: 'MIT',
        image: '../assets/img/nuxt.png'
    },

    // ------ Framework 9: Astro ------
    {
        id: 'astro',
        title: 'Astro',
        description: 'Framework moderno para sitios web rápidos y optimizados.',
        type: 'Framework',
        popularity: 'Media',
        license: 'MIT',
        image: '../assets/img/astro.png'
    }

]; // Fin del arreglo FRAMEWORKS_DATA
