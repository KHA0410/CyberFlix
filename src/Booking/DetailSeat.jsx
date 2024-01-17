import React, { useState } from "react";
import { Button, message } from "antd";
import "./DetailSeat.scss";
import { useTicketContext } from "./TicketsContext";
import { bookTickets } from "../../services/quanlyticket";
import Loading from "../../components/Loading/Loading";
import BookingSuccessModal from "./BookingSuccessModal";

const DetailSeat = ({ infoCinema }) => {
  console.log("infoCinema:", infoCinema);

  const { totalPrice, selectSeats, handleBooking } = useTicketContext();
  const [isLoading, setIsLoading] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const listTickets = selectSeats.map((seat) => ({
    maGhe: seat.maGhe,
    giaVe: seat.giaVe,
  }));

  // const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleBookTickets = async () => {
    // if (!isAuthenticated) {
    //   // Show a message or redirect to the login page
    //   message.warning("Vui lòng đăng nhập để đặt vé.");
    //   // Or redirect to the login page
    //   // navigate("/login");
    //   return;
    // }

    if (selectSeats.length === 0) {
      message.error("Vui lòng chọn ghế trước khi đặt vé.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await bookTickets({
        maLichChieu: infoCinema.maLichChieu,
        danhSachVe: listTickets,
      });

      console.log("Booking response:", response);

      // handleBooking is a function to handle the booking process
      handleBooking();

      setIsModalVisible(true);
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error("Error booking tickets:", error);
      message.error(
        "Đã có lỗi xảy ra khi đặt vé. Vui lòng đăng nhập trước khi đặt vé!"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const ticketItems = [
    { label: "Cụm rạp:", value: infoCinema?.tenCumRap },
    { label: "Địa chỉ:", value: infoCinema?.diaChi },
    { label: "Rạp:", value: infoCinema?.tenRap },
    { label: "Ngày chiếu:", value: infoCinema?.ngayChieu },
    { label: "Tên phim:", value: infoCinema?.tenPhim },
  ];

  if (isLoading) {
    return <Loading />;
  }

  // Function to handle modal close
  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="detailtickets">
      <div className="detailticketsPrice">
        <h3>
          {totalPrice.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
        </h3>
      </div>
      {ticketItems.map((item, index) => (
        <div className="detailticketsItem" key={index}>
          <p>{item.label}</p>
          <p>{item.value}</p>
        </div>
      ))}
      <div className="detailticketsItem">
        <p>Chọn:</p>
        <p>
          {selectSeats.map((seat, index) => (
            <span key={index} className="detailticketsNumberseat">
              Ghế: {seat.tenGhe},
            </span>
          ))}
        </p>
      </div>
      <div className="detailticketsBtn">
        <Button
          className="w-full bg-red-500 text-white font-bold rounded"
          loading={isLoading}
          onClick={handleBookTickets}
        >
          <span className="inline-block align-middle">ĐẶT VÉ</span>
        </Button>
      </div>

      <BookingSuccessModal
        open={isModalVisible}
        onCancel={handleModalClose}
        bookingInfo={{
          tenPhim: infoCinema?.tenPhim,
          ngayChieu: infoCinema?.ngayChieu,
          tenRap: infoCinema?.tenRap,
        }}
      />
    </div>
  );
};

export default DetailSeat;
