import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BallTriangle } from 'react-loader-spinner';
import { Collapse } from 'antd';

import '../App.css'
const { Panel } = Collapse;

function Meals() {
    const [data, setData] = useState([])

    //calling the api data using use effect for initial load
    useEffect(() => {

        //setting header auth for bearer token
        const headers = {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI0cTYwTWs3R0poeXg5IiwibmFtZSI6Ik5hcmVzaCBLdWtyZXRpIiwiaWF0IjoxNjY3ODkzNzI2LCJleHAiOjE2NzA0ODU3MjZ9.uKKg08BSmeqUUgnoeLCaJXKS45L-ebxToyQou-yxvr4`
        }
        //fetching the api
        axios
            .get("https://api.wtfup.me/dietcat/diet?uid=EqGCu3i5l36Me&day=monday&user_id=R7XxXsbCAZLAx&date=13-03-2023", { headers })
            .then(res => {
                //setting the data from api to the data state
                setData([res.data.data[0].day])
            })
    }, [])

    const onChange = (key) => {
        //function from ant designs
    };
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            {
                //to check if the data object is empty or not if it is empty then show the fallback loader else show the data
                Object.keys(data).length > 0 ?

                    <div>
                        <Collapse defaultActiveKey={['1']} onChange={onChange} style={{ width: '100%' }} >
                            {/* Accordian  to shiw the data when the user clicks on it */}
                            <Panel header="Breakfast" key="1" style={{ backgroundColor: data[0].breakfast.diet_details.consumption_status ? 'yellow' : 'green' }}>
                                {
                                    data[0].breakfast.diet_details.map((item) => {
                                        return (
                                            <div className='meal-container'>
                                                <img className='small' src={item.co_image} alt="" />

                                                <div className="details">
                                                    <h2>{item.name}</h2>
                                                    <h3> {item.description}</h3>
                                                    {
                                                        item.method !== 'null' ?
                                                            <p>how to prepare: {item.method}</p>
                                                            :
                                                            null
                                                    }
                                                    <h4>Nutritents values</h4>
                                                    <div className="nutrients">
                                                        <li>Total Carbs calories: {item.carbs_cal} kcl</li>
                                                        <li> Total Carbohydrates{item.carbs_grams} grams</li>
                                                        <li>Total Protien Calories: {item.protien_cal} kcl</li>
                                                        <li>Total fat calories : {item.fat_cal} kcl</li>

                                                        <li>Total Calories:  <strong>{item.totalCal} kcl</strong></li>
                                                    </div>
                                                </div>

                                            </div>)
                                    })
                                }
                            </Panel>
                            <Panel header="Lunch" key="2" style={{ backgroundColor: data[0].lunch.diet_details.consumption_status ? 'green' : 'yellow' }}>
                                {
                                    data[0].lunch.diet_details.map((item) => {
                                        return (
                                            <div className='meal-container'>
                                                <img className='small' src={item.co_image} alt="" />

                                                <div className="details">
                                                    <h2>{item.name}</h2>
                                                    <h3> {item.description}</h3>
                                                    {
                                                        item.method !== 'null' ?
                                                            <p>how to prepare: {item.method}</p>
                                                            :
                                                            null
                                                    }
                                                    <h4>Nutritents values</h4>
                                                    <div className="nutrients">
                                                        <li>Total Carbs calories: {item.carbs_cal} kcl</li>
                                                        <li> Total Carbohydrates{item.carbs_grams} grams</li>
                                                        <li>Total Protien Calories: {item.protien_cal} kcl</li>
                                                        <li>Total fat calories : {item.fat_cal} kcl</li>

                                                        <li>Total Calories:  <strong>{item.totalCal} kcl</strong></li>
                                                    </div>
                                                </div>
                                            </div>)
                                    })
                                }

                            </Panel>
                            <Panel header="Dinner" key="3" style={{ backgroundColor: data[0].dinner.diet_details.consumption_status ? 'green' : 'yellow' }}>
                                {
                                    data[0].dinner.diet_details.map((item) => {
                                        return (
                                            <div className='meal-container'>
                                                <img className='small' src={item.co_image} alt="" />

                                                <div className="details">
                                                    <h2>{item.name}</h2>
                                                    <h3> {item.description}</h3>
                                                    {
                                                        item.method !== 'null' ?
                                                            <p>how to prepare: {item.method}</p>
                                                            :
                                                            null
                                                    }
                                                    <h4>Nutritents values</h4>
                                                    <div className="nutrients">
                                                        <li>Total Carbs calories: {item.carbs_cal} kcl</li>
                                                        <li> Total Carbohydrates{item.carbs_grams} grams</li>
                                                        <li>Total Protien Calories: {item.protien_cal} kcl</li>
                                                        <li>Total fat calories : {item.fat_cal} kcl</li>

                                                        <li>Total Calories:  <strong>{item.totalCal.toFixed(1)} kcl</strong></li>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </Panel>
                        {/* This one was not needed as there wasn't any data available for it thus commented */}


                            {/* <Panel header="early_morning" key="4" style={{ backgroundColor: data[0].early_morning.diet_details.consumption_status ? 'green' : 'yellow',display:'flex',flexWrap:'wrap'}}>
                                {
                                    data[0].early_morning.diet_details.map((item) => {
                                        return (
                                            <div className='meal-container'>
                                                <img className='small' src={item.co_image} alt="" />

                                                <div className="details">
                                                    <h2>{item.name}</h2>
                                                    <h3> {item.description}</h3>
                                                    {
                                                        item.method !== 'null' ?
                                                            <p>how to prepare: {item.method}</p>
                                                            :
                                                            null
                                                    }
                                                </div>
                                            </div>)
                                    })
                                }
                            </Panel> */}
                            <Panel header="mmsnacks" key="5" style={{ backgroundColor: data[0].mmsnacks.diet_details.consumption_status ? 'green' : 'yellow' }}>
                                {
                                    data[0].mmsnacks.diet_details.map((item) => {
                                        return (
                                            <div className='meal-container'>
                                                <img className='small' src={item.co_image} alt="" />

                                                <div className="details">
                                                    <h2>{item.name}</h2>
                                                    <h3> {item.description}</h3>
                                                    {
                                                        item.method !== 'null' ?
                                                            <p>how to prepare: {item.method}</p>
                                                            :
                                                            null
                                                    }
                                                    <h4>Nutritents values</h4>
                                                    <div className="nutrients">
                                                        <li>Total Carbs calories: {item.carbs_cal} kcl</li>
                                                        <li> Total Carbohydrates{item.carbs_grams} grams</li>
                                                        <li>Total Protien Calories: {item.protien_cal} kcl</li>
                                                        <li>Total fat calories : {item.fat_cal} kcl</li>

                                                        <li>Total Calories:  <strong>{item.totalCal} kcl</strong></li>
                                                    </div>
                                                </div>
                                            </div>)
                                    })
                                }
                            </Panel>
                            <Panel header="snacks" key="6" style={{ backgroundColor: data[0].snacks.diet_details.consumption_status ? 'green' : 'yellow' }}>
                                {
                                    data[0].snacks.diet_details.map((item) => {
                                        return (
                                            <div className='meal-container'>
                                                <img className='small' src={item.co_image} alt="" />

                                                <div className="details">
                                                    <h2>{item.name}</h2>
                                                    <h3> {item.description}</h3>
                                                    {
                                                        item.method !== 'null' ?
                                                            <p>how to prepare: {item.method}</p>
                                                            :
                                                            null
                                                    }
                                                    <h4>Nutritents values</h4>
                                                    <div className="nutrients">
                                                        <li>Total Carbs calories: {item.carbs_cal} kcl</li>
                                                        <li> Total Carbohydrates{item.carbs_grams} grams</li>
                                                        <li>Total Protien Calories: {item.protien_cal} kcl</li>
                                                        <li>Total fat calories : {item.fat_cal} kcl</li>

                                                        <li>Total Calories:  <strong>{item.totalCal.toFixed(1)} kcl</strong></li>
                                                    </div>
                                                </div>
                                            </div>)
                                    })
                                }
                            </Panel>
                        </Collapse>
                    </div>
                    :
                    <BallTriangle
                        height={500}
                        width={500}
                        radius={5}
                        color="#4fa94d"
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        visible={true}
                    />
            }
        </div>
    )
}

export default Meals