import { useReveal } from '../hooks/useReveal';

export default function Hero() {
  const [ref, visible] = useReveal();

  return (
    <section id="top" className="hero">
      <div className={`hero__inner ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="hero__content">
          <div className="hero__badge">Trường Đại học Công nghệ - ĐHQGHN</div>
          <h1 className="hero__title">
            Đồng hành cùng sĩ tử tìm hiểu thông tin về Trường Đại học Công nghệ - ĐHQGHN
          </h1>
          <p className="hero__subtitle">
            Tổng hợp đầy đủ các kênh thông tin chính thức và bài viết giới thiệu từng ngành học, giúp sĩ tử dễ dàng tìm hiểu và lựa chọn ngành học phù hợp.
          </p>
          <div className="hero__actions">
            <button className="hero__cta" onClick={() => document.getElementById('quicklinks')?.scrollIntoView({ behavior: 'smooth' })}>
              Khám phá ngay
            </button>
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
