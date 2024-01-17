import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTickets } from "../../services/quanlyticket";
import DetailSeat from "./DetailSeat";
import SeatList from "./SeatList";
import "./Tickets.scss";
import Loading from "../../components/Loading/Loading";
import Footer from "../../templates/UserTemplate/Footer";
import Header from "../../templates/UserTemplate/Header";

const Tickets = () => {
  const { showtimeId } = useParams();
  const [ticketsList, setTicketsList] = useState({
    danhSachGhe: [],
    thongTinPhim: {},
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Showtime ID:", showtimeId);
    const fetchTickets = async () => {
      try {
        const data = await getTickets(showtimeId);
        console.log("Tickets data:", data);
        setTicketsList(data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, [showtimeId]);

  console.log("Tickets List:", ticketsList);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Header />
      <div className="tickets flex flex-col md:flex-row">
        <div className="md:w-8/12">
          <SeatList seatList={ticketsList.danhSachGhe} />
          <div className="btnList flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <div className="btnGroup flex items-center">
              <button className="btnDisable btnItem">X</button>
              <p>Đã đặt</p>
            </div>
            <div className="btnGroup flex items-center">
              <button className="btnItem"></button>
              <p>Thường</p>
            </div>
            <div className="btnGroup flex items-center">
              <button className="btnVip btnItem"></button>
              <p>Vip</p>
            </div>
          </div>
        </div>
        <div className="md:w-4/12">
          <DetailSeat infoCinema={ticketsList.thongTinPhim} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tickets;
