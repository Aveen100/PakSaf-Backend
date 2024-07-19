const { TotalOrder } = require("../models/orderModel"); // Assuming models directory

exports.createTotalOrder = async (req, res) => {
  const { Location, UserId, Name, Email, OrderStatus } = req.body;
  try {
    // Check for existing order with OrderStatus 1 for the same UserId
    const existingOrder = await TotalOrder.findOne({
      where: {
        UserId,
        OrderStatus: { $in: [1, 2] },
      },
    });

    if (existingOrder) {
      return res.status(409).send({ message: "Order already in the Queue" });
    }

    const newOrder = await TotalOrder.create({
      Location: JSON.stringify(Location),
      UserId,
      Name,
      Email,
      OrderStatus, // Assuming initial order status is 1 (pending)
    });

    res.status(201).send({
      message: "Order Placed Successfully",
      code: 200,
      data: newOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating order" });
  }
};

exports.GetAllOrders = async (req, res) => {
  try {
    // Check for existing order with OrderStatus 1 for the same UserId
    const Orders = await TotalOrder.findAll();

    res.status(200).send(Orders);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error fetching order" });
  }
};

exports.updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { OrderStatus, Price, Weight, Rider, RiderId } = req.body;

  try {
    const order = await TotalOrder.findByPk(id);
    if (order) {
      order.OrderStatus = OrderStatus;
      order.Price = Price;
      order.Weight = Weight;
      if (order.OrderStatus != 4) {
        order.Rider = Rider;
        order.RiderId = RiderId;
      }
      await order.save();
      res.status(200).json({
        message: "Order status updated successfully",
        order,
        code: 200,
      });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};
