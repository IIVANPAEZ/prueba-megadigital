"use client";
import { useRouter } from "next/navigation";
import * as XLSX from "xlsx";

function Users({ users }) {
  const router = useRouter();

  const verAlbums = (userId) => {
    router.push(`albumes/${userId}`);
  };

  const exportExcel = async (users, title, worksheetname) => {
    try {
      // setLoading(true);
      if (users && Array.isArray(users)) {
        const data = users.map((user) => {
          const userData = {
            id: user.id,
            nombre: user.name,
            usuario: user.username,
            correo: user.email,
            direccion: user.address,
            sitio: user.website,
            compañia: user.company.name
          };
          return userData;
        });
        console.log(data)
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils?.json_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, worksheet, worksheetname);

        XLSX.writeFile(workbook, `${title}.xlsx`);
        console.log(`Exported data to ${title}.xlsx`);
      } else {

        console.log("#==================Export Error")
      }
    } catch (error) {
      console.log("#==================Export Error", error.message);

    }
  };

  return (
    <div>
      <button onClick={() => exportExcel(users, 'Usuarios', 'Listado de usuarios')} className="m-4 btn btn-info">
        Exportar a Excel
      </button>
      {/* <button className="m-4 btn btn-info">Ver Graficas</button> */}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => verAlbums(user.id)}
            className="list-group-item d-flex justify-content-between align-items-center
            list-group-item-action"
          >
            <div>
              <h5 className="justify-content-center aling-item-center">
                <strong>Nombre :</strong> {user.name}
              </h5>
              <p>
                <strong>Email :</strong> {user.email}
              </p>
              <p>
                <strong>Teléfono :</strong> {user.phone}
              </p>
            </div>
            <button className="btn btn-info"> Ver álbumes</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
