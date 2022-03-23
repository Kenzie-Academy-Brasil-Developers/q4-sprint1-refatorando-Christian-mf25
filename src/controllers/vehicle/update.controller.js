const updateVehicle = (req, res) => {
  const { vehicle, company } = req;

  const updatedVehicle = { ...vehicle, ...req.body };

  const index = company.vehicles.indexOf(vehicle);

  company.vehicles[index] = updatedVehicle;

  res.status(200).json({ message: 'Vehicle updated', vehicle: updatedVehicle });
};

export default updateVehicle;
