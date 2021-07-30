import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import { sliderBody } from './slider';

function CarouselSlide(props) {
    const { title } = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            width: '100%',
            border: '0px',
            margin: '0px 0px',
            boxShadow: '0px 0px 0px white',
            display: 'flex',
            justifyContent: 'center',
        } 
    }));

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div className="sldiercontainer">
                <div className="sliderAvatar">
                    
                </div>
                <div className="sliderText">
                    <p className="sldierTitle">They gived me the best proposal.</p>
                    <p className="sldierDescription">Make deposits and your balance in the Zero app goes up, spend on your Zerocard and your balance goes down.</p>
                    <p className="sldierSmDescription">Anne Marie Yohäns</p>
                </div>

            </div>
        </Card>
    );
}

export default CarouselSlide;