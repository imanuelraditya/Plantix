import Sidebar from "../components/Sidebar";
import TableData from "../components/TableData";
import Welcome from "../components/Welcome";
// import data from "../dataSensorDummy.json";
import axios from "axios";
import { useEffect, useState } from "react";
// import data from "../dataOrder.json";
// import TableOrder from "../components/TableOrder";

interface Props {
    sensor_id: number;
    loc_id: number;
    timestamp: string;
    temperature: number;
    air_humidity: number;
    soil_humidity: number;
    light_intensity: number;
}

export default function PageSensor() {
    const [Data, setData] = useState<Props[]>([]);
    const fetchProducts = async () => {
        try {
            // Make the Axios request with the authentication token
            const response = await axios.get('https://plantix.azurewebsites.net/sensor');

            setData(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        // Create grid layout for sidebard, header, and main content
        <div className="grid grid-cols-5 grid-rows-8 min-h-screen bg-plantix-light-green">
            {/* Sidebar */}
            <div className="col-span-1 row-span-8">
                <Sidebar
                    default="/"
                    number={3}
                    current={1}
                    menu1="Sensor"
                    path1="M3.36364 33.6364C2.43864 33.6364 1.64706 33.3073 0.988909 32.6491C0.330758 31.991 0.00112121 31.1988 0 30.2727V23.5455H3.36364V30.2727H10.0909V33.6364H3.36364ZM0 10.0909V3.36364C0 2.43864 0.329637 1.64706 0.988909 0.988909C1.64818 0.330758 2.43976 0.00112121 3.36364 0H10.0909V3.36364H3.36364V10.0909H0ZM15.1364 28.4227C12.5576 28.0303 10.3572 26.9231 8.53523 25.1011C6.71326 23.2792 5.60606 21.0788 5.21364 18.5H8.57727C8.91364 20.1538 9.67774 21.576 10.8696 22.7668C12.0614 23.9575 13.4837 24.7216 15.1364 25.0591V28.4227ZM5.21364 15.1364C5.60606 12.5576 6.71326 10.3505 8.53523 8.51505C10.3572 6.67962 12.5576 5.57915 15.1364 5.21364V8.57727C13.4826 8.91364 12.0603 9.67774 10.8696 10.8696C9.67886 12.0614 8.91476 13.4837 8.57727 15.1364H5.21364ZM16.8182 20.1818C15.8932 20.1818 15.1016 19.8527 14.4435 19.1946C13.7853 18.5364 13.4557 17.7443 13.4545 16.8182C13.4545 15.8652 13.7842 15.0663 14.4435 14.4216C15.1027 13.7769 15.8943 13.4545 16.8182 13.4545C17.7712 13.4545 18.5701 13.7769 19.2148 14.4216C19.8595 15.0663 20.1818 15.8652 20.1818 16.8182C20.1818 17.7432 19.8595 18.5353 19.2148 19.1946C18.5701 19.8539 17.7712 20.1829 16.8182 20.1818ZM25.0591 15.1364C24.7227 13.4826 23.9592 12.0603 22.7685 10.8696C21.5777 9.67886 20.1549 8.91476 18.5 8.57727V5.21364C21.0788 5.60606 23.2865 6.71326 25.123 8.53523C26.9595 10.3572 28.0595 12.5576 28.4227 15.1364H25.0591ZM30.2727 10.0909V3.36364H23.5455V0H30.2727C31.1977 0 31.9899 0.329636 32.6491 0.988909C33.3084 1.64818 33.6375 2.43976 33.6364 3.36364V10.0909H30.2727ZM28.5909 37C26.2644 37 24.2815 36.1798 22.6423 34.5395C21.0031 32.8992 20.1829 30.9163 20.1818 28.5909C20.1818 26.2644 21.002 24.2815 22.6423 22.6423C24.2827 21.0031 26.2655 20.1829 28.5909 20.1818C30.9174 20.1818 32.9008 21.002 34.5412 22.6423C36.1815 24.2827 37.0011 26.2655 37 28.5909C37 30.9174 36.1798 32.9008 34.5395 34.5412C32.8992 36.1815 30.9163 37.0011 28.5909 37ZM28.5909 33.6364C28.8152 33.6364 29.0114 33.5523 29.1795 33.3841C29.3477 33.2159 29.4318 33.0197 29.4318 32.7955C29.4318 32.5712 29.3477 32.375 29.1795 32.2068C29.0114 32.0386 28.8152 31.9545 28.5909 31.9545C28.3667 31.9545 28.1705 32.0386 28.0023 32.2068C27.8341 32.375 27.75 32.5712 27.75 32.7955C27.75 33.0197 27.8341 33.2159 28.0023 33.3841C28.1705 33.5523 28.3667 33.6364 28.5909 33.6364ZM27.75 30.2727H29.4318V23.5455H27.75V30.2727Z"
                    page1="/sensor"
                    menu2="Status"
                    path2="M18.5 3.08334C10.0208 3.08334 3.08333 10.0208 3.08333 18.5C3.08333 26.9792 10.0208 33.9167 18.5 33.9167C26.9792 33.9167 33.9167 26.9792 33.9167 18.5C33.9167 10.0208 26.9792 3.08334 18.5 3.08334ZM18.5 26.2083C17.575 26.2083 16.9583 25.5917 16.9583 24.6667C16.9583 23.7417 17.575 23.125 18.5 23.125C19.425 23.125 20.0417 23.7417 20.0417 24.6667C20.0417 25.5917 19.425 26.2083 18.5 26.2083ZM20.0417 18.5C20.0417 19.425 19.425 20.0417 18.5 20.0417C17.575 20.0417 16.9583 19.425 16.9583 18.5V12.3333C16.9583 11.4083 17.575 10.7917 18.5 10.7917C19.425 10.7917 20.0417 11.4083 20.0417 12.3333V18.5Z"
                    page2="/status"
                    menu3="Weather"
                    path3="M4.62499 23.125H20.0417C20.4505 23.125 20.8427 23.2874 21.1318 23.5765C21.4209 23.8657 21.5833 24.2578 21.5833 24.6667C21.5833 25.0755 21.4209 25.4677 21.1318 25.7568C20.8427 26.0459 20.4505 26.2083 20.0417 26.2083H4.62499C4.21611 26.2083 3.82399 26.0459 3.53487 25.7568C3.24575 25.4677 3.08332 25.0755 3.08332 24.6667C3.08332 24.2578 3.24575 23.8657 3.53487 23.5765C3.82399 23.2874 4.21611 23.125 4.62499 23.125ZM24.6667 23.125H32.375C32.7839 23.125 33.176 23.2874 33.4651 23.5765C33.7542 23.8657 33.9167 24.2578 33.9167 24.6667C33.9167 25.0755 33.7542 25.4677 33.4651 25.7568C33.176 26.0459 32.7839 26.2083 32.375 26.2083H24.6667C24.2578 26.2083 23.8657 26.0459 23.5765 25.7568C23.2874 25.4677 23.125 25.0755 23.125 24.6667C23.125 24.2578 23.2874 23.8657 23.5765 23.5765C23.8657 23.2874 24.2578 23.125 24.6667 23.125ZM1.54166 18.5C1.54166 16.4556 2.35378 14.495 3.79937 13.0494C5.24497 11.6038 7.20561 10.7917 9.24999 10.7917C10.7917 7.16875 14.3375 4.625 18.5 4.625C23.7879 4.625 28.12 8.72583 28.5208 13.9212L29.2917 13.875C32.6679 13.875 35.4121 16.5883 35.4583 20.0417H32.375C32.375 19.2239 32.0501 18.4397 31.4719 17.8614C30.8937 17.2832 30.1094 16.9583 29.2917 16.9583H26.2083V15.4167C26.2083 13.3723 25.3962 11.4116 23.9506 9.96605C22.505 8.52046 20.5444 7.70833 18.5 7.70833C14.6458 7.70833 11.4854 10.5142 10.8842 14.1679C10.3754 13.9829 9.82041 13.875 9.24999 13.875C8.02336 13.875 6.84698 14.3623 5.97962 15.2296C5.11227 16.097 4.62499 17.2734 4.62499 18.5C4.62421 19.025 4.71284 19.5464 4.88707 20.0417H1.69582L1.54166 18.5ZM4.62499 29.2917H7.70832C8.1172 29.2917 8.50933 29.4541 8.79845 29.7432C9.08756 30.0323 9.24999 30.4245 9.24999 30.8333C9.24999 31.2422 9.08756 31.6343 8.79845 31.9235C8.50933 32.2126 8.1172 32.375 7.70832 32.375H4.62499C4.21611 32.375 3.82399 32.2126 3.53487 31.9235C3.24575 31.6343 3.08332 31.2422 3.08332 30.8333C3.08332 30.4245 3.24575 30.0323 3.53487 29.7432C3.82399 29.4541 4.21611 29.2917 4.62499 29.2917ZM12.3333 29.2917H32.375C32.7839 29.2917 33.176 29.4541 33.4651 29.7432C33.7542 30.0323 33.9167 30.4245 33.9167 30.8333C33.9167 31.2422 33.7542 31.6343 33.4651 31.9235C33.176 32.2126 32.7839 32.375 32.375 32.375H12.3333C11.9244 32.375 11.5323 32.2126 11.2432 31.9235C10.9541 31.6343 10.7917 31.2422 10.7917 30.8333C10.7917 30.4245 10.9541 30.0323 11.2432 29.7432C11.5323 29.4541 11.9244 29.2917 12.3333 29.2917Z"
                    page3="/weather"
                />
            </div>
            {/* Header */}
            <div className="col-span-4 w-full">
                <div className="mx-20 row-span-1 mt-9 py-3">
                    <Welcome />
                </div>
                <div className="mx-20 mt-6 mb-9 py-4 bg-white rounded-3xl h-auto">
                    <TableData data={Data} />
                </div>
            </div>
        </div>
    );
}
