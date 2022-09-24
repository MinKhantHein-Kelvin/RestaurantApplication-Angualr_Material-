const router = require("express").Router();
const Restaurant = require("../modal/Restaurant");
const verify = require("../router/verify");

// create
router.post("/", verify, async (req, res) => {
  const createRestaurant = new Restaurant({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    address: req.body.address,
    types: req.body.types,
  });
  try {
    const listingSave = await createRestaurant.save();
    res.send(listingSave);
  } catch (error) {
    res.json({ message: error });
  }
});

// read all data
router.get("/", async (req, res) => {
  try {
    const readData = await Restaurant.find();
    res.send(readData);
  } catch (error) {
    res.json({ message: error });
  }
});

// read single data
router.get("/:restaurantId", async (req, res) => {
  try {
    const singleData = await Restaurant.findOne({
      _id: req.params.restaurantId,
    });
    res.send(singleData);
  } catch (error) {
    res.json({ message: error });
  }
});

// update data
router.put("/:updateId",verify, async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      address: req.body.address,
      types: req.body.types,
    };
    const updateData = await Restaurant.findByIdAndUpdate(
      { _id: req.params.updateId },
      data
    );
    res.send(updateData);
  } catch (error) {
    res.json({ message: error });
  }
});

// delete data
router.delete("/:deleteId",verify, async (req, res) => {
  try {
    const deletedata = await Restaurant.findByIdAndRemove(req.params.deleteId);
    res.send(deletedata);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
