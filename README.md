# UET Major Explorer 🎓

Landing page giúp học sinh THPT khám phá **20 ngành học** tại **Trường Đại học Công nghệ - ĐHQGHN (UET)**.

> Cổng điều hướng nhanh đến các bài viết giới thiệu ngành trên Facebook — không cần đăng nhập, không backend, tải dưới 2 giây.

---

## ✨ Tính năng

- **🧭 Duyệt ngành theo nhóm** — 3 lĩnh vực: Máy tính & CNTT, Công nghệ kỹ thuật, Kỹ thuật
- **🔍 Tìm kiếm realtime** — gõ "AI" → CN12, "Robot" → CN17, ...
- **🏷️ Bộ lọc theo nhóm** — pills chuyên nghiệp
- **📱 Responsive** — tối ưu cho cả PC, tablet, mobile
- **🌙 Dark Mode** — chuyển đổi 1 nút, nhớ lựa chọn cũ
- **⚡ Nhanh** — static site, không database, ~60kB gzip
- **📣 Kết nối** — liên kết trực tiếp đến Page Tuyển sinh & Group TVTS UET

---

## 🛠 Công nghệ

| | |
|---|---|
| **Framework** | React 19 + Vite 8 |
| **CSS** | Thuần CSS với CSS Variables (không Tailwind) |
| **Font** | Be Vietnam Pro (Google Fonts) |
| **Hosting** | GitHub Pages (dễ deploy) |

---

## 🚀 Cài đặt & chạy

```bash
# Clone repo
git clone https://github.com/Cevin2107/UET-GMNH.git
cd UET-GMNH

# Cài dependencies
npm install

# Chạy dev server (http://localhost:5173)
npm run dev

# Build production
npm run build

# Xem thử bản build
npm run preview
```

---

## 📦 Deploy lên GitHub Pages

```bash
npm run build      # tạo thư mục dist/
npm run deploy     # push dist/ lên branch gh-pages
```

Sau deploy, site sẽ ở: `https://<username>.github.io/UET-GMNH/`

---

## 🗂 Cấu trúc dự án

```
src/
├── data/
│   └── majors.js          # Dữ liệu 20 ngành (hardcode theo PRD)
├── components/
│   ├── Navbar.jsx         # Sticky nav + dark mode toggle
│   ├── Hero.jsx           # Header gradient + illustration
│   ├── SearchBar.jsx      # Tìm kiếm realtime
│   ├── FilterPills.jsx    # Bộ lọc nhóm ngành
│   ├── MajorGrid.jsx      # Grid chia theo section
│   ├── MajorCard.jsx      # Card từng ngành
│   ├── Footer.jsx
│   └── BackToTop.jsx
├── hooks/
│   ├── useScrollSpy.js    # Phát hiện scroll
│   └── useReveal.js       # Animation fade-up lướt vào viewport
├── styles/
│   └── index.css          # Toàn bộ style, dark mode, responsive
├── App.jsx
└── main.jsx
```

---

## 📋 Nhóm ngành học

**💻 Máy tính & CNTT** — CN1, CN2, CN8, CN12, CN14, CN15, CN20

**🛠️ Công nghệ kỹ thuật** — CN5, CN6, CN7, CN9, CN10, CN19, CN21

**🤖 Kỹ thuật** — CN3, CN4, CN11, CN13, CN17, CN18

> Mỗi ngành là 1 card dẫn đến bài viết Facebook giới thiệu chi tiết.

---

## 🎨 Bộ màu thương hiệu UET

| | Mã |
|---|---|
| Primary | `#005BAC` |
| Secondary | `#0077D4` |
| Background | `#F7FBFF` |
| Text đậm | `#16324F` |

---

## 👨‍💻ác giả

Bởi [Cevin2107](https://github.com/Cevin2107)
Với sự hỗ trợ của Claude (Anthropic).

---

## 📄 License

MIT
