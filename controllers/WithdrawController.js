const { Withdraw } = require("../models/WithdrawModel"); // Assuming models directory

exports.createWithdraw = async (req, res) => {
  const { UserId, Name, Email, Phone, Status ,Price} = req.body;
  try {
    const WithdrawalRequest = await Withdraw.create({
      UserId,
      Name,
      Email,
      Phone,
      Status,
      Price
    });

    res.status(201).send({
      message: "Withdrawal Request Added Successfully",
      code: 200,
      data: WithdrawalRequest,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating request" });
  }
};

exports.GetAllWithdrawals = async (req, res) => {
  try {
    const AllRequests = await Withdraw.findAll();
    res.status(200).send(AllRequests);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error fetching order" });
  }
};

exports.updateWithdrawRequest = async (req, res) => {
  const { id } = req.params;
  const { UserId, Name, Email, Phone, Status ,Price,Method} = req.body;
  try {
    const request = await Withdraw.findByPk(id);
    console.log(request)
    if (request) {
      request.UserId = UserId;
      request.Name = Name;
      request.Email = Email;
      request.Phone = Phone;
      request.Status = Status;
      request.Method = Method;
      request.Price = Price;

      await request.save();
      res.status(200).json({
        message: "Withdraw Request updated successfully",
        request,
        code: 200,
      });
    } else {
      res.status(404).json({ message: "Withdraw not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};
