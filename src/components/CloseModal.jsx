import { useForm } from "react-hook-form";
import "src/style/closeModal.css";

const closeModal = ({
  deletinfo,
  deleteUserById,
  setDeletinfo,
  setIsCloseModalDelete,
}) => {
  const { handleSubmit } = useForm();
  const handleCloseModal = () => {
    setDeletinfo();
    setIsCloseModalDelete(true);
  };

  const deleteUser = () => {
    if (deletinfo) {
      deleteUserById("users", deletinfo.id);
      setDeletinfo();
      setIsCloseModalDelete(true);
    }
  };
  return (
    <form className="Delete_containt" onSubmit={handleSubmit(deleteUser)}>
      <i onClick={handleCloseModal} className="bx bx-x"></i>
      <div className="body_modal-delete ">
        <h1 className="title_Delete-User">Eliminar Usuario</h1>
        <p className="p_deleteUser">
          El usuario
          <span className="user">{` ${deletinfo.first_name} ${deletinfo.last_name}`}</span>
          se ha eliminado
        </p>
        <button className="button_for_delete" onClick={deleteUser}>
          Aceptar
        </button>
      </div>
    </form>
  );
};

export default closeModal;
