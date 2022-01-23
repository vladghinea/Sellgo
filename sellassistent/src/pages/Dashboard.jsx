import Chart from 'react-apexcharts'
import React from "react";
import StatusCard from "../components/status-card/StatusCard"

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from '../components/table/Table'
import { useSelector } from 'react-redux'
import { ENDPOINTS } from "../api/Index"




const Dashboard = () => {

    const user = useSelector(state => state.authRedux)

    const [deals, setDeals] = useState();
    const [products, setProducts] = useState();
    const [clients, setClients] = useState();
    const [tableBody, setTableBody] = useState();

    useEffect(() => {
        const fetchDeals = async () => {
            const res = await fetch(`${ENDPOINTS.BASE_URL}${ENDPOINTS.DEAL}dealsforuser/${user.user.id}`);
            let data = await res.json();
            setDeals(data);
        };
        const fetchProducts = async (id) => {
            const res = await fetch(`${ENDPOINTS.BASE_URL}${ENDPOINTS.PRODUCT}`);
            const data = await res.json();
            setProducts(data);
        };
        const fetchClients = async (id) => {
            const res = await fetch(`${ENDPOINTS.BASE_URL}${ENDPOINTS.CLIENT}`);
            const data = await res.json();
            setClients(data);
        };
        fetchDeals();
        fetchProducts();
        fetchClients();
    }, []);

    const sumOfDealInProcess = () => {
        let temp = []
        let sum = 0
        let valueList = []
        deals.filter(deal => deal.status !== 6).forEach(element => { temp.push(element.id) });
        products.forEach(product => {
            if (product.dealId in temp) {
                sum += product.actualPrice
                valueList.push(product.actualPrice);
            }
        });
        return [sum, valueList];
    }

    const tableDataSealdDeals = () => {
        let tableBodyData = []

        clients.forEach(client => {
            tableBodyData.push(
                {
                    "name": client.firstName + " " + client.lastName,
                    "nr Of seald deals": deals.filter(deal => deal.status !== 6 && deal.clientId === client.id).map(deal =>deal.id),
                    "total": products.filter(product => product.id in deals
                                            .filter(deal => deal.status !== 6 && deal.clientId === client.id)
                                            .map(deal =>deal.id))
                                    .map(price => price.actualPrice)
                                    .reduce((accumulator, current) => accumulator + current, 0)
                }
            )
        })
        setTableBody(tableBodyData)
    }
    const sumOfSealdDeals = () => {
        let temp = [];
        let sum = 0;
        let valueList = []
        deals.filter(deal => deal.status === 6).forEach(element => { temp.push(element.id) });

        products.forEach(product => {
            if (!(product.dealId in temp)) {
                sum += product.actualPrice;
                valueList.push(product.actualPrice)
            }
        });
        return [sum, valueList];
    }

    const statusCard =
        [
            {
                "icon": "bx bxs-face",
                "count": `$${(deals, products, clients) && sumOfDealInProcess()[0]}`,
                "title": "Deals in Prorcess total value"
            },
            {
                "icon": "bx bx-cart",
                "count": `${deals && Object.keys(deals.filter(deal => deal.status !== 6)).length}`,
                "title": "No. of Deals in Progress"
            },
            {
                "icon": "bx bx-dollar-circle",
                "count": `$${(deals, products, clients) && sumOfSealdDeals()[0]}`,
                "title": `Seald Deals total value`
            },
            {
                "icon": "bx bx-receipt",
                "count": `${deals && Object.keys(deals.filter(deal => deal.status === 6)).length}`,
                "title": "No. of Seald Deals"
            }
        ]

    const chartOptions = {
        series: [{
            name: 'Deals in Process',
            data: (deals, products, clients) && sumOfDealInProcess()[1]
        }, {
            name: 'Seald Deals',
            data: (deals, products, clients) && sumOfSealdDeals()[1]
        }],
        options: {
            color: ['#6ab04c', '#2980b9'],
            chart: {
                background: 'transparent'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
            },
            legend: {
                position: 'top'
            },
            grid: {
                show: false
            }
        }
    }
    const renderCusomerHead = (item, index) => (
        <th key={index}>{item}</th>
    )
    
    const renderCusomerBody = (item, index) => (
        <tr key={index}>
            <td>{item.username}</td>
            <td>{item.order}</td>
            <td>{item.price}</td>
        </tr>
    )
    const topCustomers = {
        head: [
            'Client',
            'nr Of seald deals ',
            'total '
        ]
        
    }
    return (
        <div>
            
            <h2 className="page-header">Dashboard</h2>
            <div className='row'>
                <div className="col-6">
                    <div className="row">
                        {
                            statusCard.map((item, index) => (
                                <div className="col-6">
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        <Chart
                            options={chartOptions}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>top customers</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={(deals && products && clients) && tableDataSealdDeals()}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard