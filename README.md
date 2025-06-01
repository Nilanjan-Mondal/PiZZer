<div align="center">

![github](https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white)
![markdown](https://img.shields.io/badge/Markdown-181717.svg?style=for-the-badge&logo=Markdown&logoColor=white)
![vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

# piZZer – Fullstack Pizza Ordering App
A role-based, fullstack pizza ordering web application. Users can browse, add to cart, checkout; Admins can manage the food menu and track orders. Built with **MERN** stack + **Cloudinary** for image uploads and **JWT** authentication.

</div>

---

## Project Overview

piZZer is a full-fledged food ordering platform with two main roles:

- **Users:** Can sign up, browse pizzas, add to cart, place orders.
- **Admins:** Can create, update, and delete pizza items.

This project demonstrates secure authentication, role-based access control, real-time UI updates, and modern cloud deployment (Vercel).

---

>[!NOTE]
>## Features
>### For Users
>- Secure sign-up/login  
>- Browse pizza catalog 
>- View details with image, size, price 
>- Add to cart and checkout  
>- Responsive UI 
>
>### For Admins
>- Secure sign-up/login  
>- Admin Dashboard  
>- Add pizzas with image upload 
>- Protected admin routes

---

<div align="center">

| Layer      | Tech Stack |
|------------|-----------|
|Frontend|![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)|
|Backend|![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)|
|Database|![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logoColor=white)|
|Auth|![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)|
|Cloud Upload|![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)|
|Deploy|![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)|

</div>

---

## Directory Structure

```bash


Recovaid/
│
├── client/
│   ├── public/                   # Static assets
│   ├── src/                      # React source files
│   │   ├── assets/               # Images, fonts, etc.
│   │   ├── configs/              # config file for environment vars
│   │   ├── components/           # Reusable UI components
│   │   ├── pages/                # Page-level components
│   │   ├── App.js
│   │   └── index.js
│   │
│   ├── .env                      # Environment variables
│   ├── package.json              # client meta data
│   ├── package-lock.json         # dependency tree
│   ├── eslint.config.js        
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── vercel.json               # Vercel deployment config
│
│
├── server/                       # Express backend
│   ├── src/
│   │   ├── configs/              # Config file for environment vars
│   │   ├── controllers/          # Route controllers (handle req/res)
│   │   ├── services/             # Business logic layer
│   │   ├── repositories/         # Data access logic (DB queries)
│   │   ├── validations/          # JOI / custom validation logic
│   │   ├── schemas/              # Mongoose schemas/models
│   │   ├── routes/               # Route definitions
│   │   ├── utils/                # Misc utilities (e.g., nodemailer)
│   │   └── index.js              # App entry point
│   │
│   ├── .env                      # Environment variables
│   ├── package.json              # Server meta data
│   ├── package-lock.json         # dependency tree
│   └── vercel.json               # Vercel deployment config
│
│
├── README.md                     # Project documentation
└── LICENSE                       # License file

```

---

<br>
<p align="center"><a href="https://github.com/Nilanjan-Mondal/piZZer/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=BSD&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a></p>
