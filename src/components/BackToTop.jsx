import { useScrollSpy } from '../hooks/useScrollSpy';

export default function BackToTop() {
  const show = useScrollSpy(400);
  return (
    <button
      className={`backtop ${show ? 'is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Về đầu trang"
      title="Về đầu trang"
    >
      ↑
    </button>
  );
}
