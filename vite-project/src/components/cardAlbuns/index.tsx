import { useEffect } from "react";
import api from "../../services/api";
import { Container } from "./styles";
import { formatDuration } from "../../helpers/formatDuraton";
import { key } from "../../services/key";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
// @ts-ignore
import { Album, Track, setAlbumsData, setLoading } from "../../slices/albunsSlice";
import { Head } from "../head";

export function CardAlbuns() {


  const albumsData = useAppSelector((state) => state.albums.albumsData);
  const loading = useAppSelector((state) => state.albums.loading);
  const dispatch = useAppDispatch();

  // @ts-ignore
  async function fetchAlbums() {
    dispatch(setLoading(true));
    const config = {
      headers: {
        Authorization: key,
      },
    };
    try {
      const response = await api.get("/album", config);
      dispatch(setAlbumsData(response));
    } catch (error) {
      console.error("Erro ao buscar os álbuns:", error);
      dispatch(setLoading(false));

    } finally {
      dispatch(setLoading(false));
    }
  }

  useEffect(() => {
    // fetchAlbums();
  }, []);

  return (
    <Container>
      {loading ? (
        <div>Carregando...</div>
      ) : albumsData.length === 0 ? (
        <div className="notFound"><span>Nenhum álbum encontrado.</span></div>
      ) : (
        <>
          {albumsData.map((album) => (
            <li key={album.id}>
              <header>
                <h1>{album.name}</h1>
                <Head title={album.name}/>
                <p>Ano: {album.year}</p>
              </header>
              <section>
                <table>
                  <thead>
                    <tr>
                      <th>N°</th>
                      <th>Faixa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {album?.tracks?.map((track) => (
                      <tr key={track.id}>
                         <td>{track.number}</td>
                        <td>{track.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table>
                  <thead>
                    <tr>
                      <th>Duração</th>
                    </tr>
                  </thead>
                  <tbody>
                    {album?.tracks?.map((track) => (
                      <tr key={track.id}>
                        <td>{formatDuration(track.duration)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </li>
          ))}
        </>
      )}
    </Container>
  );
}
