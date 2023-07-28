import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./styles";
import { formatDuration } from "../../helpers/formatDuraton";

interface Track {
  id: number;
  number: number;
  title: string;
  duration: number;
}

interface Album {
  id: number;
  name: string;
  year: number;
  tracks: Track[];
}

export function CardAlbuns() {
  const [loading, setLoading] = useState<boolean>(true);
  const [albumsData, setAlbumsData] = useState<Album[]>([]);

  async function fetchAlbums() {
    setLoading(true);
    const config = {
      headers: {
        Authorization: "arthur.matheus.prado@gmail.com",
      },
    };
    try {
      const response = await api.get("/album", config);
      setAlbumsData(response.data.data); // Usamos response.data.data para obter o array de álbuns
    } catch (error) {
      console.error("Erro ao buscar os álbuns:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <Container>
      {loading ? (
        <div>Carregando...</div>
      ) : albumsData.length === 0 ? (
        <div>Nenhum álbum encontrado.</div>
      ) : (
        <>
          {albumsData.map((album) => (
            <li key={album.id}>
              <header>
                <h1>{album.name}</h1>
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
                    {album.tracks.map((track) => (
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
                    {album.tracks.map((track) => (
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
