import React, { Component
  // , lazy, Suspense 
} from 'react';
// import { Bar, Line } from 'react-chartjs-2';
// import {  Card,  CardBody, Col,  Row, } from 'reactstrap';
// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
// import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities'
import Clock from '../../components/ClockDisplay/ClockDisplay'
import KanbanBoard from '../../components/KanbanBoard/KanbanBoard'

// const Widget03 = lazy(() => import('components/Widgets/Widget03')),  brandPrimary = getStyle('--primary');

// Card Chart 1
// const cardChartData1 = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: brandPrimary,
//       borderColor: 'rgba(255,255,255,.55)',
//       data: [65, 59, 84, 84, 51, 55, 40],
//     },
//   ],
// };

// const cardChartOpts1 = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips
//   },
//   maintainAspectRatio: false,
//   legend: {
//     display: false,
//   },
//   scales: {
//     xAxes: [
//       {
//         gridLines: {
//           color: 'transparent',
//           zeroLineColor: 'transparent',
//         },
//         ticks: {
//           fontSize: 2,
//           fontColor: 'transparent',
//         },

//       }],
//     yAxes: [
//       {
//         display: false,
//         ticks: {
//           display: false,
//           min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
//           max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
//         },
//       }],
//   },
//   elements: {
//     line: {
//       borderWidth: 1,
//     },
//     point: {
//       radius: 4,
//       hitRadius: 10,
//       hoverRadius: 4,
//     },
//   }
// }

// // Card Chart 3
// const cardChartData3 = {
//   labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(255,255,255,.2)',
//       borderColor: 'rgba(255,255,255,.55)',
//       data: [78, 81, 80, 45, 34, 12, 40],
//     },
//   ],
// };

// const cardChartOpts3 = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips
//   },
//   maintainAspectRatio: false,
//   legend: {
//     display: false,
//   },
//   scales: {
//     xAxes: [
//       {
//         display: false,
//       }],
//     yAxes: [
//       {
//         display: false,
//       }],
//   },
//   elements: {
//     line: {
//       borderWidth: 2,
//     },
//     point: {
//       radius: 0,
//       hitRadius: 10,
//       hoverRadius: 4,
//     },
//   },
// };

// // Card Chart 4
// const cardChartData4 = {
//   labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(255,255,255,.3)',
//       borderColor: 'transparent',
//       data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
//     },
//   ],
// };

// const cardChartOpts4 = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips
//   },
//   maintainAspectRatio: false,
//   legend: {
//     display: false,
//   },
//   scales: {
//     xAxes: [
//       {
//         display: false,
//         barPercentage: 0.6,
//       }],
//     yAxes: [
//       {
//         display: false,
//       }],
//   },
// };

// // Social Box Chart
// const socialBoxData = [
//   { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
//   { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
//   { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
//   { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
// ];

// const makeSocialBoxData = (dataSetNo) => {
//   const dataset = socialBoxData[dataSetNo];
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         backgroundColor: 'rgba(255,255,255,.1)',
//         borderColor: 'rgba(255,255,255,.55)',
//         pointHoverBackgroundColor: '#fff',
//         borderWidth: 2,
//         data: dataset.data,
//         label: dataset.label,
//       },
//     ],
//   };
//   return () => data;
// };

// const socialChartOpts = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips
//   },
//   responsive: true,
//   maintainAspectRatio: false,
//   legend: {
//     display: false,
//   },
//   scales: {
//     xAxes: [
//       {
//         display: false,
//       }],
//     yAxes: [
//       {
//         display: false,
//       }],
//   },
//   elements: {
//     point: {
//       radius: 0,
//       hitRadius: 10,
//       hoverRadius: 4,
//       hoverBorderWidth: 3,
//     },
//   },
// };

// //Random Numbers
// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// var elements = 27;
// var data1 = [];
// var data2 = [];
// var data3 = [];

// for (var i = 0; i <= elements; i++) {
//   data1.push(random(50, 200));
//   data2.push(random(80, 100));
//   data3.push(65);
// }

class Dashboard extends Component {
  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

  //   this.state = {
  //     dropdownOpen: false,
  //     radioSelected: 2,
  //   };
  // }

  // toggle() {
  //   this.setState({
  //     dropdownOpen: !this.state.dropdownOpen,
  //   });
  // }

  // onRadioBtnClick(radioSelected) {
  //   this.setState({
  //     radioSelected: radioSelected,
  //   });
  // }

  // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
<h1>Bienvenue sur votre CMS v1.1-RC2</h1>
        <Clock />
        <h3>Release:</h3>

        <h4>v1.1-RC2 (10/1/2021):</h4>
          <ul>
            <li>Degug Barre de navigation (frond-end)</li>
            <li>Degug modification image, logo... (CMS page : configuration)</li>
            <li>Delete add/edit image ... (CMS page : Buffets -> les buffets)</li>
            <li>Delete add/edit image ... (CMS page : Cartes -> les menus)</li>
            <li>Degug modification images... (CMS page : A propos)</li>
            <li>Creation module Audit (CMS)</li>
            <li>Suppression module Navbar</li>
            <li>Securité route (API)</li>
          </ul>

        <h4>v1.1-RC1 (09/24/2021):</h4>
          <ul>
            <li>Degug Gallerie image (frond-end)</li>
          </ul>

        <h4>v1.1 (09/17/2021):</h4>
        <ul>
            <h5>First deployment</h5>
          <li>
            Api:  <a href="https://server.unamipourlavie.be">   https://server.unamipourlavie.be</a>
          </li>
          <li>Front-end: <a href="https://pitivierevents.hess-gregory.be/">   https://pitivierevents.hess-gregory.be/</a>
          </li>
          <li>
            CMS: <a href="https://cmspitivier.hess-gregory.be/#/dashboard">   https://cmspitivier.hess-gregory.be/#/dashboard</a>
          </li>
        </ul>

        <h3>(Prochainement disponible):</h3>
        <KanbanBoard />
      </div>
    );
  }
}

export default Dashboard;
