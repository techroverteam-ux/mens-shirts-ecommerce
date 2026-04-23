import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Men&#39;s Shirts E-Commerce API',
      version: '1.0.0',
      description: 'Admin/Customer APIs for shirts platform'
    },
  },
  apis: ['./src/**/*.ts']
};

const specs = swaggerJsdoc(options);
export default specs;
