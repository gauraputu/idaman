import Navbar from '../components/Navbar'
import sopStyle from '../styles/sop.module.css'
const showdown  = require('showdown');
const fs  = require("fs");

const sop = (props) =>{
    return (
        <>
        <Navbar />
        <div className="flex flex-col items-center ">
            <div className="w-2/4 sopStyle">
                <div dangerouslySetInnerHTML={{ __html:props.body}}/> 
            </div>
        </div>
        </>
    )
}
export async function getStaticProps(){
    let content = fs.readFileSync('./_posts/sop.md','utf8');
    let converter = new showdown.Converter();
    let html = converter.makeHtml(content);

    return {
       props : {body:html}
    }
}
export default sop