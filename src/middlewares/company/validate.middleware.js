const validateSchema = (schema) => async (req, res, next) => {
  const resource = req.body;
  try {
    await schema.validate(resource, {
      abortEarly: false,
      stripUnknown: true,
    });
    next();
  } catch (e) {
    console.error(e.errors);
    res.status(400).json({ error: e.errors.join(', ') });
  }
};

export default validateSchema;
