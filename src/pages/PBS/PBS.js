import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import pbsData from '../../assets/fakeData/pbs';
import SingleItem from '../../components/SingleItem/SingleItem';

const PBS = () => {
    const [pbs, setPbs] = useState([]);
    useEffect(() => {
       const pbsInfo = pbsData;
       setPbs(pbsInfo)
    }, []);
    return (
        <div className="pbs-area">
            
        <Container>
            <Grid container spacing={3}>
                {
                    pbs.map((friend, key) =>
                        <Grid item xs={12} sm={4} key={key}>
                            <Paper classNam="" >
                                <SingleItem friend={friend} ></SingleItem>
                                
                            </Paper>
                        </Grid>
                    )
                }

            </Grid>
        </Container>
    </div>
    );
};

export default PBS;