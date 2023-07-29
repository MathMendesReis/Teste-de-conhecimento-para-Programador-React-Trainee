import { createSlice } from "@reduxjs/toolkit";

export interface Album {
  id: number;
  name: string;
  year: number;
  tracks: Track[];
}

export interface Track {
  id: number;
  number: number;
  title: string;
  duration: number;
}
interface AlbumArray extends Array<Album> {}


interface AlbumState {
  albumsData: AlbumArray;
  loading: boolean;
}

const initialState: AlbumState = {
  albumsData: [
    {
      "id": 1397,
      "name": "Rei do Gado",
      "year": 1961,
      "tracks": [
        {
          "id": 1599,
          "number": 1,
          "title": "Alma de Boêmio",
          "duration": 195
        },
        {
          "id": 1600,
          "number": 2,
          "title": "Borboleta de Asfalto",
          "duration": 180
        }
      ]
    }
  ],
  loading: false,
};

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    setAlbumsData(state, action) {
      state.albumsData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setInitialState(state) {
      state.albumsData = state.albumsData;

    }
  },
});

export const { setAlbumsData, setLoading, setInitialState } = albumsSlice.actions;

export default albumsSlice.reducer;
