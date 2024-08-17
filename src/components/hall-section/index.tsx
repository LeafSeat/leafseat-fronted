"use client";

import { useRouter } from "next/navigation";
import {
  Container, Row, Col,
} from "react-bootstrap";
import {
  Button,
} from "@radix-ui/themes";
import { useState } from "react";

function HallSelection() {
  const router = useRouter();

  const RselectHall = (hallId:number,rool:number) => {
    router.push(`/seats/${rool}/${hallId}`);
  };
  const CselectHall = (hallId:number,rool:number) => {
    router.push(`/seats/${rool}/${hallId}`);
  };
  const list = new Array(5).fill(0);
  const _list = new Array(5).fill(0);

  return (
    <Container className="text-center mt-5">
      <h1 className="mb-4">选择放映厅</h1>
      <Row>
        <h1>Renter</h1>
        {
          list.map((hallId, index) => (
            <Col>
              <Button className="!bg-[#4FC3F7]" variant="primary" onClick={() => RselectHall(index + 1,0)}>
                放映厅
                {index + 1}
              </Button>
            </Col>
          ))
        }

        <h1>Cinema</h1>
        {
          _list.map((hallId, index) => (
            <Col>
              <Button className="!bg-[#4FC3F7]" variant="primary" onClick={() => CselectHall(index + 1,1)}>
                放映厅
                {index + 1}
              </Button>
            </Col>
          ))
        }

        {/* <Col>
          <Button variant="primary" onClick={() => selectHall(1)}>放映厅 1</Button>
        </Col>
        <Col>
          <Button variant="primary" onClick={() => selectHall(2)}>放映厅 2</Button>
        </Col> */}
      </Row>
      {/* 你可以添加更多的放映厅选项 */}
    </Container>
    
  );
}

export default HallSelection;
