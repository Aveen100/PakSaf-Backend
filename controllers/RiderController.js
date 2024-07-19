const { Riders } = require("../models/RiderModel"); // Assuming models directory

exports.createRider = async (req, res) => {
  const { Name, Email, Phone, Address } = req.body;
  try {
    const newOrder = await Riders.create({
      Name,
      Email,
      Phone,
      Address,
    });

    res
      .status(201)
      .send({
        message: "Rider Added Successfully",
        code: 200,
        data: newOrder,
      });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating order" });
  }
};

exports.GetAllRiders = async (req, res) => {
  try {
    const AllRiders = await Riders.findAll();
    res.status(200).send(AllRiders);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error fetching order" });
  }
};
