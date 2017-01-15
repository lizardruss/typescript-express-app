export function index(router) {
  
  router.get('/', (request, response, next)=> {
    response.json({
      message: 'Hello World!'
    });
  });

};