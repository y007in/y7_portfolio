import { useNavigate } from "react-router-dom";
import { ProjectData } from "assets/projectdata";

const Slide = () => {
  const navigate = useNavigate();
  return (
    <>
      {ProjectData.map((p, i) => (
        <li
          className="item_list"
          key={i}
          onClick={() => {
            navigate(`/project/${p.id}`);
          }}
        >
          <div className="item">
            <img src={p.image} alt={p.id} />
          </div>
          <div className="item_des">
            <div className="item_name">
              <div>{p.name}</div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default Slide;
