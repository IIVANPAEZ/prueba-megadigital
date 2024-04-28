'use client'
import Photos from "@/components/Photos";
async function fetchPhotos(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
  const data = await res.json();
  return data;
}

async function PhotosPage({params}) {
  const photos = await fetchPhotos(params.albumId);
  console.log(photos);
  return (
    <div>
      <h1 style={{ textAlign: 'center' }} className="m-4">Fotos</h1>
      <Photos photos={photos}/>
    </div>
  );
}
export default PhotosPage;