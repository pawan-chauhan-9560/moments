import { React, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import moments from './images/moment.jpg';
import Posts from './components/Posts/Posts';
import Form from './components/Forms/Forms';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import useStyle from './styles';

const App = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts);
    }, [dispatch]);

    return (

        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Moments</Typography>
                <img className={classes.image} src={moments} alt="moments" height={60}></img>
            </AppBar>
            <Grow in>
                <Container style>
                    <Grid container justifyContent="space-between" spacing={3} alignItems="stretch">
                        <Grid item xs={12} sm={7}></Grid>
                        <Posts />
                        <Grid item xs={12} sm={4}></Grid>
                        <Form />
                    </Grid>
                </Container>
            </Grow>
        </Container>

    )
}

export default App;
