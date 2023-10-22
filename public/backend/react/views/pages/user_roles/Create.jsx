import React from "react";
import ModalManagement from "./components/management/ModalManagement";
import { useDispatch } from "react-redux";
import setup from "./config/setup";

function Create() {

  setup.dispatch = useDispatch();
  const { store_data } = setup.actions;

  const handleSubmit = async () => {
    let e = event;
    e.preventDefault();
    let form_data = new FormData(e.target);
    [...document.querySelectorAll('.form_error')].forEach((el => el.remove()));
    await store_data(form_data);
    e.target.reset();
  };
  return (
    <div className="card list_card">
      <div className="card-header ">
        <h2 className="heading">Create</h2>
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
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-5">
                  <div className="custom_form_el">
                    <label htmlFor="">Title</label>
                    <div>:</div>
                    <div><input name="title" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Serial</label>
                    <div>:</div>
                    <div><input name="serial" type="number" className="form-control" /></div>
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
  );
}

export default Create;
