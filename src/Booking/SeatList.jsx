import React from "react";
import "./SeatList.scss";
import SeatItem from "./SeatItem";
import { useTicketContext } from "./TicketsContext";

export default function SeatList({ seatList }) {
  console.log('seatList: ', seatList);
  const context = useTicketContext();
  console.log('context: ', context);

  // Check if the context is available
  if (!context) {
    return null; // or handle loading state
  }

  const { selectSeats, handleSelected } = context;

  return (
    <div className="seatlist">
      <div className="mx-auto">
        <h6 className="screen">MÀN HÌNH</h6>
        <div className="seatlistContent">
          {seatList?.map((seat) => {
            const isSelected = selectSeats.find(
              (item) => item.maGhe === seat.maGhe
            );
            return (
              <SeatItem
                handleSelected={handleSelected}
                isSelected={isSelected}
                key={seat.maGhe}
                seat={seat}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
