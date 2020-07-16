import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import madrasha from '../../assets/fakeData/madrasha';
import SingleItem from '../../components/SingleItem/SingleItem';


const Madrasha = () => {

    const [madrasa, setMadrasa] = useState([]);
    useEffect(() => {
        const madrashaData = madrasha;
        setMadrasa(madrashaData);
    }, []);
    return (
        <div className="madrasha-area">
            <Container>
                <Grid container spacing={3}>
                    {
                        madrasa.map((friend, key) =>
                            <Grid item xs={12} sm={4} key={key}>
                                <Paper classNam="">
                                    <SingleItem friend={friend}></SingleItem>
                                </Paper>
                            </Grid>
                        )
                    }

                </Grid>
            </Container>
        </div>
    );
};

export default Madrasha;