import { GetStaticProps, GetStaticPaths, NextPage } from 'next';

import pokeApi from '@/api/pokeApi';
import { Layout } from '@/components/layouts';
import { Pokemon } from '@/interfaces';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
    // Dentro del router tenemos varios parámetros importantes
    // router.query contiene los query params

    // const router = useRouter();
    // console.log(router.query);

    return (
        <Layout title={`Pokemon | ${pokemon.name}`}>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card
                        isHoverable
                        css={{
                            padding: '30px',
                        }}
                    >
                        <Card.Body>
                            <Card.Image
                                src={
                                    pokemon.sprites.other?.dream_world
                                        .front_default || '/no-image.png'
                                }
                                alt={pokemon.name}
                                width='100%'
                            ></Card.Image>
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header
                            css={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Text h1 transform='capitalize'>
                                {pokemon.name}
                            </Text>
                            <Button color='gradient' ghost>
                                Guardar en Favoritos
                            </Button>
                        </Card.Header>

                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container direction='row' display='flex' gap={0}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    );
};

// [id] corresponde al dymanic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    // Se crea un nuevo arreglo se 151 posiciones
    // Se recorreo el arreglo y se guarda por cada posición un string con el indice + 1

    const pokemons151: string[] = [...Array(151)].map(
        (value, index) => `${index + 1}`
    );

    return {
        // paths: [
        //     {
        //         params: "1"
        //     },
        // ],

        paths: pokemons151.map((id) => ({
            params: {
                id,
            },
        })),

        fallback: false,
    };
};

// Despues de que se ejecuta el getStaticPath se ejecuta esta función
// La información generado desde el getStaticPath la podemos acceder a traves del contexto

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as {
        id: string;
    };

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

    return {
        props: {
            pokemon: data,
        },
    };
};

export default PokemonPage;
