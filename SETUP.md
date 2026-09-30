# INKFLO — Firebase setup (ek baar karna hai)

Ab site me koi server nahi hai. Sab kuch seedha Firebase se judta hai:
- **Firestore** = products, orders, coupons, customers, banners, filters, settings
- **Firebase Auth** = customer login/signup aur admin login

Admin kuch bhi badle (product, price, banner, filter, about, settings) to wo Firebase me save hota hai
aur **sab customers ko turant live dikhta hai** (page refresh bhi nahi karna padta).

## 1. Firebase Console me (project: inkflow-677c6)

1. **Authentication → Sign-in method** → **Email/Password** ko Enable karo.
2. **Authentication → Users → Add user** → apna admin email aur password daalo.
3. **Firestore Database** → agar bana nahi hai to *Create database* (production mode, Mumbai `asia-south1`).
4. **Firestore → Rules** → `firestore.rules` file ka poora text paste karo → **Publish**.
5. **Authentication → Settings → Authorized domains** → apna hosting domain add karo
   (jaise `yoursite.netlify.app` ya `username.github.io`).

## 2. Admin email (2 jagah same likhna hai)

- `js/config.js` me: `ADMIN_EMAIL = "aapka-admin@email.com"`
- `firestore.rules` me: `'admin@inkflo.com'` ko usi email se badlo (chhote akshar me), phir Rules dobara **Publish** karo.

## 3. Upload karo

Poora folder Netlify (drag & drop) ya GitHub Pages par daal do. Koi build/npm nahi chahiye.
Local test ke liye `index.html` double-click mat karo; VS Code "Live Server" ya `python3 -m http.server` use karo.

## 4. Admin panel

Khologe: `https://aapki-site/#/admin` (customer screens par iska button nahi dikhta).

1. **Products → Load sample products** (ya apne products add karo).
2. **Settings** → Business email, Instagram, Facebook, Razorpay Key ID, shipping.
3. **Banners / Filters / About Us** → jo badlna ho badlo, sab live update hoga.
4. **Settings → Change admin password** (pehle current password verify hota hai).

## Razorpay (sirf online payment, COD nahi)

- Settings me sirf **Key ID** (`rzp_live_...`) daalo. **Key Secret kabhi site me mat daalna.**
- Razorpay Dashboard me **auto-capture** ON rakho.
- Bina server ke payment ka signature verify nahi ho sakta, isliye har order ka **Payment ID** (Orders tab me dikhta hai)
  Razorpay Dashboard se match kar lena. Server-side verification chahiye to baad me Cloud Functions joda ja sakta hai.

## Jaan lene wali baatein

- Images Firestore me chhoti JPEG ke roop me save hoti hain (Storage plan nahi chahiye). Ek product me max 5 photos.
- Bills = har paid order, permanent (delete ka option hi nahi).
- Customer wishlist/cart us device ke browser me rehti hai.
