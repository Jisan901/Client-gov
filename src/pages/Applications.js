import {useParams} from "react-router-dom";
import {useQuery} from "react-query";

function Applications() {
    const {status} = useParams();
    const parseDate=(date,retYear)=>{
        const myDate=date.split("-")
        const newDate = new Date(parseInt(myDate[0])+retYear, parseInt(myDate[1])-1, myDate[2]).toISOString().split('T')[0]
        return newDate
    }
    
    const getNext=(application)=>{
        if (!application.isPrl) {
            return 3
        }
        else{
            return application.retYear
        }
    }
    
    const {data:applications=[],isLoading,refetch} = useQuery(["applications",status],async()=>{
        const res = await fetch(process.env.REACT_APP_SERVER_API+"applications/"+status,{
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
    <div className="px-2 py-2">{
        
    applications.length < 1?
    <h1>No applications available</h1>
    :    <>
            <h1 className="text-3xl my-4">{status} Applications Management</h1>
    <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Workplace</th>
        <th>email</th>
        <th>Phone</th>
        <th>Type</th>
        <th>{
            applications[0].isPrl?"Birthday":"Last vacation"
        }</th>
        <th>
        {
            applications[0].isPrl?"Prl Date":"Next vacation"
        }
        </th>
        <th>Status</th>
        <th>Reject</th>
        <th>Accept</th>
      </tr>
    </thead>
    <tbody>
    {applications.map((application,idx)=><tr key={idx}>
        <th>{idx+1}</th>
        <td>{application.user.name}</td>
        <td>{application.user.workplace}</td>
        <td>{application.user.email}</td>
        <td>{application.user.phone}</td>
        <td>{application.user.isPrl}</td>
        <td>{
        application.isPrl?application.user.birthday:application.last_vacation
        }
        </td>
        <td>{parseDate(application.isPrl?application.user.birthday:application.last_vacation,getNext(application))}</td>
        <td><span className="badge badge-success">{application.status}</span></td>
        
        <td><button onClick={()=>{
            fetch(process.env.REACT_APP_SERVER_API+'application/'+application._id.$oid+'/rejected',{
                headers:{
                authorization:"Bearer "+localStorage.getItem("access_token")
            }
            })
            .then(res=>res.json())
            .then(data=>{console.log(data);refetch()})
        }} className="btn btn-error text-white btn-sm">reject</button></td>
        <td><button onClick={()=>{
            fetch(process.env.REACT_APP_SERVER_API+'application/'+application._id.$oid+'/successful',{
                headers:{
                authorization:"Bearer "+localStorage.getItem("access_token")
            }
            })
            .then(res=>res.json())
            .then(data=>{console.log(data);refetch()})
        }} className="btn btn-success text-white btn-sm">approve</button></td>
        
      </tr>)}
    </tbody>
  </table>
</div>
</>}</div>
    }</>)
}

export default Applications;