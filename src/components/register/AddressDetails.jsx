import React from 'react'

const AddressDetails = ({formData, setFormData}) => {
  return (
    <div>
      <div className="form-row">
          <div className="form-holder w-100">
            <input
            value={formData.address}
            onChange={(e) => setFormData({
             ...formData, address:e.target.value
             })} 
            type="text" placeholder="Address" className="form-control" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-holder">
            <input
            value={formData.city}
            onChange={(e) => setFormData({
             ...formData, city:e.target.value
             })} 
            type="text" placeholder="City" className="form-control" />
          </div>
          <div className="form-holder">
            <input
            value={formData.zipCode}
            onChange={(e) => setFormData({
             ...formData, zipCode:e.target.value
             })} 
            type="text" placeholder="Zip Code" className="form-control" />
          </div>
        </div>
        <div className="form-row">
           <input
           value={formData.country}
           onChange={(e) => setFormData({
            ...formData, country:e.target.value
            })} 
           type="text" placeholder="Country" className="form-control" />
          <div className="form-holder" />
        </div>
    </div>
  )
}

export default AddressDetails