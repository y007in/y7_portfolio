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
            <img src={p.image} alt={`${p.name}img`} />
          </div>
          <section className="item_des">
            <div className="item_title">
              <span className="item_name">{p.name}</span>
              <span>{p.team}</span>
            </div>
            <div className="item_skill">{p.skill}</div>
          </section>
        </li>
      ))}
    </>
  );
};

export default Slide;
