import {  useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setAlbumsData } from "../../../slices/albunsSlice";

export function Form() {
  const albumsData = useAppSelector((state) => state.albums.albumsData);
  const dispatch = useAppDispatch()

  const [form, setForm] = useState({
    search: '',
  });

  const handleSearch = (form: any) => {
    if(form.value.search) {}
    const filteredAlbums = albumsData.filter((album)=>album.name === form.search);
    dispatch(setAlbumsData(filteredAlbums));
    setForm({search:''});
  };

  return(
    <label htmlFor="">
        <span>Digite uma palavra</span>
      <div>
      <input
          value={form.search}
          onChange={e => {
            setForm({
              ...form,
              search: e.target.value
            });
          }}
        />
        <button  onClick={handleSearch} >Procurar</button>
      </div>
  </label>
  )
}
