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