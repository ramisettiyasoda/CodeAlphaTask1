import React,{ useState,useRef }from 'react';
import emailjs from '@emailjs/browser';
import Form3 from "./Form3";
import Form2 from "./Form2";
import Form1 from "./Form1";
function Form() {
    const form=useRef();
    const [page,setPage] = useState(0);
    const [formData,setFormData]=useState(
        {
        fname:"",
        lname:"",
        mailid:"",
        clgname:"",
        dob:"",
        country:"",
        addr:"",
        gradstatus:"",
        completestatus:"",
        major:"",
        reason:"",
        reason1:"",
        reasonch:"",
        txtch:"",
        reasonlack:"",
        txtlack:"",
        reasonadd:"",
        txtbtr:"",


        });
        console.log(formData);
    const handleSubmit=() =>{
        var tempParams={
        fname:formData.fname,
        lname:formData.lname,
        mailid:formData.mailid,
        clgname:formData.clgname,
        dob:formData.dob,
        country:formData.country,
        addr:formData.addr,
        gradstatus:formData.gradstatus,
        completestatus:formData.completestatus,
        major:formData.major,
        reason:formData.reason,
        reason1:formData.reason1,
        reasonch:formData.reasonch,
        txtch:formData.txtch,
        reasonlack:formData.reasonlack,
        txtlack:formData.txtlack,
        reasonadd:formData.reasonadd,
        txtbtr:formData.txtbtr,
            
        }
        if(emailjs.send('service_rqcwath','template_cq0cntq',tempParams,'4rxpUElcypJmEzNO-')){
        console.log('mailsent');
        }
        else{
            console.log("not");
        }
    }

    const PageDisplay=() =>{
        if(page===0){
            return <Form1 formData={formData} setFormData={setFormData}/>
        }
        else if(page===1){
            return <Form2 formData={formData} setFormData={setFormData}/>
        }
        else{
            return <Form3 formData={formData} setFormData={setFormData}/>
        }
    }
  return (
    <div>
    <div  > {PageDisplay()}
    <div className="container col-md-6">
        <div align="center" className="frm">
    <button className="btn btn-primary px-5 my-3"disabled={page===0} onClick={()=>{setPage((currPage) => currPage-1)}}>Prev</button>
    <button  className="btn btn-warning px-5"onClick={()=>{
        if(page===2){
            handleSubmit();
            alert("form submitted")
        }
        else{
            setPage((currPage) => currPage+1)
        }
        }}>{page==2 ?"submit":"next"}</button>
    </div>
    </div>
</div>
    </div> 

  )
}

export default Form
