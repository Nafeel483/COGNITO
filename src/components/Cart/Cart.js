import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import CartFolders from "./CartFolders";
import { Button } from "@material-ui/core";
import colors from "../../assets/colors";
import assets from "../../assets/assets";
import AddPaymentDialog from "./AddPaymentDialog";

const Cart = () => {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [num, setNum] = React.useState("");
  const [expiry, setExpiry] = React.useState("");
  const [cvc, setCvc] = React.useState("");

  const handleSubmit = (name, num, expiry, cvc) => {
    setName(name)
    setNum(num)
    setExpiry(expiry)
    setCvc(cvc)    
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          className={classes.title}
          color="primary"
          variant="h6"
          component="h6"
        >
          {"Shopping Cart"}
        </Typography>

        <Grid container>
          <CartFolders />
        </Grid>

        <Grid container>
          <Grid item xs={12} md={4}>
            <Grid item xs={12}>
              <Typography
                className={classes.paymentTitle}
                variant="h6"
                component="h6"
              >
                Payment method
              </Typography>
            </Grid>

            {!name && <Grid item xs={12} className={classes.addPaymentWrapper}>
              <img
                className={classes.payment_methods}
                alt="payment-methods"
                src={assets.payment_method}
              />
              <AddPaymentDialog handleSubmit={handleSubmit}/>
            </Grid>}

            {name && 
              <Grid container>
              <Grid item xs={4} className={classes.addPaymentWrapper}>
                <img
                  className={classes.payment_methods}
                  alt="payment-methods"
                  src={assets.mastercard}
                />
              </Grid>
                <Grid item xs={8} className={classes.cardDetail} >
                  <Typography className={classes.text}>
                    {name}
                  </Typography>
                  <Typography>
                    {num}
                  </Typography>
                  <div className={classes.group}>
                    <Typography className={classes.text}>
                      {expiry}
                    </Typography>
                    <Typography className={classes.text}>
                      {cvc}
                    </Typography>
                  </div>
                </Grid>
                          
            </Grid>
            }
          </Grid>

          <Grid xs={12} md={3} className={classes.totalWrapper}>
            <Grid item xs={12}>
              <Typography
                className={classes.totalTitle}
              >
                Total Bill
              </Typography>
            </Grid>

            <Grid item xs={12} className={classes.cartRow}>
            <Typography
              className={classes.rowTitle}
              variant="h6"
              component="h6"
            >
              Total items
            </Typography>

            <Typography
              className={classes.rowValueTitle}
              variant="h6"
              component="h6"
            >
              2
            </Typography>
          </Grid>

          <Grid item xs={12} className={classes.cartRow}>
            <Typography
              className={classes.rowTitle}
            >
              Subtotal
            </Typography>

            <Typography
              className={classes.rowValue}
              variant="h6"
              component="h6"
            >
              ${198}
            </Typography>
          </Grid>
          <Grid xs={12} className={classes.proceed}>
            <Button variant="contained" style={{ flex: 1}} color="primary">
              Proceed
            </Button>
          </Grid>
        </Grid>

          
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cart;

const useStyles = makeStyles({
  title: {
    marginTop: 10,
    fontStyle: "normal",
    fontWeight: 600,
    fontWize: 24,
  },
  create: {
    position: "absolute",
    right: 80,
    bottom: 50,
  },
  titleWrapper: {
    marginTop: 20,
  },
  foldersTitle: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  count: {
    marginLeft: 5,
  },
  addPaymentWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paymentTitle: {
    color: colors.primary,
  },
  payment_methods: {
    width: 100,
    marginTop: 10,
  },
  cartRow: {
    display: 'flex',
    justifyContent: 'space-between',
    color: colors.primary
  },
  rowTitle: {
    fontSize: 20,
    fontWeight: 'normal',
    color: colors.textPrimary
  },
  rowValue: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  totalTitle: {
    fontSize: 24,
    fontWeight: 600,
    color: colors.primary,
    paddingBottom: 15
  },
  totalWrapper: {
    padding: "5px 100px"
  },
  proceed: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 20
  },
  cardDetail: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 12,
    color: colors.primary,
    paddingTop: 20
  },
  group: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 12,
    fontWeight: 700,
    color: colors.primary
    
  }
});
