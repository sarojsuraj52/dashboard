import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import '../../styles/Dashboard/OrderTable.css'
import Avatar from '@mui/material/Avatar';
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'

const images = [img1, img2,img3, img4, img5, img6]

const customers = [
  {
    customer: "John Doe",
    orders: 12345678,
    amount: 250.0,
    status: "Delivered",
  },
  {
    customer: "Jane Smith",
    orders: 87654321,
    amount: 150.0,
    status: "Cancelled",
  },
  {
    customer: "Alice Johnson",
    orders: 23456789,
    amount: 300.02,
    status: "Delivered",
  },
  {
    customer: "Bob Brown",
    orders: 98765432,
    amount: 200.0,
    status: "Pending",
  },
  {
    customer: "Charlie Green",
    orders: 34567890,
    amount: 175.04,
    status: "Cancelled",
  },
  {
    customer: "Emily White",
    orders: 87651234,
    amount: 225.0,
    status: "Delivered",
  },
];


export default function OrderTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:600}}>Customers</TableCell>
            <TableCell sx={{fontWeight:600}}>Order No.</TableCell>
            <TableCell sx={{fontWeight:600}}>Amount</TableCell>
            <TableCell sx={{fontWeight:600}}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 'none !important' } }}
            >
              <TableCell>
                <div style={{display:'flex', alignItems:'center'}}>
                <Avatar alt={row.customer} src={images[index]} sx={{marginRight:'10px'}}/>
                    {row.customer}
                    </div>
                    </TableCell>

              <TableCell>{row.orders}</TableCell>
              <TableCell>{`$`+row.amount.toFixed(2)}</TableCell>
              <TableCell >
                <span className={row.status == 'Delivered'?'delivered':'cancelled'}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
