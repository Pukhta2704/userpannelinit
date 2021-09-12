require('dotenv').config();
const User = require('../db/models/User');
const capitalize = require('../utils/capitalize');

module.exports = async (req, res) => {
  try {
    let { name, email, phone, city, state, country, area } = req.body;
    if (!name || !email || !phone || !city || !state || !country || !area)
      return res.status(400).json({ msg: 'All fields are required.' });
    const doesExist = await User.findOne({ email });
    if (doesExist) return res.status(401).json({ msg: 'Email already exists.' });
    name = capitalize(name);
    state = capitalize(state);
    city = capitalize(city);
    country = capitalize(country);
    area = capitalize(area);
    const user = new User({
      name,
      email,
      phone,
      city,
      state,
      country,
      area,
    });
    await user.save();
    return res.status(200).json({ data: user });
  } catch (error) {
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};
