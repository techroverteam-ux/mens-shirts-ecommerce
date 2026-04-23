# Men&#39;s Seasonal Shirts E-Commerce Platform

## Overview
Full-stack e-commerce for men&#39;s seasonal shirts (premium UI/UX for Indian users). Next.js frontend, Express/MongoDB backend, Razorpay + Shiprocket.

## Tech Stack
- Frontend: Next.js 14, Tailwind CSS
- Backend: Node.js/Express, Mongoose/MongoDB
- Auth: JWT
- Payments: Razorpay
- Logistics: Shiprocket

## Quick Start (Local Dev)

1. Clone/setup:
```bash
cd mens-shirts-ecommerce
cp .env.example .env  # Fill API keys
```

2. Start MongoDB:
```bash
docker-compose up -d
```

3. Backend:
```bash
cd backend
npm install
npm run dev  # http://localhost:5000
```

4. Frontend:
```bash
cd frontend
npm install
npm run dev  # http://localhost:3000
```

## Structure
- `frontend/` - Customer site + admin panels
- `backend/` - APIs + services
- `docker-compose.yml` - Local MongoDB

## Deployment
- Frontend: Vercel
- Backend: Render / Railway
- DB: MongoDB Atlas

## API Docs
Swagger/Postman collection: backend/docs later.

Seed data: `npm run seed` in backend.

