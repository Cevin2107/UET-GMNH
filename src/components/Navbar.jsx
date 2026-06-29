import { useScrollSpy } from '../hooks/useScrollSpy';

const LOGO_URL = 'https://uet.edu.vn/wp-content/uploads/2026/01/Logo1.png';

export default function Navbar({ dark, onToggleDark }) {
  const scrolled = useScrollSpy();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <button className="navbar__brand" onClick={() => scrollTo('top')} aria-label="Về đầu trang">
          <img className="navbar__logo-img" src={LOGO_URL} alt="Logo Trường Đại học Công nghệ - ĐHQGHN" />
        </button>

        <div className="navbar__links">
          <button onClick={() => scrollTo('top')}>Trang chủ</button>
          <button onClick={() => scrollTo('majors')}>Ngành học</button>
          <button onClick={() => scrollTo('contact')}>Liên hệ</button>
        </div>

        <button
          className="navbar__dark-toggle"
          onClick={onToggleDark}
          aria-label="Chuyển chế độ tối"
          title={dark ? 'Chế độ sáng' : 'Chế độ tối'}
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}
