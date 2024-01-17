import React from "react";
import { Modal } from "antd";

const BookingSuccessModal = ({ open, onCancel, bookingInfo }) => {
  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#54ab35",
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      title={<div style={titleStyle}>Đặt vé thành công</div>}
      footer={null}
      className="w-full max-w-md mx-auto "
    >
      <p className="mb-4 font-semibold text-lg">
        Tên phim: {bookingInfo.tenPhim}
      </p>
      <p className="mb-4 font-semibold text-lg">
        Tên rạp: {bookingInfo.tenRap}
      </p>
      <p className="mb-4 font-semibold text-lg">
        Ngày chiếu: {bookingInfo.ngayChieu}
      </p>
    </Modal>
  );
};

export default BookingSuccessModal;
