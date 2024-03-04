import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./page.css";
import { faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";



export default function Home() {
  return (
    <div className="body">
      <div className="card">
        <div className="inputdiv">
          <input type="text" className="inputOfToDoList" placeholder="eg: Wake up at 08:00 AM" />
          <div className="searhBarDiv">
            <FontAwesomeIcon icon={faPlus} width={20} />
          </div>
        </div>
        <div className="listDiv">
          <div className="singleDiv">
            <div className="mainMessage">Hy to everyone</div>
            <div className="btnDiv">
              <FontAwesomeIcon className="iconsOfEdit" icon={faPenToSquare} width={20} />
              <FontAwesomeIcon className="iconsOfEdit" icon={faTrash} width={20} />
            </div>
          </div>
          <div className="singleDiv">
            <div className="mainMessage">Hy to everyone</div>
            <div className="btnDiv">
              <FontAwesomeIcon className="iconsOfEdit" icon={faPenToSquare} width={20} />
              <FontAwesomeIcon className="iconsOfEdit" icon={faTrash} width={20} />
            </div>
          </div>
        </div>

        <div className="deleteListDiv">
          <button>Delete All Todos</button>
        </div>
      </div>
    </div>
  );
}
