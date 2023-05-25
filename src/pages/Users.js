import {useQuery} from "react-query";
import img from "../assets/icons/user.png"
function Users() {
    
    const {data:users=[],isLoading,refetch} = useQuery("users",async()=>{
        const res = await fetch(process.env.REACT_APP_SERVER_API+"users",{
            headers:{
                authorization:"Bearer "+localStorage.getItem("access_token")
            }
        });
        const data = await res.json()
        return data;
    })
    
    
    return (
        <>
        {
        isLoading?
        <progress className="progress progress-info w-full mt-10"></progress>
        :
        <div className="px-2 py-2">
            <h1 className="text-3xl my-4">Users Management</h1>
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
        
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Admin</th>
                    <th>Name</th>
                    <th>phone</th>
                    <th>uid</th>
                  </tr>
                </thead>
                <tbody>
            
                  
                  {users?.map((user,idx)=>{return (
                  <tr key={idx}>
                    <td>{idx+1}</td>
                    <th>
                        <input type="checkbox" className="toggle toggle-info toggle-sm" checked={user?.role==="admin"} onChange={(e)=>{
                            fetch(process.env.REACT_APP_SERVER_API+`changerole/${user?.email}/${user?.role==="admin"?"user":"admin"}`,{
                                headers:{
                authorization:"Bearer "+localStorage.getItem("access_token")
            }
                            })
                            .then(res=>res.json())
                            .then(data=>{refetch()})
                        }}/>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={user?.photo||img} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user?.name}</div>
                          <div className="text-sm opacity-50">{user?.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {user?.phone}
                    </td>
                    <td>{user?._id?.$oid}</td>
                  </tr>)}
                  )}
                </tbody>
              </table>
            </div>
        </div>
    }
    </>
    )
}

export default Users;