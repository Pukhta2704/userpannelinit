const User = require('../db/models/User');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ msg: 'Please identify fields properly' });
    await User.findByIdAndDelete(id);
    res.json({ data: true });
  } catch (error) {
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};
