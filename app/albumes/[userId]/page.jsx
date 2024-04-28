'use client'
import Albums from "@/components/Albums";
async function fetchAlbums(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
  const data = await res.json();
  return data;
}

async function AlbumsPage({params}) {
  const albums = await fetchAlbums(params.userId);
  console.log(albums);
  return (
    <div>
      <h1 style={{ textAlign: 'center' }} className="m-4">Albumes</h1>
      <Albums albums={albums}/>
    </div>
  );
}
export default AlbumsPage;
