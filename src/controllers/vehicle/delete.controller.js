const deleteVehicle = async (req, res) => {
  const { plate } = req.params;

  const { company } = req;

  company.vehicles = company.vehicles.filter((vehicle) => vehicle.plate !== plate);

  res.status(200).json({ messagem: 'Vehicle deleted', vehicles: company.vehicles });
};

export default deleteVehicle;
