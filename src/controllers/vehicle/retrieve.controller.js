const retrieveVehicle = (req, res) => {
  res.status(200).json(req.company.vehicles);
};

export default retrieveVehicle;
