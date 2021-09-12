const User = require('../db/models/User');
const capitalize = require('../utils/capitalize');
module.exports = async (req, res) => {
  try {
    let { _id, name, email, phone, city, state, country, area } = req.body;
    name = name && capitalize(name);
    state = state && capitalize(state);
    city = city && capitalize(city);
    country = country && capitalize(country);
    area = area && capitalize(area);
    const doesExist = await User.findOne({ email });
    if(doesExist && doesExist.id!==_id)
      return res.status(400).json({ msg: 'Email already exists, please try a different one.' });
    const user = await User.findByIdAndUpdate(
      _id,
      {
        name: name && name,
        email: email && email,
        phone: phone && phone,
        city: city && city,
        state: state && state,
        country: country && country,
        area: area && area,
      },
      {
        new: true,
      },
    );
    if (!user) return res.status(401).json({ msg: "User doesn't exist.'" });
    res.json({ data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Internal Server Error.' });
  }
};
