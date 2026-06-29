import { useReveal } from '../hooks/useReveal';

export default function Hero() {
  const [ref, visible] = useReveal();

  return (
    <section id="top" className="hero">
      <div className={`hero__inner ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="hero__content">
          <div className="hero__badge">Trường Đại học Công nghệ · ĐHQGHN</div>
          <h1 className="hero__title">
            Khám phá các ngành học
            <span className="hero__title-accent">Trường Đại học Công nghệ - ĐHQGHN</span>
          </h1>
          <p className="hero__subtitle">
            Lựa chọn ngành học phù hợp với bản thân và tìm hiểu chi tiết thông qua các bài viết giới thiệu.
          </p>
          <div className="hero__actions">
            <button className="hero__cta" onClick={() => document.getElementById('majors')?.scrollIntoView({ behavior: 'smooth' })}>
              Khám phá ngay
            </button>
            <a className="hero__social" href="https://www.facebook.com/TVTS.UET.VNU" target="_blank" rel="noopener noreferrer">
              <span className="hero__social-icon" aria-hidden="true">📣</span>
              Page Tuyển sinh
            </a>
            <a className="hero__social hero__social--group" href="https://www.facebook.com/groups/uet.tvts" target="_blank" rel="noopener noreferrer">
              <span className="hero__social-icon" aria-hidden="true">👥</span>
              Group TVTS
            </a>
          </div>
        </div>

        <div className="hero__illustration" aria-hidden="true">
          <div className="hero__orbit hero__orbit--1" />
          <div className="hero__orbit hero__orbit--2" />
          <div className="hero__orbit hero__orbit--3" />
          <div className="hero__core">UET</div>
          <div className="hero__chip hero__chip--ai">AI</div>
          <div className="hero__chip hero__chip--chip">{'</>'}</div>
          <div className="hero__chip hero__chip--robot">🤖</div>
          <div className="hero__chip hero__chip--data">DATA</div>
        </div>
      </div>
    </section>
  );
}
