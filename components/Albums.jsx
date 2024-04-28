'use client'
import { useRouter } from "next/navigation";

function Albums({albums}) {
   const router = useRouter()
   const verFotos = (albumId) => {
    router.push(`/albumes/photos/${albumId}`)
   }
  return (
    <ul className="list-group">
      {albums.map((album) => (
        <li key={album.id} 
        onClick={() => verFotos(album.id)}
        className="list-group-item d-flex justify-content-between align-items-center
            list-group-item-action"
        >
            
          <div>
            <h5>{album.title}</h5>
          </div>
          <button className="btn btn-info" >Ver Fotos</button>
        </li>
      ))}
    </ul>
  );
}
export default Albums;