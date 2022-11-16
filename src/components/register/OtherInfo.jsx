import React from 'react'

const OtherInfo = ({formData, setFormData}) => {
  return (
    <div>
      <div className="form-row">
          <div className="form-holder w-100">
            <textarea
            value={formData.message}
            onChange={(e) => setFormData({
             ...formData, message:e.target.value
             })} 
            placeholder="Your messagere here!" type="text" className="form-control" style={{height: '99px'}} />
          </div>
        </div>
        <div className="checkbox-circle mt-24">
          {/* <label>
            <input type="checkbox" defaultChecked />  Please accept <a href="#">terms and conditions ?</a>
            <span className="checkmark" />
          </label> */}
        </div>
    </div>
  )
}

export default OtherInfo