import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import setup from "./config/setup";
import { useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  setup.dispatch = useDispatch();
  const data_store = useSelector((state) => state[setup.prefix])[setup.prefix];
  const { get_banners, set_data, update_data } = setup.actions;

  useEffect(() => {
    get_banners(id);

    return () => {
      document.getElementById("form-data")?.reset();
      set_data(null);
    };
  }, []);

  console.log(data_store);

  const handleSubmit = async () => {
    let e = event;
    e.preventDefault();
    let form_data = new FormData(e.target);
    form_data.append("id", id);

    [...document.querySelectorAll(".form_error")].forEach((el) => el.remove());
    await update_data(form_data);
    // e.target.reset();
    // // e.target.serial.value = "";
    // // e.target.title.value = "";
  };

  if (data_store) {
    const { button_url, button_text, title, sub_title, description } =
      data_store;
    return (
      <div className="card list_card">
        <div className="card-header ">
          <h2 className="heading">Edit</h2>
          <div className="btns d-flex gap-2 align-items-center">
            <a
              href="#/banner"
              className="btn rounded-pill btn-outline-secondary"
            >
              <i className="material-symbols-outlined fill">arrow_back</i>
              Back
            </a>
          </div>
        </div>
                <form id="form-data" onSubmit={handleSubmit}>
        <div className="card-body">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-8">
                  <div className="form-group mb-5">
                    <div className="custom_form_el">
                      <label htmlFor="">Title</label>
                      <div>:</div>
                      <div>
                        <input
                          name="title"
                          type="text"
                          className="form-control"
                          defaultValue={title}
                        />
                      </div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Sub Title</label>
                      <div>:</div>
                      <div>
                        <input
                          name="sub_title"
                          type="text"
                          className="form-control"
                          defaultValue={sub_title}
                        />
                      </div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Profile Photo</label>
                      <div>:</div>
                      <div>
                        <input
                          name="profile_photo"
                          type="file"
                          accept="image/*"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Banner Photo</label>
                      <div>:</div>
                      <div>
                        <input
                          name="banner_photo"
                          type="file"
                          accept="image/*"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Description</label>
                      <div>:</div>
                      <div>
                        <input
                          name="description"
                          type="text"
                          className="form-control"
                          defaultValue={description}
                        />
                      </div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Button Text</label>
                      <div>:</div>
                      <div>
                        <input
                          name="button_text"
                          type="text"
                          className="form-control"
                          defaultValue={button_text}
                        />
                      </div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Button Url</label>
                      <div>:</div>
                      <div>
                        <input
                          name="button_url"
                          type="text"
                          className="form-control"
                          defaultValue={button_url}
                        />
                      </div>
                    </div>
                  </div>
                  <input type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
        <button className="btn btn-outline-info" type="submit" value="Create">
            Submit{" "}
          </button>
        </div>
                </form>
      </div>
    );
  }
}

export default Edit;
