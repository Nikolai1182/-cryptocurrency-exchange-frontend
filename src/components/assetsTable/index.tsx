// import React from "react";
// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";
// import { useStyles } from "./styles";

// export default function AssetsTableComponent(props: any) {
//   const { data } = props;
//   console.log("data assets", data);

//   const classes = useStyles();
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>№</TableCell>
//             <TableCell>Название</TableCell>
//             <TableCell align="right">Цена</TableCell>
//             <TableCell align="right">Изменение ($)</TableCell>
//             <TableCell align="right">Изменение (%)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data?.map((element: any, i: number) => (
//             <TableRow
//               key={element.id}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {i + 1}
//               </TableCell>
//               <TableCell component="th" scope="row">
//                 {element.name}
//               </TableCell>
//               <TableCell align="right">{element.current_price}</TableCell>
//               <TableCell
//                 align="right"
//                 className={
//                   element.price_change_24h > 0
//                     ? `${classes.priceUp}`
//                     : `${classes.priceDown}`
//                 }
//               >
//                 {element.price_change_24h.toFixed(2)}
//               </TableCell>
//               <TableCell
//                 align="right"
//                 className={
//                   element.price_change_percentage_24h > 0
//                     ? `${classes.priceUp}`
//                     : `${classes.priceDown}`
//                 }
//               >
//                 {element.price_change_percentage_24h.toFixed(2)}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
