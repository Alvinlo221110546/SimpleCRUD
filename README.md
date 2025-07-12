# SimpleCRUD
# 🛒 Aplikasi Web CRUD Sederhana

Aplikasi fullstack sederhana untuk manajemen data menggunakan **React.js** sebagai frontend, **Node.js + Express** sebagai backend, dan **MySQL** sebagai database. Aplikasi ini memungkinkan pengguna untuk menambahkan, melihat, mengedit, dan menghapus data item secara real-time.

---

## 🧩 Struktur Proyek

📦 root/
┣ 📂 Frontend/ # Aplikasi frontend React
┃ ┣ 📂 public/
┃ ┣ 📂 src/
┃ ┃ ┣ 📄 App.js # Komponen utama
┃ ┃ ┣ 📄 index.js # Entry point React
┃ ┃ ┣ 📄 App.css # Styling global
┃ ┃ ┗ 📄 reportWebVitals.js # Opsional: monitoring performa
┃ ┣ 📄 package.json # Dependency React
┃ ┗ 📄 setupTests.js # Untuk testing
┃
┣ 📂 backend/ # Backend menggunakan Express
┃ ┣ 📂 config/
┃ ┃ ┗ 📄 database.js # Koneksi ke database MySQL
┃ ┣ 📂 models/
┃ ┃ ┗ 📄 item.js # Skema model data
┃ ┣ 📂 routes/
┃ ┃ ┗ 📄 ItemsRoutes.js # Rute API CRUD
┃ ┣ 📄 server.js # Entry point server Express
┃ ┗ 📄 package.json # Dependency backend
┃
┣ 📄 simplecrud_db.sql # File SQL untuk membuat tabel
┗ 📄 README.md # Dokumentasi proyek

yaml
Copy
Edit

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
