import React from 'react';
import { useParams } from 'react-router-dom';
import localData from '../../assets/fakeData';
import { Container, Grid } from '@material-ui/core';
import './DetailsItem.scss';

const DetailsItem = () => {

    const { userId } = useParams();
    const friendData = localData.find(fr => fr.id === userId);
    // const [friend, setFriend] = useState([friendData]);


    // console.log(friend);

    const { img, name, address, type, phone, education, job, salary, status, child } = friendData;
    console.log(friendData)
    return (
        <div className="friends-container">
            <Container>
                <div className="page-heading">
                    <h2>Friend's of {type}</h2>
                </div>
                <Grid container spacing={3} >
                    <Grid item xs={12} sm={8} className="centerPosition">
                        <article className="dtls-frd">
                           <div>
                           <div className="nameArea">
                           <h3>{name}</h3>
                            <p>{phone}</p>
                           </div>
                            <address>
                                <h3>Permanent Address: </h3>
                                <p>Village: {address[0].village}</p>
                                <p>Post Office: {address[0].post}</p>
                                <p>Police Station: {address[0].ps}</p>
                                <p>District: {address[0].district}</p>
                                <p>Country: {address[0].country}</p>
                            </address>
                           </div>
                        </article>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className="dtls-pic">
                            <img src={img} alt={`Photo of ${name}`} />
                        </div>
                    </Grid>

                </Grid>
                <Grid container spacing={3} >
                    <Grid item xs={12} sm={4}>
                        <div>
                            <h3>Merrital Status</h3>
                            <p>{status}</p>

                            <p>Daughter: {child[0].daughter}</p>
                            <p>Son: {child[0].son}</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div>
                            <h3>Work Type:</h3>
                            <p>Job Type: {job}</p>
                            <p>Salary: {salary} TK</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div>
                            <h3>Educational Qualification:</h3>
                            <p>{education}</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default DetailsItem;