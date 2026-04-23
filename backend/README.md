# Backend API

## Test APIs
- Base: http://localhost:5001/
- Swagger (after deps): http://localhost:5001/api-docs

## Endpoints (add @swagger tags)
- POST /api/auth/register
- POST /api/auth/login
- GET /api/products (filters seasonal/size)
- POST /api/orders
- PUT /api/orders/:id/status (admin)

## Swagger Setup
npm i swagger-ui-express swagger-jsdoc
Import in index.ts: app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
