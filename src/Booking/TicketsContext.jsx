import React, { createContext, useContext, useState } from "react";

const TicketsContext = createContext();

const TicketProvider = ({ children }) => {
  const [selectSeats, setSelectSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelected = (seat) => {
    const isSelected = seat.isSelected;

    if (isSelected) {
      setSelectSeats([...selectSeats, seat]);
      setTotalPrice(totalPrice + seat.giaVe);
    } else {
      const updatedSeats = selectSeats.filter(
        (item) => item.maGhe !== seat.maGhe
      );
      setSelectSeats(updatedSeats);
      setTotalPrice(totalPrice - seat.giaVe);
    }
  };

  const handleBooking = () => {
    setSelectSeats([]);
    setTotalPrice(0);
  };

  return (
    <TicketsContext.Provider
      value={{ selectSeats, totalPrice, handleSelected, handleBooking }}
    >
      {children}
    </TicketsContext.Provider>
  );
};

export default TicketProvider;

export const useTicketContext = () => {
  const value = useContext(TicketsContext);
  return value;
};
