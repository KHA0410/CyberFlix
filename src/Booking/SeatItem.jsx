import React from "react";
import "./SeatItem.scss";

export default function SeatItem({ seat, handleSelected, isSelected }) {
  const { daDat, loaiGhe, tenGhe } = seat;

  return (
    <button
      onClick={() => handleSelected({ ...seat, isSelected: !isSelected })}
      className={`seatTicket ${daDat ? "seatIsBooked" : ""} ${
        !daDat && loaiGhe === "Vip" ? "seatVip" : ""
      } ${!daDat && isSelected ? "seatIsSelected" : ""}`}
      disabled={daDat}
    >
      {daDat ? "X" : `${tenGhe}`}
    </button>
  );
}
