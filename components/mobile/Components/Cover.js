import React from 'react'
import '../Styles/Mobile-Resume.scss'
import Data from './Data'

// import PolyBackComponent from './PolyBackComponent'
function Cover({currentSection}) {
    // const [isMobile,setIsMobile] = React.useState(/Mobi/i.test(window.navigator.userAgent))
    // console.log(isMobile)

    // React.useEffect(()=>{
    //     if(isMobile){
    //         document.body.style.transform="scale(1)";
    //     }
    // },[isMobile])
    
    React.useEffect(() => {
        currentSection?document.getElementById(currentSection).scrollIntoView({behaviour:"smooth"}):null;
    },[currentSection])
    return (
        <div id="cover">
            
            <div id="home">
            <div id="wpap"><svg id="Me_wpap" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1406.144 1861.379">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_4" data-name="Layer 4">
                        <path id="Path_1" data-name="Path 1" d="M303.908,1237.385,240.1,1260.793l-42.915-21.458-42.915-76.077,13.655-58.521,130.7-140.45L405.909,849.2l156.055-83.88,216.527-66.323,183.365-11.7,118.992,74.126L1260.312,857l76.077,95.584,40.965,76.077,7.8,66.323-35.113,29.26-62.422-6.691L303.908,1237.385" transform="translate(-3.803 -16.945)" fill="#0b3150" />
                        <path id="Path_2" data-name="Path 2" d="M617.021,867.021l-86.367,71.971-62.929,63.466L329.986,1165.194l-22.3,75.248L420.528,1639.9,745.3,1881.283,966.2,1849.106l74.614-55.594,153.607-203.35,80.457-172.627-1.463-122.893,17.985-174.031L1082.68,898.418l-28.149-28.607L943.06,811.29l-139.328,5.569L717.4,840.053Z" transform="translate(-7.586 -20.002)" fill="#fae3ad" />
                        <path id="Path_3" data-name="Path 3" d="M948.27,1077.214l14.63,12.192,96.559,16.094,50.718-14.309,27.309-24.062,2.595-22.1-13.654-.654-26-9.753-3.9.653-93.633,7.149-24.715,16.9Z" transform="translate(-23.379 -25.508)" fill="#fff" />
                        <path id="Path_4" data-name="Path 4" d="M332.776,1198.639l-2.79-33.445L499.979,964.556l30.675-25.564,86.367-71.971L717.4,840.053l86.328-23.193L943.06,811.29l111.472,58.521,108.683,108.683,97.535,94.745,30.655,47.372-5.579,69.669,30.655,52.942-11.148,69.669-41.8-11.148,11.148,122.62-94.745,195.069-122.611,164.414-75.248,61.31L725.7,1881.381l-94.755-58.521L430.31,1664.015,346.7,1418.784,307.69,1240.442Z" transform="translate(-7.586 -20.002)" fill="none" />
                        <path id="Path_5" data-name="Path 5" d="M307.69,1245.276l39.687,41.042,7.686-89.809,48.123-58.8,66.645,14.952,58.521,19.185,54.941-5.53-71.2,11.382,71.854-7.8,40.965-11.051,38.37-27.963-36.741,23.086-78.681,11.382-46.817-18.853,17.556-22.755,19.829,4.876,11.06,1.288-5.53,22.11,9.432-20.482H564.44l-6.827,11.051,4.877,22.755,8.456-29.26,4.555,14.952-1.3-14.63,9.753-.653,6.174,18.854,1.629-22.112,5.2,18.854,4.223-18.854,15.284,17.9-5.2-18.21,6.506-2.272,20.8-6.828,11.382-2.926,18.21-3.579,24.7-11.051,9.432-12.358-33.815-26.987-15.927-7.472-3.248-14.308-1.3,13-3.579-11.7L642.8,1056.1l-6.174-.653-.975-10.407-3.248-3.579.653,4.877-1.3,5.2-7.149-2.273.975-3.9-2.926-3.579-.653,7.48-2.6-.321-.654-13-3.9,10.075h-1.3l1.629-13.976-6.828,12.357-2.272.975.653-18.853-5.53,16.259-12.679,1.3-4.223-13.333-1.951,11.382-3.9-1.3-.322-16.581-3.9,18.854-9.432,1.629-10.075-13.654s1.951,9.753,1.951,10.729-4.223,2.926-4.223,2.926l-10.075-13.977,4.194,16.25-2.926.653-9.432-10.407v13.333l-72.5-13.333,6.018-29.914-77.92,93.233-54.132,59.984-8.778,55.594Z" transform="translate(-7.586 -24.835)" fill="#231f20" />
                        <path id="Path_6" data-name="Path 6" d="M723.04,840.78l6.837,13.664,25.847,15.118-33.649,46.329L671.356,899.8,653.8,928.083,701.591,974.9l-15.118,7.315-16.093-9.266-37.551,8.778L543.1,947.1l-6.808-7.384,86.367-71.971Z" transform="translate(-13.222 -20.729)" fill="#0b3150" />
                        <path id="Path_7" data-name="Path 7" d="M936.27,1079.9l35.756-35.112,14.308-7.149-7.149-8.457,10.4,7.8,6.505-3.248-11.051-13.655,16.9,11.7,2.6-3.248-9.753-9.753,14.3,9.1,1.307-3.248-7.8-11.06,14.3,9.109,3.258-4.555-7.159-10.407,13.655,11.7,10.407-.644-2.6-14.962,12.357,13.011V998.62l5.2,14.952,3.257-5.2,6.5,11.051,15.605-9.1-.644,6.505,17.556,2.594,20.151,1.307,14.962,2.594,3.9-5.2,3.9,13,11.7-5.852,5.2-14.952,3.248,11.051-9.1,11.06,12.357-6.506,7.15-3.248-11.7,13.655,8.457,1.3,5.2-11.051-1.951,15.606,11.7-11.06-9.1,12.357,11.7-7.149-5.208,8.447,11.06-5.2-6.505,11.7,24.062-3.248-33.162,11.7,11.051,8.446,1.951,24.715-8.456-21.457-11.7-13.011-14.952,3.9,16.259,4.555,7.8,15.606-13.655-13.655h-14.308l14.952,9.1,5.852,13.011-13-12.357-9.753-2.6,7.8,6.506,1.3,4.555-9.1-7.159-5.852-1.3-11.05,7.149,15.606,5.208,1.95,11.051-6.506-7.8-17.556-3.248-5.2,3.248,11.051,18.21-14.309-14.962-9.753,2.6,8.456,18.854-12.357-14.952h-5.852l8.456,14.309-1.951,4.545-9.1-16.25h-6.506l.653,16.25-3.9-14.3h-7.159v15.606l-4.545-15.606-7.159-.653,1.95,13-7.8-11.051h-5.2l-1.951,18.21-3.9-17.557-7.8-1.95-3.9,18.2-1.3-20.8H1024.7l-9.753,16.259,3.9-19.507-52.015-7.8-16.9-9.754h31.211l30.558,10.4,47.47,9.11,50.718-14.308,27.309-24.062,2.594-22.1-13.655-.653-26-9.753-3.9.654-8.456,41.608-18.854,18.21-24.715,4.555-37.063-22.111-4.545-35.112-24.715,16.9,1.951,14.309-20.151,7.149Z" transform="translate(-23.083 -24.621)" fill="#0b3150" />
                        <path id="Path_8" data-name="Path 8" d="M937.6,1053.058l21.458-5.2,19.507-25.359,28.607-14.962,16.259-5.852,40.311-5.2,50.718.653L1162.583,1016l8.446-1.3-53.966-22.111-55.273-1.3-42.262,5.852-21.458,7.8L972.712,1018.6Z" transform="translate(-23.116 -24.44)" fill="#044d67" />
                        <path id="Path_9" data-name="Path 9" d="M963.6,1103.29l48.114,31.211,81.285,13-80.631-16.259Z" transform="translate(-23.757 -27.201)" fill="#231f20" />
                        <path id="Path_10" data-name="Path 10" d="M734.826,1007.29l53.644,43.89-39.014,76.077-32.186,11.7,17.556-67.3Z" transform="translate(-17.684 -24.834)" fill="#0b3150" />
                        <path id="Path_11" data-name="Path 11" d="M792.731,1066.29l2.926,323.815-26.334-9.753L718.6,1396.932l39.014-24.383-10.729-40.965-38.039-4.876L692.27,1349.14l18.532-96.559,46.816-53.644,22.433-60.472-56.57,45.841,10.729-39.989,43.891-39.989Z" transform="translate(-17.068 -26.289)" fill="#0b3150" />
                        <path id="Path_12" data-name="Path 12" d="M852.27,1427.329l40.965-30.236,25.359-7.8,37.063,10.729-.975,14.63L924.445,1428.3l20.482-15.606-36.088-7.8-19.507,1.951Z" transform="translate(-21.012 -34.252)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_13" data-name="Path 13" d="M717.27,1413.871l28.285-13.655,32.186-2.926,37.063,25.359,12.68,4.877-16.581,7.8L773.84,1420.7Z" transform="translate(-17.684 -34.449)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_14" data-name="Path 14" d="M1291.557,1127.539l-22.433-35.249,3.9,92.658-10.729,94.608-12.68,136.548-34.137,100.461L1123.8,1672.621l-52.668-23.409L1009.682,1697l-1.951,59.5-123.869,52.669-118.992,5.852-62.422-44.866-38.038-76.077,43.891-1.951,60.471-9.754,67.3,11.7,75.1-8.778,40.964-42.915-70.225,19.507-47.792-.975-44.866,3.9-79-29.26-42.915-41.94,79.978-20.483,80.954,5.853,49.743-9.753h66.323l74.126,11.7,4.877-14.63-79.979-13.655-62.422-25.359-58.521,14.63-47.792-7.8-75.1,26.335,48.767-22.433,39.014-20.482,39.014,5.852,62.422-1.951,9.754,10.729h25.359l66.323,27.31,52.668,28.284,22.433,39.99,26.335-31.211-2.926-45.841-55.595-37.063L925.8,1471.7l-75.1-35.112-27.31,25.359-9.753-15.606H788.278l-18.531-20.482-85.83-12.68-7.8-46.817-6.828,53.644,83.88,21.458-69.25,56.57-92.658,6.827-43.89,31.211-68.274-26.335-100.461-297.48-6.827-60.471-41.667,20.336,2.789,33.445-17.586,27.251-1.463,40.965,51.206,207.729,55.595,165.321,98.012,96.55,144.839,106.8,81.919,38.029,220.906-32.177,74.614-55.594,153.607-203.35,80.456-172.627-1.463-122.893Z" transform="translate(-7.739 -26.93)" fill="#0b3150" />
                        <path id="Path_15" data-name="Path 15" d="M506.93,1083.8l20.16,27.963,48.114,16.9,52.669-5.2,26.666-11.7,14.952-1.307L676,1090.948l-38.37-25.359-50.718-14.3-44.505,15.4-6.213,2.156Z" transform="translate(-12.498 -25.919)" fill="#fff" stroke="#231f20" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_16" data-name="Path 16" d="M610.57,1124.109l8.447-6.5,11.7-9.11,9.11-24.706-1.307-18.21-50.718-14.3-44.505,15.4.293,28.812,18.21,21.458,12.348,6.506,13.011,3.248Z" transform="translate(-13.395 -25.919)" stroke="#231f20" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_17" data-name="Path 17" d="M1300.27,1244.36l63.719-47.47,14.308-61.769-62.422-6.69Z" transform="translate(-32.058 -27.821)" fill="#0b3150" />
                        <path id="Path_18" data-name="Path 18" d="M242.27,1274.331l19.507,33.161L332,1328.95l-18.415-92.58Z" transform="translate(-5.973 -30.482)" fill="#0b3150" />
                        <path id="Path_19" data-name="Path 19" d="M166.636,1090.234l14.386-145.512-26.334-73.161-32.2-131.682L102.01,438.469l20.853-49.391,106.8-92.17,21.945-64.363,64.363-64.373h79l48.28-16.093L678.5,113.64l333.6-14.63,88.015,54.532L1116.2,191.58l64.373,4.389,176.83,125.439,49.743,354.09-31.084,338.659L1335.1,938.08,1259.024,842.5,1079.56,746.913,960.568,672.786,777.2,684.49,560.676,750.814l-156.055,83.88Z" transform="translate(-2.515 -2.441)" fill="#7096a0" stroke="#0b3150" stroke-miterlimit="10" stroke-width="3" />
                        <path id="Path_20" data-name="Path 20" d="M99.5,436.028l20.853-49.391,58.521-49.743,48.28-42.428L249.094,230.1l64.363-64.373h79l20.482-11.7,27.8-4.389L430.166,87.791,292.633,0,90.717,11.7,0,125.829,5.852,342.385Z" fill="#0b3150" />
                        <path id="Path_21" data-name="Path 21" d="M1035.1,97.087l88.015,54.532,16.093,38.038,64.373,4.389,176.83,125.439-64.382-201.916L1163.865,21,1090.7,44.418Z" transform="translate(-25.52 -0.518)" fill="#0b3150" />
                        <path id="Path_22" data-name="Path 22" d="M435.38,260.405,596.3,330.62,733.816,339.4,884.5,272.109l67.3-46.817L909.369,175.55,697.241,160.92,537.782,191.643Z" transform="translate(-10.734 -3.967)" fill="#0b3150" />
                        <path id="Path_23" data-name="Path 23" d="M753.353,505.9q.556,7.12.976,14.25c.3,4.75.517,9.5.77,14.25l.624,14.26.517,14.26v-.176l1.873,12.065,1.795,12.075q.907,6.038,1.736,12.084c.566,4.028,1.132,8.056,1.649,12.094l-1.317-.975c5.852-.878,11.7-1.7,17.625-2.507l8.827-1.151q4.418-.566,8.846-1.063-4.35.975-8.71,1.863L779.834,609c-5.852,1.141-11.646,2.272-17.488,3.345l-1.122.2-.2-1.161c-.7-4.009-1.346-8.027-2.009-12.045s-1.317-8.037-1.951-12.055l-1.853-12.045-1.785-12.075V563l-.215-14.269-.107-14.27V520.189C753.1,515.439,753.227,510.66,753.353,505.9Z" transform="translate(-18.567 -12.473)" fill="#231f20" />
                        <path id="Path_24" data-name="Path 24" d="M508.87,531.4c8.661,4.135,17.264,8.4,25.886,12.611s17.186,8.554,25.778,12.826,17.186,8.554,25.73,12.914,17.127,8.671,25.661,13.06l-.185-.078q17.946,6.154,35.844,12.445l17.9,6.291,17.878,6.34-.351-.068,36.556,1.951,18.268,1.073q9.139.536,18.268,1.151-9.159-.1-18.307-.312l-18.3-.391-36.595-.975h-.166l-.185-.058-17.966-6.1-17.946-6.145q-17.937-6.164-35.844-12.426h-.186q-12.8-6.593-25.544-13.275c-8.515-4.418-16.99-8.924-25.476-13.421s-16.981-8.954-25.427-13.509S517.277,536.043,508.87,531.4Z" transform="translate(-12.546 -13.101)" fill="#231f20" />
                        <path id="Path_25" data-name="Path 25" d="M820.86,598.995c4.252-2.243,8.563-4.37,12.874-6.505s8.642-4.194,12.992-6.242,8.71-4.048,13.07-6.076l13.138-5.95-.234.127,11.7-7.978c3.9-2.614,7.861-5.276,11.841-7.8s7.949-5.15,11.938-7.7,8.027-5.042,12.1-7.461c-3.716,2.926-7.51,5.784-11.295,8.632s-7.617,5.627-11.46,8.4-7.705,5.5-11.568,8.251l-11.7,8.115-.107.078-.127.059-13.2,5.784c-4.418,1.873-8.778,3.8-13.265,5.628s-8.885,3.667-13.343,5.462S825.376,597.337,820.86,598.995Z" transform="translate(-20.238 -13.398)" fill="#231f20" />
                        <path id="Path_26" data-name="Path 26" d="M411.553,256.143,401.312,225.42,366.2,228.346,331.087,245.9l-29.26,32.187,5.852,10.231-17.556,7.315-5.852,16.093-19.019,35.112-16.083,26.334-8.778,74.614,23.408,23.4-8.778,65.836,2.926,19.019-5.852,49.743L255.02,664.3l17.546,38.039,43.891,26.334,33.649,2.926,40.965-14.63L433.5,695.02l-46.816-35.112-42.428-83.382L320.846,506.3l10.241-100.938,38.039-95.1Z" transform="translate(-5.927 -5.558)" fill="#0b3150" />
                        <path id="Path_27" data-name="Path 27" d="M1079.98,245.5l51.2,71.678L1173.6,397.64l7.315,55.595-21.945,89.234-38.039,73.151-55.585,51.2,125.81,24.871,59.984-5.852,52.659-52.659,14.63-77.54-19.019-96.55-48.27-109.726-49.742-90.7-46.817-33.649L1113.62,208.92Z" transform="translate(-26.266 -5.151)" fill="#0b3150" />
                        <path id="Path_28" data-name="Path 28" d="M333.121,407.506,322.88,370.931l17.556-48.28L371.16,312.41Z" transform="translate(-7.96 -7.702)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4" />
                        <path id="Path_29" data-name="Path 29" d="M1108.84,283.92l27.8,1.463,38.038,26.324,11.7,38.039-11.7,49.743-42.427-80.466Z" transform="translate(-27.338 -7)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4" />
                        <path id="Path_30" data-name="Path 30" d="M1095.219,898.418l-31.211,29.26-92.99,26.012-83.88,30.558-22.1-39.014,27.953-102.089L816.27,816.859,955.6,811.29l111.472,58.521Z" transform="translate(-20.125 -20.002)" fill="#0b3150" />
                        <path id="Path_31" data-name="Path 31" d="M694.27,966.287l3.248-23.408,12.358-16.259-8.456,25.359v22.755Z" transform="translate(-17.117 -22.846)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_32" data-name="Path 32" d="M681.6,956.419l4.555-34.469,1.95,39.667Z" transform="translate(-16.805 -22.73)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_33" data-name="Path 33" d="M671.6,946.517l4.555-25.359,8.446-5.208-7.149,12.358,3.9,27.963Z" transform="translate(-16.558 -22.582)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_34" data-name="Path 34" d="M690.93,945.962l2.6-24.705,16.259-1.307-12.358,6.506-4.555,28.607Z" transform="translate(-17.035 -22.681)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_35" data-name="Path 35" d="M663.6,934.078l3.248-14.952L684.4,912.62l-15.606,9.1-.644,22.111Z" transform="translate(-16.361 -22.5)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_36" data-name="Path 36" d="M764.84,876.62l-18.21,16.259L732.322,924.09l3.258-14.962-12.358,18.21,3.248-18.21-9.753,19.507L708.27,947.5l3.248,26.656,4.555-13.655v16.259l3.9-32.518,5.2-13.655L721.925,965.7l6.5-35.113-.644,32.518,14.3-28.617L734.926,965.7l11.7-27.953-5.2,20.151,9.1,1.307,11.7-26.666,5.852-1.951,6.505-13.654-9.11,9.753-7.149.653,9.1-19.507-7.8,4.555,17.556-27.31-23.409,22.1L737.531,931.24l17.556-31.865Z" transform="translate(-17.462 -21.613)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_37" data-name="Path 37" d="M814.844,914.62l-5.852,18.853-11.7,11.7L784.93,969.893l13.011-29.914,8.446-6.505Z" transform="translate(-19.352 -22.55)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_38" data-name="Path 38" d="M833.09,904.62l-11.7,17.556-4.555,14.308-2.594,20.8-1.307-20.16,3.745-13.079,4.145-11.216Z" transform="translate(-20.042 -22.303)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_39" data-name="Path 39" d="M822.641,936.55l-1.463,13.167-3.657,8.047,10.972-18.288L827.03,927.04Z" transform="translate(-20.156 -22.856)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_40" data-name="Path 40" d="M813.27,998.346l.976-17.556.487,19.995Z" transform="translate(-20.051 -24.181)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_41" data-name="Path 41" d="M844.9,983.026l-11.7-20.482.975-9.754-3.9,12.192Z" transform="translate(-20.47 -23.491)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_42" data-name="Path 42" d="M832.647,994.248l-.488-11.217L827.77,972.79,838.5,988.4l-4.389-2.438Z" transform="translate(-20.409 -23.984)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_43" data-name="Path 43" d="M852.659,923.79l-2.438,20.97-1.951-18.044Z" transform="translate(-20.914 -22.776)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_44" data-name="Path 44" d="M844.671,921.79l-3.9,1.463,3.9,26.334Z" transform="translate(-20.729 -22.726)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_45" data-name="Path 45" d="M772.085,941.846v14.143h1.951l8.778-14.143,21.945-17.556L783.3,944.284l-10.729,20.482-7.8,7.315,8.29-11.7L767.7,955.5Z" transform="translate(-18.855 -22.788)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_46" data-name="Path 46" d="M778.77,931.612l3.414-5.364,10.241-4.877,13.167-16.581-13.167,22.433h-5.852Z" transform="translate(-19.2 -22.307)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_47" data-name="Path 47" d="M867.27,885.765V908.2l3.9-23.408Z" transform="translate(-21.382 -21.814)" fill="#231f20" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_48" data-name="Path 48" d="M859.9,916.29,858.6,935.8l3.58,1.951Z" transform="translate(-21.168 -22.591)" fill="#231f20" />
                        <path id="Path_49" data-name="Path 49" d="M859.9,943.257l-1.3,26.656,3.248,3.579-1.619-31.543Z" transform="translate(-21.168 -23.224)" fill="#231f20" />
                        <path id="Path_50" data-name="Path 50" d="M843.27,953.62l1.619,11.051,11.383,14.308L846.2,962.72Z" transform="translate(-20.791 -23.511)" fill="#231f20" />
                        <path id="Path_51" data-name="Path 51" d="M877.27,886.29l1.3,26,2.6-5.2Z" transform="translate(-21.629 -21.851)" fill="#231f20" />
                        <path id="Path_52" data-name="Path 52" d="M881.6,871.587l.975,26.012,3.248-5.53L881.6,870.29Z" transform="translate(-21.735 -21.457)" fill="#231f20" />
                        <path id="Path_53" data-name="Path 53" d="M835.768,869.62l-8.778,8.456-.654,11.051-10.407,7.481,12.68-5.852-.322-11.06Z" transform="translate(-20.116 -21.44)" fill="#231f20" />
                        <path id="Path_54" data-name="Path 54" d="M801.56,890.29l-3.9,6.5-5.2-2.926v7.481l-5.53,12.026,11.7-15.274Z" transform="translate(-19.401 -21.95)" fill="#231f20" />
                        <path id="Path_55" data-name="Path 55" d="M830.247,891.29l-13.977,13,1.619,9.432.975-8.778Z" transform="translate(-20.125 -21.975)" fill="#231f20" />
                        <path id="Path_56" data-name="Path 56" d="M808.884,959.95,793.6,983.358l19.507-21.78Z" transform="translate(-19.566 -23.667)" fill="#231f20" />
                        <path id="Path_57" data-name="Path 57" d="M807.164,953.95l-5.2,1.307-12.036,18.2,12.679-13.977,6.505-4.223Z" transform="translate(-19.475 -23.519)" fill="#231f20" />
                        <path id="Path_58" data-name="Path 58" d="M843.024,889.62,840.741,907.5l-7.471,13.333,10.4-12.358Z" transform="translate(-20.544 -21.933)" fill="#231f20" />
                        <path id="Path_59" data-name="Path 59" d="M855.865,888.612l-2.595,12.026,4.877-12.348Z" transform="translate(-21.037 -21.901)" fill="#231f20" />
                        <path id="Path_60" data-name="Path 60" d="M853.8,904.62l-3.9.322-1.3,11.7,3.58-2.594Z" transform="translate(-20.922 -22.303)" fill="#231f20" />
                        <path id="Path_61" data-name="Path 61" d="M782.6,890.6l.322,11.051L785.2,889.62Z" transform="translate(-19.295 -21.933)" fill="#231f20" />
                        <path id="Path_62" data-name="Path 62" d="M701.556,1079.987l9.266-9.021-29.992-26.578-43.891-21.7-52.181-4.145-81.929,3.657-30.479,8.778-6.749,6.5,72.5,13.333-36.975-13.977,42.428-9.51,36.332-1.707,26.578,1.707,25.6,6.34,43.89,24.871,18.288,15.606Z" transform="translate(-11.479 -25.112)" fill="#231f20" stroke="#000" stroke-miterlimit="10" stroke-width="1" />
                        <path id="Path_63" data-name="Path 63" d="M269.687,1277.335l10.241,27.787,27.8,2.926L332,1328.95l-18.424-92.58-71.308,37.961Z" transform="translate(-5.973 -30.482)" fill="#d1d7e4" opacity="0.24" />
                        <path id="Path_64" data-name="Path 64" d="M1318.373,1214.69l21.945-16.093v-21.946l17.557-1.463,2.926-27.8,17.5-12.27-62.422-6.69-15.606,115.93Z" transform="translate(-32.058 -27.821)" fill="#d1d7e4" opacity="0.24" />
                        <path id="Path_65" data-name="Path 65" d="M465.6,1037.934l40.311,45.52,35.473-17.108-3.287-15.079-36.975-13.976Z" transform="translate(-11.479 -25.574)" fill="#0b3150" />
                        <path id="Path_66" data-name="Path 66" d="M472.349,1030.975l30.479-8.778,81.929-3.657,21.7,8.778-26.578-1.707-36.332,1.707-42.428,9.51-35.522.644Z" transform="translate(-11.479 -25.112)" fill="#0b3150" />
                        <path id="Path_67" data-name="Path 67" d="M713.833,1070.965l-29.992-26.578-43.891-21.7-52.181-4.145,21.7,8.778,46.729,17.312,22.765,13.9,25.6,21.457Z" transform="translate(-14.491 -25.112)" fill="#0b3150" />
                        <path id="Path_68" data-name="Path 68" d="M543.3,1066.851l52.152-9.061,43.071,7.958,1.307,18.21-9.11,24.706L610.57,1124.27l-23.408,2.6-13.011-3.248L561.8,1117.12l-18.21-21.457Z" transform="translate(-13.395 -26.079)" fill="#0b3150" />
                        <path id="Path_69" data-name="Path 69" d="M335.673,1160.5,467.725,1007.29l-6.018,29.9,8.125,115.422-66.645-14.962-48.114,58.852-47.382,48.767,22.3-75.248Z" transform="translate(-7.586 -24.834)" fill="#0b3150" />
                        <path id="Path_70" data-name="Path 70" d="M526.277,1112.583l-20.16-27.963-32.186,69.9,58.521,19.176-27.31-25.359,17.556-22.755Z" transform="translate(-11.685 -26.741)" fill="#0b3150" />
                        <path id="Path_71" data-name="Path 71" d="M465.6,1037.95l40.311,45.52-32.186,69.9Z" transform="translate(-11.479 -25.59)" fill="#0b3150" />
                        <path id="Path_72" data-name="Path 72" d="M527.51,1113.29l48.114,16.9.654,8.456-8.612,27.066-4.721-20.571,6.827-11.051-11.128-.809-7.315,15.85,3.492-16.669-11.051-1.3-19.839-4.877Z" transform="translate(-12.917 -27.448)" fill="#0b3150" />
                        <path id="Path_73" data-name="Path 73" d="M505.93,1149.95l46.817,18.863,35.444.975-54.951,5.521Z" transform="translate(-12.473 -28.351)" fill="#0b3150" />
                        <path id="Path_74" data-name="Path 74" d="M590.018,1173.548l40.964-11.051,1.629-4.876L553.93,1169l35.444.975Z" transform="translate(-13.657 -28.541)" fill="#0b3150" />
                        <path id="Path_75" data-name="Path 75" d="M680.106,1091.95l31.211,3.258-9.432,12.348-28.285,3.9Z" transform="translate(-16.607 -26.921)" fill="#0b3150" />
                        <path id="Path_76" data-name="Path 76" d="M640.93,1065.95l38.37,25.359,31.211,3.257L676.7,1067.579Z" transform="translate(-15.802 -26.281)" fill="#0b3150" />
                        <path id="Path_77" data-name="Path 77" d="M576.93,1130.061l52.669-5.2,26.666-11.7,43.237-5.209L674.8,1119.011Z" transform="translate(-14.224 -27.316)" fill="#0b3150" />
                        <path id="Path_78" data-name="Path 78" d="M607.82,1135.189l13.82,15.772-3.745-16.094,27.641-9.88,29.134-6.827-45.071,6.954-52.669,5.2,4.106,18.21-.205-9.431,10.085-1.18,5.238,16.464,2.321-18.044.732-.731,4.262,16.454Z" transform="translate(-14.224 -27.568)" fill="#0b3150" />
                        <path id="Path_79" data-name="Path 79" d="M539.93,1051.176V1039.15l9.432,9.1,2.926-.654-2.926-13.977,8.778,11.7,4.223-2.926-.975-8.125,9.109,12.68,9.422-3.258,15.45,13.5-52.152,9.061Z" transform="translate(-13.312 -25.484)" fill="#0b3150" />
                        <path id="Path_80" data-name="Path 80" d="M584.188,1030.29v12.68l4.877-.332,2.595-8.125,3.9,11.383,12.68-1.307,4.233-13.655.322,14.962,4.223-.976,3.258-8.456v10.076l1.619,1.307,2.926-8.134,1.307,9.753,13.323,15.605-43.071-7.959-15.449-13.5Z" transform="translate(-14.323 -25.401)" fill="#0b3150" />
                        <path id="Path_81" data-name="Path 81" d="M630.905,1044.563l2.6,1.629-.975,3.9,7.149,3.57,1.307-6.5-.654-4.877,3.248,3.57.975,10.407,6.184.654,1.951-7.8,3.248,10.729,1.3-11.382,3.258,11.051,15.928,7.48-35.766-1.629-10.729-15.274Z" transform="translate(-15.531 -25.697)" fill="#0b3150" />
                        <path id="Path_82" data-name="Path 82" d="M307.69,1240.442l27.983-84.777,132.052-153.207,62.929-63.466,86.367-71.971L717.4,840.053l86.328-23.193L943.06,811.29l111.472,58.521,214.44,215.551L1040.818,905.5l-134.6-57.048-158,8.778L600.469,933.3,471.733,1044.485,366.4,1179.073l-23.408,86.318,3.716,153.393L307.69,1240.442" transform="translate(-7.586 -20.002)" fill="#b0b8a7" />
                    </g>
                </g>
            </svg>
            </div>
            <div id="poly-back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 957.948 1349.005">
                <path id="Path_83" data-name="Path 83" d="M-98.169,907.111c276.659,174.028,348.693,624.715,348.693,624.715l335.944,101.994,25.5,386.941,246.061,233.949h-956.2Z" transform="translate(98.669 -906.206)" fill="#597588" stroke="#707070" stroke-width="1" />
            </svg>
            </div>
            {/* <div id="hi">HI</div> */}
            <div id="hi"><svg xmlns="http://www.w3.org/2000/svg" width="146" height="166" viewBox="0 0 146 166">
                <text id="HI" transform="translate(0 133)" fill="#fff" font-size="141" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="0" y="0">HI</tspan></text>
            </svg>
            </div>
            <div id="im"><svg xmlns="http://www.w3.org/2000/svg" width="196" height="166" viewBox="0 0 196 166">
                <text id="I_M" data-name="I&apos;M" transform="translate(0 133)" fill="#fff" font-size="141" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="0" y="0">I&apos;M</tspan></text>
            </svg>
            </div>
            <div id="deepanshu">
                <svg xmlns="http://www.w3.org/2000/svg" width="737" height="144" viewBox="0 0 737 144">
                    <text id="DEEPANSHU" transform="translate(0 115)" fill="#fff" font-size="122" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="0" y="0">DEEPANSHU</tspan></text>
                </svg>
            </div>
            <div id="yadav">
                <svg xmlns="http://www.w3.org/2000/svg" width="730" height="265" viewBox="0 0 730 265">
                    <text id="YADAV" transform="translate(0 212)" fill="#fff" font-size="226" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="0" y="0">YADAV</tspan></text>
                </svg>
            </div>
            <div id="poly1"><svg xmlns="http://www.w3.org/2000/svg" width="169.949" height="163.361" viewBox="0 0 169.949 163.361">
                <g id="Polygon_1" data-name="Polygon 1" transform="translate(56.5) rotate(30)" fill="#fff">
                    <path d="M 130.1322479248047 112.5 L 0.8677525520324707 112.5 L 65.5 0.9970387816429138 L 130.1322479248047 112.5 Z" stroke="none" />
                    <path d="M 65.5 1.994064331054688 L 1.735504150390625 112 L 129.2644958496094 112 L 65.5 1.994064331054688 M 65.5 0 L 131 113 L 0 113 L 65.5 0 Z" stroke="none" fill="#707070" />
                </g>
            </svg>
            </div>
            <div id="poly2"><svg xmlns="http://www.w3.org/2000/svg" width="183.485" height="190.806" viewBox="0 0 183.485 190.806">
                <g id="Polygon_2" data-name="Polygon 2" transform="translate(109.985) rotate(60)" fill="#fff">
                    <path d="M 146.1329193115234 126.5 L 0.867081344127655 126.5 L 73.5 0.9982221722602844 L 146.1329193115234 126.5 Z" stroke="none" />
                    <path d="M 73.5 1.996391296386719 L 1.734130859375 126 L 145.265869140625 126 L 73.5 1.996391296386719 M 73.5 0 L 147 127 L 0 127 L 73.5 0 Z" stroke="none" fill="#707070" />
                </g>
            </svg>
            </div>
            <div id="poly3"><svg xmlns="http://www.w3.org/2000/svg" width="162.861" height="169.083" viewBox="0 0 162.861 169.083">
                <g id="Polygon_3" data-name="Polygon 3" transform="translate(162.861 56.5) rotate(120)" fill="#fff">
                    <path d="M 129.1355743408203 112.5 L 0.8644299507141113 112.5 L 65 1.002778172492981 L 129.1355743408203 112.5 Z" stroke="none" />
                    <path d="M 65 2.005546569824219 L 1.728851318359375 112 L 128.2711486816406 112 L 65 2.005546569824219 M 65 0 L 130 113 L 0 113 L 65 0 Z" stroke="none" fill="#707070" />
                </g>
            </svg>
            </div>
            <div id="tap" onClick={()=>{document.getElementById("brandx").scrollIntoView()}}>
                TAP HERE
            </div>

            {/* <div id="tap-cover"></div> */}
            </div>


            {/* //Intro */}
            <div id="brandx"><svg xmlns="http://www.w3.org/2000/svg" width="134" height="187" viewBox="0 0 134 187">
                <g id="brand" transform="translate(-413.013 -392.042)">
                    <text id="DEE" transform="translate(413.013 457.042)" fill="#fae3ad" font-size="69" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="0" y="0">DEE</tspan></text>
                    <text id="PAN" transform="translate(413.013 511.042)" fill="#fae3ad" font-size="66" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="0" y="0">PAN</tspan></text>
                    <text id="SHU" transform="translate(414.013 564.042)" fill="#fae3ad" font-size="63" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="0" y="0">SHU</tspan></text>
                </g>
            </svg>
            </div>
            <div id="poly-headerx">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1257.619 463.024">
                    <path id="poly-header" d="M2242.406,2160l389.344,272.175L1375.944,2621.943V2160Z" transform="translate(-1375.444 -2159.5)" fill="#597588" stroke="#707070" stroke-width="1" />
                </svg>
            </div>
            {/* //Text */}
            <div id="intro">
                <p>
                    Do you want to work with someone who you could trust ? Someone who gives his all when doing something he likes ?
                    Well, you've come to the right page.
                    <br />
                    <br />
                    Out of many things that I love doing Solving Problems, Coding and Playing Chess are among the latest.
                    What I believe from my experience, and inputs from my peers is that I am good both Creatively and Technically.
                    So if you want to work with me, do check out my<br /><br />
                    <button id="resume-button" onClick={()=>{document.getElementById('Work Experience').scrollIntoView()}}>
                        Resume
                    </button>
                    <br />
                    <br />
                    Also checkout Slambook - A Blogging website by me based on MERN stack by clicking <br />
                    <br />
                    <br />
                    <button id="slambook-button" >
                    <a onClick={()=>{window.location.replace("http://deepanshuyadav.xyz/slambook/home")}}>
                        Slambook
                    </a>
                    </button>
                    <br /><br />
                    Reach me by leaving a message at :
        
                    <br /><br />
                    <button id="linkedin-button" onClick={()=>{window.location.replace("https://www.linkedin.com/in/deepanshu-yadav-b89311128/")}}>
    
                        LinkedIn
    
                    </button>
                    <br />
                    <br />
                    Or mail me at:
                    <br />
                    <br />
                    <button id="mail-button" onClick={()=>{location.href="https://mail.google.com/mail/?view=cm&fs=1&to=daybond007@gmail.com"}}>
                        daybond007@gmail.com
                    </button>
                    <br />
                    <br />
                    I'll revert back to you as soon as possible.
                    </p>
            </div>


            <Data />


            

        </div>
    )
}

export default Cover

