import imge from "../assets/logo.png"
import imge2 from "../assets/np-logo-set.png"

function Footer() {
    return (
<footer className="footer items-center p-4">
  <div className="items-center grid-flow-col">
    <img src={imge} height="36" width="36" alt="logo" />
    <p> copyright © 2023 - বাংলাদেশ সমাজ কল্যাণ মন্ত্রণালয় , সার্বিক সহযোগিতা- </p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="/">
    <img src={imge2} alt="img2" />
    </a>
    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
  </div>
</footer> 
    )
}

export default Footer;