# Upload to GitHub + GitHub Pages | الرفع على GitHub والنشر

## 1. Create the repository | إنشاء المستودع

1. Sign in: https://github.com/login (username: **alkhaldi-omar**)
2. Go to https://github.com/new
   - Name: `smart-methods-web-personal-website`
   - **Public**
   - Leave **Add a README** unchecked (we already have one)
   - Click **Create repository**

## 2. Upload the files | رفع الملفات

1. On the empty repo page click **uploading an existing file** (or **Add file → Upload files**).
2. Drag **everything inside** the project folder:
   - `index.html`
   - `README.md`
   - `GITHUB_PAGES.md`
   - folder `css` (with `style.css`)
   - folder `js` (with `script.js`)

   > Important: `index.html` must be at the **root** of the repo, not inside another folder.  
   > مهم: يجب أن يكون `index.html` في جذر المستودع وليس داخل مجلد آخر.
3. Commit message: `Personal website - web task`
4. Click **Commit changes**.

## 3. Turn on GitHub Pages | تفعيل GitHub Pages

1. In the repo open **Settings → Pages**.
2. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** — folder: **/ (root)**
   - Click **Save**
3. Wait 1–2 minutes, refresh the page. The link will appear:

   **https://alkhaldi-omar.github.io/smart-methods-web-personal-website/**

## 4. Submit | التسليم

Send both links to the teacher:

- Repo: `https://github.com/alkhaldi-omar/smart-methods-web-personal-website`
- Website: `https://alkhaldi-omar.github.io/smart-methods-web-personal-website/`

## Optional: using Git from the terminal

```powershell
git init
git add .
git commit -m "Personal website - web task"
git branch -M main
git remote add origin https://github.com/alkhaldi-omar/smart-methods-web-personal-website.git
git push -u origin main
```
