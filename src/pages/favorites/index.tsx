import { NextPage } from 'next';
import { Layout } from '@/components/layouts';
import { Container } from '@nextui-org/react';

const FavoritesPage: NextPage = () => {
    return (
        <Layout title='Pokemon | Favoritos'>
            <Container css={{
                display: "flex",
                flexDirection
            }}>

            </Container>
        </Layout>
    );
};

export default FavoritesPage;
