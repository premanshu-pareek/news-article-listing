const Article = (props) => {
  return (
    <>
      <div className="articleItem">
        <div className="articleItem__header">
          <div className="articleItem__image">
            <img src={props.image} alt="" className="articleItem__image--container" />
          </div>
          <div className="articleItem__title">
            <div className="articleItem__title--meta">
              <span className="articleItem__title--date">{props.date}</span>
              <span className="articleItem__title--category">{props.category}</span>
            </div>
            <h2 className="articleItem__title--name">{props.title}</h2>
          </div>
        </div>
        <div className="articleItem__summary">
          {props.summary}
        </div>
        <div className="articleItem__authorInfo">
          <strong>{props.author}</strong>
        </div>
      </div>
    </>
  );
}

export default Article;