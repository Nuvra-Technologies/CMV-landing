"use client";

import QRCode from "react-qr-code";

export type BookingQRCodeProps = {
  size?: number;
  value: string;
};

export function BookingQRCode({ size = 176, value }: BookingQRCodeProps) {
  return (
    <div className="inline-flex rounded-2xl border border-white bg-white p-4 shadow-sm">
      <QRCode value={value} size={size} fgColor="#172033" bgColor="#ffffff" />
    </div>
  );
}