import { useReveal } from '../hooks/useReveal';

const links = [
  {
    icon: '🏫',
    title: 'Page Trường Đại học Công nghệ - ĐHQGHN',
    description: 'Fanpage chính thức của Trường Đại học Công nghệ - ĐHQGHN.',
    url: 'https://www.facebook.com/UET.VNUH',
    isExternal: true,
  },
  {
    icon: '🎓',
    title: 'Page Tuyển sinh Trường Đại học Công nghệ - ĐHQGHN',
    description: 'Cập nhật thông tin tuyển sinh, sự kiện và thông báo mới nhất của Trường Đại học Công nghệ - ĐHQGHN.',
    url: 'https://www.facebook.com/TVTS.UET.VNU',
    isExternal: true,
  },
  {
    icon: '💬',
    title: 'Group Tư vấn tuyển sinh UET',
    description: 'Đặt câu hỏi và trao đổi trực tiếp với sinh viên, giảng viên và đội ngũ tư vấn Trường Đại học Công nghệ - ĐHQGHN.',
    url: 'https://www.facebook.com/groups/426349504198734',
    isExternal: true,
  },
  {
    icon: '🌐',
    title: 'Website Tuyển sinh Trường Đại học Công nghệ - ĐHQGHN',
    description: 'Thông tin chính thức về phương thức tuyển sinh, chỉ tiêu và lịch tuyển sinh của Trường Đại học Công nghệ - ĐHQGHN.',
    url: 'https://tuyensinh.uet.vnu.edu.vn/',
    isExternal: true,
  },
  {
    icon: '📚',
    title: 'Chương trình đào tạo Trường Đại học Công nghệ - ĐHQGHN',
    description: 'Xem chương trình đào tạo và khung chương trình các ngành học tại Trường Đại học Công nghệ - ĐHQGHN.',
    url: 'https://uet.vnu.edu.vn/dao-tao/',
    isExternal: true,
  },
  {
    icon: '🚀',
    title: 'Giải mã các ngành học',
    description: 'Khám phá chi tiết từng ngành học của Trường Đại học Công nghệ - ĐHQGHN thông qua các bài viết giới thiệu.',
    url: '#majors',
    isExternal: false,
    isSpecial: true,
  },
];

export default function QuickLinks({ onShowMajors }) {
  const [ref, visible] = useReveal();

  return (
    <section id="quicklinks" className="quicklinks">
      <div className="quicklinks__inner">
        <div className={`quicklinks__header ${visible ? 'is-visible' : ''}`} ref={ref}>
          <h2 className="quicklinks__title">🔗 Liên kết nhanh</h2>
          <p className="quicklinks__subtitle">
            Truy cập nhanh các kênh thông tin chính thức của Trường Đại học Công nghệ - ĐHQGHN.
          </p>
        </div>
        <div className="quicklinks__grid">
          {links.map((link, index) => (
            <LinkCard key={index} link={link} index={index} onShowMajors={onShowMajors} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LinkCard({ link, index, onShowMajors }) {
  const [cardRef, cardVisible] = useReveal();

  const handleClick = () => {
    if (link.isSpecial) {
      if (onShowMajors) {
        onShowMajors();
      } else {
        document.getElementById('majors')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const cardContent = (
    <>
      <div className="quicklinks__card-icon">{link.icon}</div>
      <div className="quicklinks__card-body">
        <h3 className="quicklinks__card-title">{link.title}</h3>
        <p className="quicklinks__card-desc">{link.description}</p>
      </div>
      <span className="quicklinks__card-arrow" aria-hidden="true">→</span>
    </>
  );

  if (link.isExternal && !link.isSpecial) {
    return (
      <a
        ref={cardRef}
        className={`quicklinks__card ${cardVisible ? 'is-visible' : ''}`}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ '--delay': `${index * 0.1}s` }}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <button
      ref={cardRef}
      className={`quicklinks__card ${cardVisible ? 'is-visible' : ''}`}
      onClick={handleClick}
      style={{ '--delay': `${index * 0.1}s` }}
    >
      {cardContent}
    </button>
  );
}