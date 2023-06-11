import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./style/FormUsers.css";

const FormUsers = ({
  createNewUser,
  updateInfo,
  updateUserById,
  setUpdateinfo,
  setIsCloseForm,
}) => {
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      updateUserById("/users", updateInfo.id, data);
      setUpdateinfo();
    } else {
      createNewUser("/users", data);
    }
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
    setIsCloseForm(true);
  };
  const handleCloseForm = () => {
    setIsCloseForm(true);
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
    setUpdateinfo();
  };
  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <i onClick={handleCloseForm} className="bx bx-x"></i>

      <h2 className="form_title">Form User</h2>
      <div className="form_section">
        <label className="form_label" htmlFor="email">
          Email
        </label>
        <input
          className="form_input"
          {...register("email")}
          id="email"
          type="text"
        />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="password">
          Password{" "}
        </label>
        <input
          className="form_input"
          {...register("password")}
          id="password"
          type="password"
        />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="first_name">
          First Name
        </label>
        <input
          className="form_input"
          {...register("first_name")}
          id="first_name"
          type="text"
        />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="last_name">
          Last Name
        </label>
        <input
          className="form_input"
          {...register("last_name")}
          id="last_name"
          type="text"
        />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="birthday">
          Birthday
        </label>
        <input
          className="form_input"
          {...register("birthday")}
          id="birthday"
          type="date"
        />
      </div>
      <button className="form_btn">{updateInfo ? "edit" : "create"}</button>
    </form>
  );
};

export default FormUsers;
