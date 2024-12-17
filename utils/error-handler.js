export const errorHandler = (err, req, res, next) => {
    const statusCode = err == undefined ? err.statusCode : 500;
    const message = err.message || "Internal Server Error";
  
    res.status(statusCode).json({ error: message });
  };
  