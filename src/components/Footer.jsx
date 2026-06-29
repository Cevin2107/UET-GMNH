export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">UET</span>
          <div>
            <div className="footer__name">Trường Đại học Công nghệ - Đại học Quốc gia Hà Nội</div>
            <div className="footer__tagline">Website hỗ trợ thí sinh tìm hiểu ngành học.</div>
          </div>
        </div>
        <div className="footer__contact">
          <div className="footer__contact-item">📍 Địa chỉ: Nhà G2, 144 Xuân Thủy, Cầu Giấy, Hà Nội</div>
          <div className="footer__contact-item">☎️ Điện thoại: 024.3754.7865 | 0334.924.224 (Hotline)</div>
          <div className="footer__contact-item">🌐 Trang chủ: <a href="http://uet.vnu.edu.vn/" target="_blank" rel="noreferrer" className="footer__link">http://uet.vnu.edu.vn/</a></div>
        </div>
        <div className="footer__meta">© 2026</div>
      </div>
    </footer>
  );
}
