import React, { useState, useEffect } from 'react';
// import { Container } from '@material-ui/core';
import Slider from '../../components/Slider/Slider';
import { Container, Grid, Paper } from '@material-ui/core';
import madrashaInfo from '../../assets/fakeData/madrasha';
import pbsInfo from '../../assets/fakeData/pbs';
import SingleItem from '../../components/SingleItem/SingleItem';

import './Home.scss';

const Home = () => {
    const [madrasa, setMadrasa] = useState([]);
    const [pbs, setPbs]= useState([])
    

    useEffect(() => {
        const madrasaData = madrashaInfo.slice(0, 3);
        setMadrasa(madrasaData);
    }, []);
    useEffect(() => {
        const pbsData = pbsInfo.slice(0, 3);
        setPbs(pbsData);
    }, []);
    return (
        <main>
            <div className="slider-area">
                <Slider></Slider>
            </div>
            <section className="madrasa-area">
                <Container>
                    <div className="section-heading">
                        <h2>Madrasa Friends</h2>
                    </div>
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
            </section>
            {/* End of Madrasa section */}
            <section className="pbs-area">
                <Container>
                    <div className="section-heading">
                        <h2>PBS Friends</h2>
                    </div>
                    <Grid container spacing={3}>
                        {
                            pbs.map((friend, key) =>
                                <Grid item xs={12} sm={4} key={key}>
                                    <Paper classNam="">
                                        <SingleItem friend={friend}></SingleItem>
                                        
                                    </Paper>
                                </Grid>
                            )
                        }
                    </Grid>
                </Container>
            </section>
            {/* End of Madrasa section */}
        </main>
    );
};

export default Home;