import "./Items.css";
function Items(props) {
  return (
    <div>
      <div class="card">
        <h2> {props.h2}</h2>
        <img src={props.imgsrc} alt="" />
        <p>
          <i> {props.desc}</i>
        </p>
      </div>
    </div>
  );
}

export default Items;
