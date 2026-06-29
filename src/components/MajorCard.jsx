export default function MajorCard({ major }) {
  return (
    <a
      className="card"
      href={major.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Xem bài viết giới thiệu ngành ${major.name}`}
    >
      <div className="card__code">{major.code}</div>
      <div className="card__body">
        <h3 className="card__name">{major.name}</h3>
        <div className="card__category">{major.category}</div>
      </div>
      <div className="card__action">
        Xem bài viết <span aria-hidden="true">→</span>
      </div>
    </a>
  );
}
