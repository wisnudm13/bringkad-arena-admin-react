import { useState } from "react"
import DataTable from "./Table"
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card,  IconButton, TablePagination} from "@mui/material";

export default function UserTable({userListData}) {
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    return (
        <div style={{ height: 400, width: '100%', padding: 30 }}>
            <TableContainer component={Card}>
                <Table aria-label="simple table">
                    <TableHead
                        // sx={{
                        //     backgroundColor: "green"
                        // }}
                    >
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Created</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Phone Number</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userListData.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left">{row.created_at}</TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.phone_number}</TableCell>
                                <TableCell>
                                    <div style={{ display: "flex"}}>
                                    <Button 
                                        sx={{ 
                                            borderRadius: 2,
                                            color: "red", 
                                            borderColor: "red",
                                            '&:hover': {
                                                backgroundColor: 'red',
                                                color: 'white',
                                                borderColor: "red"
                                            },
                                        }} 
                                        variant="outlined">
                                            <DeleteOutlineOutlinedIcon />
                                    </Button>
                                    <Button 
                                        sx={{ 
                                            textAlign: "center",
                                            borderRadius: 2,
                                            color: "green", 
                                            borderColor: "green",
                                            '&:hover': {
                                                backgroundColor: 'green',
                                                color: 'white',
                                                borderColor: "green"
                                            },
                                        }} 
                                        variant="outlined">
                                            <CreateOutlinedIcon />
                                    </Button>
                                    </div>
                                </TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={userListData.length}
                rowsPerPage={10}
                page={1}
                // onPageChange={handleChangePage}
                // onRowsPerPageChange={handleChangeRowsPerPage}
            />
          {/* <DataGrid
            rows={userListData}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
            
          /> */}
        </div>
      );



// export default function BasicTable() {
//   return (
  
//   );
// }

}