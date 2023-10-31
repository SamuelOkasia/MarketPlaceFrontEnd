'use client'

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import Deletebutton from "@/components/deletebutton/deletebutton";
import './dashboard.css'
const Dashboard = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Replace with your API endpoint
        fetch('https://samuelokasia1.pythonanywhere.com/api/get_products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard">
{/*
            <Deletebutton />
*/}
            <h2>Product Dashboard</h2>
{/*
            <div className="dashboard__container">
                {products.map(product => (
                    <div className="dashboard__container__card">
                        <Link href={product.link}>
                            <div className="dashboard__container__card__image">
                                <img className="dashboard__container__card__image--image"
                                     src={product.image}
                                     alt="Car Image"
                                />
                            </div>
                        </Link>
                        <div className="dashboard__container__card__details">
                            <h3>{product.name}</h3>
                            <p>Price: {product.price}</p>
                            <h3>Description:</h3>
                            <p>{product.description}</p>
                        </div>
                    </div>

                ))}

            </div>
*/}
            <div className="dashboard__container">
                {products.sort((a, b) => {
                    return new Date(b.added_on) - new Date(a.added_on);
                }).map(product => (
                    <div className="dashboard__container__card">
                        <div className="dashboard__container__card__details">
                            <h3 className="dashboard__container__card__details--name">
                                {product.name}
                            </h3>
                            <div className="dashboard__container__card__details__grid">
                                <p
                                    className="dashboard__container__card__details--price">
                                    {product.price}
                                </p>
                                <p
                                    className="dashboard__container__card__details--price">
                                    {product.transmission}
                                </p>
                                <p
                                className="dashboard__container__card__details--price">
                                {product.mileage}
                                 </p>
                                <p
                                    className="dashboard__container__card__details--price">
                                    {product.listed}
                                </p>
                            </div>



                            <div className="dashboard__container__card__details__description">
                                <p className="dashboard__container__card__details--description">
                                    {product.description}
                                </p>
                            </div>
                            <Link href={product.link} className="dashboard__container__card--link">
                                <div className="dashboard__container__card__image">
                                    <img className="dashboard__container__card__image--image"
                                         src={product.image}
                                         alt="Car Image"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="line-break"/>
                    </div>
                ))}
            </div>

            {/*<ul>
                {products.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.name} width={100} />
                        <a href={product.link}>link</a>
                        <p>{product.price}</p>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>*/}
        </div>
    );
};

export default Dashboard;