PokeApp

Añadir 3 rutas:
 - "/": Buscador + Lista
 - "new": Formulario para añadir pokemon nuevo
 - "/pokemon/:id": vista detalle del poke

ESQUEMA
    App
        Header
        Main
            Home --> /
                Search --> Input + Botón de búsqueda
                Card --> Dibujar datos del fetch con el poke
                PokemonList --> Dibuja lista con todas las Card que haya buscado hasta ese momento (las guardadas en el State) --> Carrusel
            Nuevo --> /new
            Vista detalle --> /pokemon/:id
        Footer

COSAS POR HACER:
1. Solo me lleva a detalles del pokemon ultimo pokemon buscado, no puedo volver a los anteriores de la lista
2. Arreglar que no se vean los segundos tipos, habilidades... SOLUCIÓN**** En la clave con la segunda habilidad o lo que sea que haya después un || para que me pinte lo primero y si no lo encuentra lo que le diga después ("", otro valor, o lo que toque)
3. Arreglar las descripciones, pueden salir de cualquier idioma. Algo parecido al 2
4. Dar algo más de estilos