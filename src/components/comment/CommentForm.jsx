import React from "react";

const CommentForm = () => {
  return (
    <div className="blog-comment-form">
      <div className="row margin-top-20">
        <div className="col-md-12">
          <div className="pull-left">
            <h3>Leave a Comment</h3>
          </div>
        </div>
      </div>
      <div className="row margin-top-20">
        <div className="col-md-12">
          <form>
            <label>Name</label>
            <div className="row margin-bottom-20">
              <div className="col-md-7 col-md-offset-0">
                <input className="form-control" type="text" />
              </div>
            </div>
            <label>
              Email
              <span>*</span>
            </label>
            <div className="row margin-bottom-20">
              <div className="col-md-7 col-md-offset-0">
                <input className="form-control" type="text" />
              </div>
            </div>
            <label>Message</label>
            <div className="row margin-bottom-20">
              <div className="col-md-11 col-md-offset-0">
                <textarea className="form-control" rows={8} defaultValue={""} />
              </div>
            </div>
            <p>
              <button className="btn btn-primary" type="submit">
                Send Message
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
