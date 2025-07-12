# SimpleCRUD
# 🛒 Aplikasi Web CRUD Sederhana

Aplikasi fullstack sederhana untuk manajemen data menggunakan **React.js** sebagai frontend, **Node.js + Express** sebagai backend, dan **MySQL** sebagai database. Aplikasi ini memungkinkan pengguna untuk menambahkan, melihat, mengedit, dan menghapus data item secara real-time.

---

## 📁 Struktur Proyek

```bash
📦 root/
├── 💻 Frontend/                  # Frontend: React.js
│   ├── 🌐 public/
│   ├── 📁 src/
│   │   ├── ⚙️ App.js
│   │   ├── 🚀 index.js
│   │   ├── 🎨 App.css
│   │   └── 📊 reportWebVitals.js
│   ├── 📦 package.json
│   └── 🧪 setupTests.js
│
├── 🖥️ backend/                   # Backend: Node.js + Express
│   ├── 🔧 config/
│   │   └── 🗄️ database.js
│   ├── 🧩 models/
│   │   └── 📄 item.js
│   ├── 🛣️ routes/
│   │   └── 📄 ItemsRoutes.js
│   ├── 🚀 server.js
│   └── 📦 package.json
│
├── 🧾 simplecrud_db.sql          # Struktur tabel SQL
└── 📘 README.md                  # Dokumentasi proyek
```


---

## 🚀 Fitur Utama

- ✅ Menambahkan item ke dalam database
- 📃 Menampilkan seluruh item
- ✏️ Mengedit informasi item
- ❌ Menghapus item
- 🔗 Komunikasi frontend-backend via REST API
- 🌐 Arsitektur terpisah dan bersih (frontend/backend)

---

## ⚙️ Cara Menjalankan Proyek

### 1. Clone Repository

```bash
git clone https://github.com/username/nama-repo.git
cd nama-repo
2. Jalankan Backend
bash
Copy
Edit
cd backend
npm install
node server.js
Pastikan MySQL sudah aktif dan sesuaikan konfigurasi koneksi di backend/config/database.js.

Impor file SQL simplecrud_db.sql ke database MySQL kamu untuk membuat tabel items.

3. Jalankan Frontend
bash
Copy
Edit
cd ../Frontend
npm install
npm start
