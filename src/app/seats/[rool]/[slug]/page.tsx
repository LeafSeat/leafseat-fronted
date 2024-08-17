"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import SeatPicker from "react-seat-picker";
import {
  Box,
  Button,
  Dialog,
  Flex,
} from "@radix-ui/themes";
import { Cross1Icon } from "@radix-ui/react-icons";
import {
  Container, Card,
} from "react-bootstrap";
import "@/styles/seats.css";
import clsx from "clsx";
import {
  Input,
} from "@nextui-org/react";
import { Buy, Cinema, Film, GetNFT1, Mint, Withdraw } from "@/components/main";

function Seats() {
  const [selected, setSelected] = useState("");
  const [seatId,setSeatId] = useState("");
  // const [startPrice, setStartPrice] = useState("");
  // const [interval, setInterval] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [open, setOpen] = useState(false);

  const { rool } = useParams();
  const { slug } = useParams();
  const room = Number(slug) - 1;
  const rows = [
    [
      { id: 0, number: "A1" },
      { id: 1, number: "A2" },
      { id: 2, number: "A3" },
      { id: 3, number: "A4" },
      { id: 4, number: "A5" },
      { id: 5, number: "A6" },
      { id: 6, number: "A7" },
      { id: 7, number: "A8" },
      { id: 8, number: "A9" },
      { id: 9, number: "A10" },
    ],
    [
      { id: 10, number: "B1" },
      { id: 11, number: "B2" },
      { id: 12, number: "B3" },
      { id: 13, number: "B4" },
      { id: 14, number: "B5" },
      { id: 15, number: "B6" },
      { id: 16, number: "B7" },
      { id: 17, number: "B8" },
      { id: 18, number: "B9" },
      { id: 19, number: "B10" },
    ],
    [
      { id: 20, number: "C1" },
      { id: 21, number: "C2" },
      { id: 22, number: "C3" },
      { id: 23, number: "C4" },
      { id: 24, number: "C5" },
      { id: 25, number: "C6" },
      { id: 26, number: "C7" },
      { id: 27, number: "C8" },
      { id: 28, number: "C9" },
      { id: 29, number: "C10" },
    ],
    [
      { id: 30, number: "D1" },
      { id: 31, number: "D2" },
      { id: 32, number: "D3" },
      { id: 33, number: "D4" },
      { id: 34, number: "D5" },
      { id: 35, number: "D6" },
      { id: 36, number: "D7" },
      { id: 37, number: "D8" },
      { id: 38, number: "D9" },
      { id: 39, number: "D10" },
    ],
  ];
  const price = 30;
  const totalprice = price * (selected ? 1 : 0);

  const addSeatCallback = ({ row, number, id }, addCb, removeCb) => {
    // 如果已有选中的座位，先取消选中
    if (selected) {
      removeSeatCallback({ row, number: selected }, removeCb);
    }

    // 更新选中的座位
    setSelected(number);
    setSeatId(id);
    const newTooltip = `tooltip for id-${id} added by callback`;
    addCb(row, number, id, newTooltip);
  };

  const removeSeatCallback = ({ row, number }, removeCb) => {
    setSelected(null);
    setSeatId(null);
    removeCb(row, number);
  };

  return (
    <Container className="mt-5 container">
      <Film room = {room}/>
      <h2>
        当前放映厅:
        {slug}
      </h2>
      <div className="screens">
        <h3 className="screen">SCREEN</h3>
      </div>
      <h5 className="seat_price">CLASSIC $30</h5>
      <div className="seat-picker">
        <SeatPicker
          addSeatCallback={(...args:any) => addSeatCallback(...args, removeSeatCallback)}
          removeSeatCallback={removeSeatCallback}
          rows={rows}
          alpha
          maxReservableSeats={1} // 限制最多只能选一个座位
          visible
        />
      </div>
      {selected ? (
        <Card className="mt-4 card-container">
          <Card.Body className="card-body">
            <div className="card-title-row">
              <Card.Title className="card-title">
                SEAT:
                {selected}
              </Card.Title>
              <Card.Title className="card-title">
                Price: $
                {totalprice}
              </Card.Title>
            </div>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger>
                <Button
                  className="w-200px !bg-[#4FC3F7]"
                >
                  Continue
                </Button>
              </Dialog.Trigger>
              <Dialog.Content maxWidth="380px" minHeight="600px">
                <Flex justify="between" align="center" className="mb-2">
                  {/* <span className="font-bold text-lg">Info</span> */}

                  <Dialog.Close>
                    <Cross1Icon className="cursor-pointer" />
                  </Dialog.Close>
                </Flex>

                {Number(rool) == 0 ? (
                  <GetNFT1 room = {room} seat = {seatId}/>

                ) : (
                  <Cinema room={room} seat={seatId}/>
                )}


                
              </Dialog.Content>
            </Dialog.Root>
          </Card.Body>
        </Card>
      ) : null}
    </Container>
  );
}
export const dynamicParams = false;
export default Seats;
