export default function FilterPills({ categories, active, onChange }) {
  return (
    <div className="pills" role="tablist">
      {categories.map((c) => (
        <button
          key={c.id}
          role="tab"
          aria-selected={active === c.id}
          className={`pill ${active === c.id ? 'pill--active' : ''}`}
          onClick={() => onChange(c.id)}
        >
          <span className="pill__icon" aria-hidden="true">{c.icon}</span>
          {c.label}
        </button>
      ))}
    </div>
  );
}
