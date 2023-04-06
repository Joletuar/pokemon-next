import { NextPage } from "next";

import { useEffect, useState } from "react";

import { Layout } from "@/components/layouts";
import { NoFavorites } from "@/components/ui";
import { localFavorite } from "@/utils";
import { FavoritesPokemons } from "@/components/pokemon";

const FavoritesPage: NextPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(localFavorite.pokemons());
  }, []);

  return (
    <Layout title="Pokemon | Favoritos">
      {!favorites.length ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons pokemons={favorites} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
