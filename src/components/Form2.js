import react from "react";
import { NavLink } from "react-router-dom";
function Form2({formData,setFormData }){

    return(
        <div className=" container col-md-6 ">
            <h3 >Page 2/3</h3>
            <div className="frm">
            
            <label className="form-label" ><b>Are you an ?</b></label><br/>
            <select value={formData.gradstatus} onChange={ (event)=>setFormData({...formData,gradstatus:event.target.value})} className="px-4 py-2" required>
            <option value="select">---select---</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="postgraduate">Postgraduate</option>
            <option value="none">None</option>
            </select><br/><br/>
            <label className="form-label" ><b>In how many days you are going to complete your graduation?</b></label><br/>
            <select value={formData.completestatus} onChange={ (event)=>setFormData({...formData,completestatus:event.target.value})}className="px-3 py-2" required>
            <option value="select">---select---</option>
            <option value="lessthan1 year">less than 1 year</option>
            <option value="within 2-3 yaers">within 2 to 3 years</option>
            <option value="within 4 years">within 4 years</option>
            <option value="morethan 4 years">More than 4 years</option>
            </select><br/><br/>
            <label className="form-label" ><b>What is your current major?</b></label><br/>
            <select  value={formData.major} onChange={ (event)=>setFormData({...formData,major:event.target.value})}className="px-3 py-2" required>
            <option value="select">---select---</option>
            <option value="btech">B.Tech/B.E</option>
            <option value="bcm">B.Com/B.Sc</option>
            <option value="ba">B.A</option>
            <option value="phd">Phd</option>
            <option value="mba">MBA/MCA</option>
            <option value="mbbs">MBBS</option>
            <option value="ca">CA/CS</option>
            </select><br/><br/>
            <label><b>Why did you choose this major?</b></label><br/>
            <input type="radio" name="reason" value="Because of Interest" onChange={ (event)=>setFormData({...formData,reason:event.target.value})}/>Because of Interest<br/>
            <input type="radio" name="reason" value="Because of Somebody's influence" onChange={ (event)=>setFormData({...formData,reason:event.target.value})} />Because of Somebody's influence<br/>
            <input type="radio" name="reason" value="Because it is popular" onChange={ (event)=>setFormData({...formData,reason:event.target.value})}/>Because it is popular<br/>
            <input type="radio" name="reason" value="I choose this casually" onChange={ (event)=>setFormData({...formData,reason:event.target.value})}/>I choose this casually<br/>
            <br/>
            <label><b>Do you ever want to change your major? </b></label><br/>
            <input type="radio" name="reason1" value="Yes" onChange={ (event)=>setFormData({...formData,reason1:event.target.value})} />Yes<br/>
            <input type="radio" name="reason1" value="No"  onChange={ (event)=>setFormData({...formData,reason1:event.target.value})}/>No<br/>
            <br/>
            </div>
        </div>
    );
    
}
export default Form2;