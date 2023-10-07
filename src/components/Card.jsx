import { useDispatch, useSelector } from "react-redux";
import { remove, searchFilter } from "../redux/dataSlice";

const Card = () => {
  const datas = useSelector((state) => state.data.items);
  const search = useSelector((state) => state.data.search);
  const dispatch = useDispatch();

  const searchInputChange = (e) => {
    dispatch(searchFilter(e.target.value));
  };

  const searchItems = (datas, search) => {
    return datas.filter((data) =>
      data.text.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <>
      <section className="col-lg-6 mx-auto">
        <div className="my-3">
          <input
            type="text"
            className="form-control form-control-lg rounded-5"
            placeholder="Search"
            value={search}
            onChange={searchInputChange}
          />
        </div>
      </section>

      <section className="d-flex justify-content-center align-items-center flex-wrap gap-2 my-4">
        {searchItems(datas, search).map((data) => (
          <div
            key={data.id}
            className="card col-12 col-lg-3"
            style={{
              backgroundColor: `${data.noteColor ? data.noteColor : "#6a727a"}`,
              color: `${data.textColor ? data.textColor : "#9c9191"}`,
              minWidth: "298px",
            }}
          >
            <div className="card-header">{data.title}</div>
            <div className="card-body">
              <p className="card-text">{data.text}</p>
            </div>
            <div className="card-footer bg-transparent border-dark d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => dispatch(remove(data.id))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Card;
