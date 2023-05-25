import {useQuery} from "react-query";

function Dashboard() {
    
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
    
    const {data:applications=[],isLoading} = useQuery("application",async()=>{
        const res = await fetch(process.env.REACT_APP_SERVER_API+"application",{
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
    <h1>কোনো তথ্য পাওয়া যায়নি</h1>
    :<>
            <h1 className="text-3xl my-4">আমার আবেদন গুলো</h1>
    <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>নাম</th>
        <th>কর্মস্থল</th>
        <th>ইমেইল</th>
        <th>ফোন</th>
        <th>ধরন</th>
        <th>{
            applications[0].isPrl?"জন্ম দিন":"শেষ ছুটি"
        }</th>
        <th>
        {
            applications[0].isPrl?"পিআরএল গমনের তারিখ":"পরবর্তি ছুটি"
        }
        </th>
        <th>status</th>
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
      </tr>)}
    </tbody>
  </table>
</div>
</>}</div>
    }</>)
}

export default Dashboard;