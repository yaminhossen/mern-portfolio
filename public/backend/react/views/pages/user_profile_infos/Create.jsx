import React, { useEffect, useState } from "react";
import ModalManagement from "./components/management/ModalManagement";
import { useDispatch, useSelector } from "react-redux";
import setup from "./config/setup";
import userSetup from "../users/config/setup";
import MultiselectDropdown from "./components/all_data_components/Multiselect_dropdown";

function Create() {
  const user_data_store = useSelector((state) => state[userSetup.prefix]);
  setup.dispatch = useDispatch();
  userSetup.dispatch = useDispatch();
  const { store_data } = setup.actions;
  const { get_data: get_users } = userSetup.actions;
  const [selectedRole, setselectedRole] = useState([])
  const [tasklist, setTasklist] = useState(false)

  useEffect(() => {
    get_users();
  }, [])

  console.log(selectedRole);

  const handleSubmit = async () => {
    let e = event;
    e.preventDefault();
    let form_data = new FormData(e.target);
    selectedRole.forEach((e, index) => {
      form_data.append(`creator[${index}]`, e._id);
      console.log(e);
    });
    [...document.querySelectorAll('.form_error')].forEach((el => el.remove()));
    await store_data(form_data);
    e.target.reset();
  };
  return (
    <div className="card list_card">
      <div className="card-header ">
        <h2 className="heading">Create</h2>
        <div className="btns d-flex gap-2 align-items-center">
          <a href="#/user-profile-info" className="btn rounded-pill btn-outline-secondary">
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
                    <label htmlFor="">Designation</label>
                    <div>:</div>
                    <div><input name="designation" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Blood group</label>
                    <div>:</div>
                    <div><input name="blood_group" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Date of Birth</label>
                    <div>:</div>
                    <div><input name="date_of_birth" type="date" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Nationality</label>
                    <div>:</div>
                    <div><input name="nationality" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Father Name</label>
                    <div>:</div>
                    <div><input name="father_name" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Mother Name</label>
                    <div>:</div>
                    <div><input name="mother_name" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Banner Profile Pic</label>
                    <div>:</div>
                    <div><input name="banner_profile_pic" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Short Bio</label>
                    <div>:</div>
                    <div><input name="short_bio" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">full Bio</label>
                    <div>:</div>
                    <div><input name="full_bio" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Address Pressent</label>
                    <div>:</div>
                    <div><input name="address_present" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Address Permanent</label>
                    <div>:</div>
                    <div><input name="address_permanent" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Google Map</label>
                    <div>:</div>
                    <div><input name="google_map" type="text" className="form-control" /></div>
                  </div>

                  {/* <div className="custom_form_el">
                    <label htmlFor="">Creator</label>
                    <div>:</div>
                    <div>
                      <div id="creator">
                        <MultiselectDropdown data={user_data_store.all_data} selectedData={selectedRole} setSelectedData={setselectedRole} taskOpen={tasklist} setTaskOpen={setTasklist}></MultiselectDropdown>
                      </div>
                    </div>
                  </div> */}
                </div>
                <input type="submit" value="Create" />
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
