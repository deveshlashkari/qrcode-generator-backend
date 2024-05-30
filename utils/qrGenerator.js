// backend/utils/qrGenerator.js
const QRCode = require("qrcode");

const generateQRCode = async (data, options, format) => {
  try {
    let qrCode;
    if (format === "png") {
      qrCode = await QRCode.toDataURL(data, options);
    } else if (format === "svg") {
      qrCode = await QRCode.toString(data, { ...options, type: "svg" });
    } else if (format === "pdf") {
      // Example: using svg-to-pdfkit for PDF
      // qrCode = await generatePdfQRCode(data, options);
    }
    return qrCode;
  } catch (error) {
    throw new Error("Failed to generate QR code");
  }
};

module.exports = generateQRCode;
