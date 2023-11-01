import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import setup from "./config/setup";
import { useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  setup.dispatch = useDispatch();
  const data_store = useSelector((state) => state[setup.prefix])[setup.prefix]
  const { get_user_roles, set_data, update_data } = setup.actions;

  useEffect(() => {
    get_user_roles(id);
    
    return () => {
      document.getElementById('form-data')?.reset();
      set_data(null)
    };
  }, []);

  console.log(data_store);

  const handleSubmit = async () => {
    let e = event;
    e.preventDefault();
    let form_data = new FormData(e.target);
    form_data.append('id', id);

    // [...document.querySelectorAll('.form_error')].forEach((el => el.remove()));
    await update_data(form_data);
    // e.target.reset();
    // // e.target.serial.value = "";
    // // e.target.title.value = "";

  };

  

  if(data_store){
    const{serial, title} = data_store;
    return (
      <div className="card list_card">
        <div className="card-header ">
          <h2 className="heading">Edit</h2>
          <div className="btns d-flex gap-2 align-items-center">
            <a href="#/user-role" className="btn rounded-pill btn-outline-secondary">
              <i className="material-symbols-outlined fill">arrow_back</i>
              Back
            </a>
          </div>
        </div>
        <div className="card-body">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-8">
                <form id='form-data' onSubmit={handleSubmit}>
                  <div className="form-group mb-5">
                    <div className="custom_form_el">
                      <label htmlFor="">Title</label>
                      <div>:</div>
                      <div><input name="title" type="text" className="form-control" defaultValue={title} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Serial</label>
                      <div>:</div>
                      <div><input name="serial" type="number" className="form-control" defaultValue={serial} /></div>
                    </div>
                  </div>
                  <input type="submit" value="Create" />
                  {/* {[
                    "Serial",
                  ].map((i) => {
                    return (
                      <div className="form-group mb-5">
                        <div className="custom_form_el">
                          <label htmlFor="">{i}</label>
                          <div>:</div>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    );
                  })} */}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer"></div>
      </div>
    )
  }
}

export default Edit