'use client'
import Image from "next/image";
function Photos({photos}) {
  return (
    <div className="container">
    <div className="row">
      {photos.map((photo) => (
        <div key={photo.id} className="col-md-4 mb-3">
          <div className="text-center">
            <Image src={photo.url} width={300} height={300} alt={photo.title} className="mx-auto" />
            <h5 className="mt-3">{photo.title}</h5>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
export default Photos;