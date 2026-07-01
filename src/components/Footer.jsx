export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__top">
        <div className="footer__inner">
          <div className="footer__brand-col">
            <div className="footer__brand">
              <span className="footer__logo">UET</span>
              <span className="footer__brand-text">Trường Đại học Công nghệ - ĐHQGHN</span>
            </div>
          </div>
          
          <div className="footer__links-col">
            <h4 className="footer__heading">Liên hệ</h4>
            <ul className="footer__list">
              <li><span className="footer__icon">📍</span> Nhà G2, 144 Xuân Thủy, Cầu Giấy, Hà Nội</li>
              <li><span className="footer__icon">☎️</span> 024.3754.7865 | 0334.924.224</li>
              <li><span className="footer__icon">🌐</span> <a href="http://uet.vnu.edu.vn/" target="_blank" rel="noreferrer">uet.vnu.edu.vn</a></li>
            </ul>
          </div>
          
          <div className="footer__links-col">
            <h4 className="footer__heading">Kết nối</h4>
            <div className="footer__socials">
              <a href="https://www.facebook.com/TVTS.UET.VNU" target="_blank" rel="noreferrer" className="footer__social" aria-label="Facebook Fanpage">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="https://tuyensinh.uet.vnu.edu.vn/" target="_blank" rel="noreferrer" className="footer__social" aria-label="Website Tuyển sinh">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer__bottom">
        <div className="footer__inner footer__inner--bottom">
          <div className="footer__meta">© 2026 Trường Đại học Công nghệ - ĐHQGHN.</div>
        </div>
      </div>
    </footer>
  );
}
