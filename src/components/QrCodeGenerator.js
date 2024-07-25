// src/components/QrCodeGenerator.js
import React from 'react';
import QRCode from 'qrcode.react';

const QrCodeGenerator = ({ url, size = 'mid' }) => {
  const getSize = (size) => {
    switch (size) {
      case 'large':
        return 256;
      case 'mid':
        return 186;
      case 'small':
        return 128;
      default:
        return 186;
    }
  };

  return (
    <div>
      <QRCode value={url} size={getSize(size)} level="H" includeMargin={true} />
    </div>
  );
};

export default QrCodeGenerator;
