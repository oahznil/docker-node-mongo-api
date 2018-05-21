import mv from '../middleware/request.middleware';
import orders from '../controllers/order.controller';

const routes = (app) => {
  app.use(mv.logInboundRequest);

  app.route('/api/orders').get(orders.getOrdersAsync);
  app.route('/api/orders/:id').get(orders.getOrderByIdAsync);
  app.route('/api/orders').post(orders.createOrderAsync);
  app.route('/api/orders/:id').put(orders.updateOrdersAsync);
  app.route('/api/orders/:id').delete(orders.deleteOrdersAsync);
};

export default routes;
