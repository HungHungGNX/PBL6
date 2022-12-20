import React, { useState, useEffect, useRef } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listOrders } from "../actions/orderActions";
import { useNavigate } from "react-router-dom";
import ApexCharts from "apexcharts";
import Header from "../components/Header";

function PieChartScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ref = useRef([]);
  const orderMain = useRef([]);
  const orderList = useSelector((state) => state.orderList);
  let { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [check, setCheck] = useState(0);
  const [date, setDate] = useState();

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo]);

  useEffect(() => {

        var options = {
          series: [{
          data: [0, 0, 448, 470, 540, 580, 690, 1100, 1200, 1380,200,400]
        }],
          chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'Octorber','November','December'
          ],
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart1"), options);
        chart.render();
  }, []);

  return (
    <div>
      <Header></Header>
      <div style={{marginTop:'10rem'}}>
      <h1 style={{ textAlign: "center" }} className="highlight">
        Statistic By Month
      </h1>
      <div id="chart1" style={{ maxWidth: "900px", margin: "35px auto" }}></div>
      </div>
    </div>
  );
}

export default PieChartScreen;
