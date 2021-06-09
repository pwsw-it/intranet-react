import { Grid, Card, CardContent, Theme, Typography, CardActions, Button,
    withStyles } from '@material-ui/core'
import React from 'react'

type ContactProps = {
    id? : number,
    nazwisko? : string,
    tel? : string,
    email? : string,
    link? : string,
    funkcja? : string,
    classes? : any
}

const styleContact = (theme : Theme) => 
(  {
         root: { color : 'green', 
                },
         title : { color : 'red'},
         pos : { color : 'blue'},
         wdiv: {width:'100%'}
     }
 )

class Contact extends React.Component<ContactProps>{

    render() {
        const classes = this.props.classes

        return (
          <Grid item xl={3} xs={4} >
            <Card className={classes.root} id={this.props.id?this.props.id.toString():'0'}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                { this.props.nazwisko }
              </Typography>
              <Typography variant="h5" component="h2">
              { this.props.tel }
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
              { this.props.email }
              </Typography>
              <Typography variant="body2" component="p">
              { this.props.funkcja }
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">{ this.props.link }</Button>
            </CardActions>
          </Card>
         </Grid>
        )
    }
}

export default withStyles(styleContact)(Contact)