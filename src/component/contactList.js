import "./contactList.css";
import ProImg from "../img/Profile-images.png";
import Delete from "../img/delete-button.jpg";

export default function ContactList(props) {
  let { name, email, relation,id } = props;
  const DeleteHandler = () =>{
    props.deleteContact(id);
    console.log(id);

  }
  return (
    <>
      <div className="wrapper mt-3">
        <div className="content">
          <div className="P-img m-2">
            <img src={ProImg} alt="img" />

            <div className="contact-text m-3">
              <h6>{name}</h6>
              <h6>{email}</h6>
              <p>{relation}</p>
            </div>
          </div>
          <div className="delete-img">
            <img src={Delete} onClick={DeleteHandler} />
          </div>
        </div>
      </div>
    </>
  );
}
