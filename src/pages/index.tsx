import { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';

import pokeApi from '@/api/pokeApi';
import { Layout } from '@/components/layouts';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { PokemonCard } from '@/components/pokemon';

interface Props {
    pokemons: SmallPokemon[];
}

// Aqui en nuestra página recibimos los props que se envían en la función
// Recibimos el listado de pokemons

const HomePage: NextPage<Props> = ({ pokemons }) => {
    return (
        <Layout title='Listado de Pokemons'>
            <Grid.Container gap={2} justify='flex-start'>
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </Grid.Container>
        </Layout>
    );
};

// Esta función solo se ejecuta del lado del servidor y solo es en el build time
// Solo se puede usar dentro de las pages
// Se pude puede leer file systems, bases de datos, peticiones http con secret tokens

export const getStaticProps: GetStaticProps = async (ctx) => {
    // Hacemos el fetch hacia la api para obtener los pokemons

    const resp = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const { data } = resp;

    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg

    // const pokemons: SmallPokemon[] = data.results.map((pokemon, indice) => {
    //     const newPokemon: SmallPokemon = { ...pokemon };

    //     newPokemon.id = indice + 1;
    //     newPokemon.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
    //         indice + 1
    //     }.svg`;

    //     return newPokemon;
    // });

    const pokemons: SmallPokemon[] = data.results.map((pokemon, indice) => ({
        ...pokemon,
        id: indice + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            indice + 1
        }.svg`,
    }));

    return {
        props: { pokemons },
    };
};

export default HomePage;
