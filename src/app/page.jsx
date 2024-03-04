import "./page.css"


export default function Home() {
  return (
    <div className="body">
      <div className="card">
        <div className="inputdiv">
          <input type="text" className="inputOfToDoList" />
        </div>
        <div className="listDiv">
          <div className="singleDiv">
            <div className="mainMessage"></div>
            <div className="btnDiv">
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
