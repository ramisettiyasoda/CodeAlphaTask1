import React from 'react'

function Form3({formData,setFormData }) {
  return (
    <div  className=" container col-md-6">
      <h3>Page 3/3</h3>
       <div className="frm">
    
      <label><b>Do you ever want to change your College? </b></label><br/>
            <input type="radio" name="reasonch" value="yes" onChange={ (event)=>setFormData({...formData,reasonch:event.target.value})}/>Yes<br/>
            <input type="radio" name="reasonch" value="no" onChange={ (event)=>setFormData({...formData,reasonch:event.target.value})}/>No<br/>
        
      <label><b>Why? state few reasons</b></label><br/>
      <textarea rows="5" cols="55" name="txtch" value={formData.txtch} onChange={ (event)=>setFormData({...formData,txtch:event.target.value})} ></textarea><br/>
      <label><b>Is there anything in your college is lacking off? </b></label><br/>
            <input type="radio" name="reasonlack" value="Yes"  onChange={ (event)=>setFormData({...formData,reasonlack:event.target.value})}/>Yes<br/>
            <input type="radio" name="reasonlack" value="No"  onChange={ (event)=>setFormData({...formData,reasonlack:event.target.value})}/>No<br/>
            
      <label><b>Comments/Suggestions:</b></label><br/>
      <textarea rows="5" cols="55" name="txtlack" value={formData.txtlack} onChange={ (event)=>setFormData({...formData,txtlack:event.target.value})}></textarea><br/>
      <label><b>Do you think is there anything to add in your College to make it better? </b></label><br/>
            <input type="radio" name="reasonadd" value="Yes"  onChange={ (event)=>setFormData({...formData,reasonadd:event.target.value})}/>Yes<br/>
            <input type="radio" name="reasonadd" value="No"  onChange={ (event)=>setFormData({...formData,reasonadd:event.target.value})}/>No<br/>
        
      <label><b>Feedback regarding college:</b></label><br/>
      <textarea rows="5" cols="55" name="txtbtr" value={formData.txtbtr} onChange={ (event)=>setFormData({...formData,txtbtr:event.target.value})}></textarea><br/>
    </div>
    </div>
  )
}

export default Form3
