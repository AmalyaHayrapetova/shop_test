import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {
  showCartDlg,
  deleteCartItem,
  updateCartItemQnt,
} from "../../Redux/Actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";

const CartRow = (props) => {
  let { item } = props;
  return (
    <TableRow>
      <TableCell>
        <Link to={`/details/${item[0].id}`}>
          <div
            onClick={() => {
              props.dispatch(showCartDlg(false));
            }}
          >
            {item[0].ProductName}
          </div>
        </Link>
      </TableCell>
      <TableCell>{item[0].Price}$</TableCell>
            <TableCell>{item.size}</TableCell>
      <TableCell>
        <TextField
          type="number"
          style={{ width: 40 }}
          value={item.quantity}
          onChange={(e) => {
            let quantity = parseInt(e.target.value, 10);
            if (quantity < 0) return;
            props.dispatch(
              updateCartItemQnt({
                id: item[0].id,
                quantity,
              })
            );
          }}
        />
      </TableCell>
      <TableCell>
        <Button
          color="secondary"
          onClick={() => {
            props.dispatch(deleteCartItem(item.id));
          }}
        >
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default CartRow;
