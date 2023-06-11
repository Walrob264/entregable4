import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import FormUsers from "./components/FormUsers";
import UsersCard from "./components/UsersCard";
import CloseModal from "./components/CloseModal";
import Loading from "./components/Loading";
function App() {
  const [isCloseForm, setIsCloseForm] = useState(true);
  const [updateInfo, setUpdateinfo] = useState(undefined);
  const [isCloseModalDelete, setIsCloseModalDelete] = useState(true);
  const [deletinfo, setDeletinfo] = useState(undefined);

  const baseUrl = "https://users-crud.academlo.tech/";
  const [users, getAllUser, createNewUser, deleteUserById, updateUserById] =
    useFetch(baseUrl);
  useEffect(() => {
    getAllUser("/users");
  }, []);
  const handleOpenForm = () => {
    setIsCloseForm(false);
  };
  return (
    <div className="containt">
      {users ? (
        <div className="header">
          <h2 className="title">Users</h2>
          <button className="button_New-User" onClick={handleOpenForm}>
            <h2>
              {" "}
              <i className="bx bx-plus"> Create new user</i>
            </h2>
          </button>
        </div>
      ) : (
        <Loading />
      )}

      <div className={`form-container ${isCloseForm && "form_close"}`}>
        <FormUsers
          setIsCloseForm={setIsCloseForm}
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateinfo={setUpdateinfo}
        />
      </div>
      <div
        className={`modal-container_delete ${
          isCloseModalDelete && "modal_close-delete"
        } `}
      >
        {deletinfo && (
          <CloseModal
            deletinfo={deletinfo}
            deleteUserById={deleteUserById}
            setDeletinfo={setDeletinfo}
            setIsCloseModalDelete={setIsCloseModalDelete}
          />
        )}
      </div>
      <div className="Containt_card">
        {users?.map((user) => (
          <UsersCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateinfo={setUpdateinfo}
            setIsCloseForm={setIsCloseForm}
            setIsCloseModalDelete={setIsCloseModalDelete}
            setDeletinfo={setDeletinfo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
