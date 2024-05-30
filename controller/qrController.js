const generateQRCode = require("../utils/qrGenerator");

const generateQR = async (req, res) => {
  const { data, options, format } = req.body;

  try {
    const qrCode = await generateQRCode(data, options, format);
    res.send({ qrCode });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { generateQR };
