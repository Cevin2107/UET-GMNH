export default function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <span className="search__icon" aria-hidden="true">⌕</span>
      <input
        type="text"
        className="search__input"
        placeholder="Tìm ngành học..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Tìm ngành học"
      />
      {value && (
        <button className="search__clear" onClick={() => onChange('')} aria-label="Xóa tìm kiếm">×</button>
      )}
    </div>
  );
}
