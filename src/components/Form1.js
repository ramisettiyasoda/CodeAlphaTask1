import react from "react";
import { NavLink } from "react-router-dom";
function Form1({formData,setFormData }){

    return(
        <div >
            
            <div className=" container col-md-6">
            <h3 >Form1/3</h3>
            <div className="frm">
            <form >
                
                <span className="input-group ">First Name:
                <input type='text'name="fname" value={formData.fname} onChange={ (event)=>setFormData({...formData,fname:event.target.value})}className="form-control" placeholder="enter your First name:" required/></span><br/>
                <span className="input-group ">Last Name:
                <input type='text' name="lname" value={formData.lname} onChange={ (event)=>setFormData({...formData,lname:event.target.value})}className="form-control" placeholder="enter your Last name:" required /></span><br/>
                <span className="input-group ">Mail Id:
                <input type='mail' name="mailid" value={formData.mailid} onChange={ (event)=>setFormData({...formData,mailid:event.target.value})}className="form-control" placeholder="enter your emailid:"required /></span><br/>
                <span className="input-group">College:
                <input type='text' name="clgname" value={formData.clgname} onChange={ (event)=>setFormData({...formData,clgname:event.target.value})}className="form-control" placeholder="enter your College name:" required/>
                <select name="country" value={formData.country} onChange={ (event)=>setFormData({...formData,country:event.target.value})} required><option>--select--</option><option vlaue="India">India</option> <option value="others">Others</option></select></span><br/>
                <span className="input-group">Date of Birth:     
                <input type='date' name="dob" value={formData.dob} onChange={ (event)=>setFormData({...formData,dob:event.target.value})} className="form-control"  required/></span><br/>
                <label ClassName="form-label">Address of Residence:</label>
                <select className=" mx-5 px-5" required><option>--Country--</option><option>India </option><option>Others</option></select>
                <select className=" px-3"><option>--State--</option><option>Andhra Pradesh</option><option>Arunachal Pradesh</option><option>Assam</option></select><br/>
                <br/><textarea cols="55" rows="5" name="addr" value={formData.addr} onChange={ (event)=>setFormData({...formData,addr:event.target.value})} required></textarea>
                

            </form>
            </div>
        </div>
        </div>
    );
    
}
export default Form1;
