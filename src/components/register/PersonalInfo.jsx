import React from "react";

const PersonalInfo = ({formData, setFormData}) => {
  return (
    <div>

      <div className="form-row">
        <div className="form-holder">
          <input
		  value={formData.firstName}
		  onChange={(e) => setFormData({
			...formData, firstName:e.target.value
		  })}
            type="text"
            placeholder="First Name"
            className="form-control"
          />
        </div>
        <div className="form-holder">
          <input
		 value={formData.lastName}
		 onChange={(e) => setFormData({
			...formData, lastName:e.target.value
		  })} 
		  type="text" placeholder="Last Name" className="form-control" />
        </div>
      </div>

      <div className="form-row">
								<div className="form-holder">
									<input
									value={formData.email}
									onChange={(e) => setFormData({
										...formData, email:e.target.value
									  })}
									type="email" placeholder="Your Email" className="form-control"/>
								</div>
								<div className="form-holder">
									<input
									value={formData.password}
									onChange={(e) => setFormData({
										...formData, password:e.target.value
									  })}
									type="password" placeholder="Password" className="form-control"/>
								</div>
							</div>

              				<div className="form-row">
								<div className="form-holder">
									<input
									value={formData.age}
									onChange={(e) => setFormData({
										...formData, age:e.target.value
									  })}
									type="text" placeholder="Age" className="form-control"/>
								</div>
								<div className="form-holder" style={{alignSelf: "flex-end", transform: "translateY(4px)"}}>
									{/* <div className="checkbox-tick">
										<label className="male">
											<input type="radio" name="gender" value="male" checked/> Male<br/>
											<span className="checkmark"></span>
										</label>
										<label className="female">
											<input type="radio" name="gender" value="female"/> Female<br/>
											<span className="checkmark"></span>
										</label>
									</div> */}
								</div>
							</div>
    </div>
  );
};

export default PersonalInfo;
