import "./style/UsersCard.css";
const UsersCard = ({
  user,
  setUpdateinfo,
  setIsCloseForm,
  setDeletinfo,
  setIsCloseModalDelete,
}) => {
  const DeleteUser = () => {
    setDeletinfo(user);
    setIsCloseModalDelete(false);
  };
  const handleEdit = () => {
    setUpdateinfo(user);
    setIsCloseForm(false);
  };

  return (
    <article className="card">
      <h2 className="title_card">{`${user.first_name} ${user.last_name}`}</h2>

      <ul className="list_card">
        <li className="info_card">
          <h1 className="info_card-Dates">Email</h1>
          <span className="info_card_dates-user">{user.email}</span>
        </li>
        <li className="info_card">
          <h1 className="info_card-Dates">Birthday</h1>
          <span className="info_card_dates-user">
            {" "}
            <i className="bx bx-gift"></i>
            {user.birthday}
          </span>{" "}
        </li>
      </ul>
      <div className="containt_button">
        <button className="button_trash" onClick={DeleteUser}>
          <i className="bx bx-trash"></i>
        </button>
        <button className="button_edit" onClick={handleEdit}>
          <i className="bx bx-edit"></i>
        </button>
      </div>
    </article>
  );
};

export default UsersCard;
