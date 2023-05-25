import image from "../assets/logo.png"
import {Link} from "react-router-dom"
function Home() {
    return (
    <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 mx-auto my-5 py-10 px-4">
        <div className="card mx-auto max-w-xs w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img height="60" width="60" src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">পিআরএল আবেদন</h2>
            <p>পিআরএল সম্পর্কে না জানলে বাংলাদেশ এর সকারি ওয়েবসাইট থেকে জেনে নিন।</p>
            <div className="card-actions w-full">
              <Link to="/apply_prl" className="btn w-full text-white btn-primary">পিআরএল এর জন্যে আবেদন</Link>
            </div>
          </div>
        </div>
        <div className="card mx-auto max-w-xs w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img height="60" width="60" src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">সাধারন আবেদন</h2>
            <p>আপনি ৩ বৎসরের শান্তি বিনোদন ছুটির জন্য আবেদন করতে পারবেন</p>
            <div className="card-actions w-full">
              <Link to="/apply_normal" className="btn w-full text-white btn-primary">আবেদন</Link>
            </div>
          </div>
        </div>
    </div>
    )
}

export default Home;