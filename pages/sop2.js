import Navbar from '../components/Navbar'
const showdown  = require('showdown');

const sop2 = () =>{
 let   converter = new showdown.Converter(),
    text      = '# hello, markdown!',
    html      = converter.makeHtml(text);
    return (
        <>
        <Navbar />
        <div dangerouslySetInnerHTML={{ __html:html}}/> 
        </>
    )
}
export default sop2