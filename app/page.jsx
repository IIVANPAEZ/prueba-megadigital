'use client'
import Users from "@/components/Users";
import PosteosChart from "@/components/PosteosChart";


const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

async function IndexPage() {
  const users = await fetchUsers();
  console.log(users);
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Lista de usuarios</h1>
      <Users users={users}/>
      <h1 style={{textAlign:"center", margin:"10px"}}>Gráfica de posteos</h1>
      <PosteosChart users={users}/>
    </div>
  );
}
export default IndexPage;
