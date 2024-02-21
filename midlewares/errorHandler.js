const errorHandler = (err, req, res, next) => {
    console.error(err.stack); 
    const message = err.message || 'Ocurrió un error en el servidor';
    res.status(500).json({ error: message });
  };
  
  export default errorHandler;
  