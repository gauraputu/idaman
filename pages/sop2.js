import Navbar from '../components/Navbar'
const showdown  = require('showdown');
const fs  = require("fs");
// const postDirectory = join(process.cwd(),'_posts')
const sop2 = (props) =>{
    return (
        <>
        <Navbar />
        <div dangerouslySetInnerHTML={{ __html:props.body}}/> 
        </>
    )
}
export async function getStaticProps(){
    let content = fs.readFileSync('./_posts/sop.md','utf8');
    let converter = new showdown.Converter();
    let html = converter.makeHtml(content);

    return {
       props : {text:'#  this is markdown',body:html}
    }
}
export default sop2