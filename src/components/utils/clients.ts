import { clientsImg } from "./clientsImg";

// import src2 from "../../assets/images/clients/1-2.png";
// import src3 from "../../assets/images/clients/1-3.png";

// import src01 from "../../assets/images/clients/01.png";
// import src02 from "../../assets/images/clients/02.png";

// import src11 from "../../assets/images/clients/11.png";
// import src12 from "../../assets/images/clients/12.png";
// import src13 from "../../assets/images/clients/13.png";

// import src21 from "../../assets/images/clients/21.png";
// import src22 from "../../assets/images/clients/22.png";
// import src23 from "../../assets/images/clients/23.png";

// import src31 from "../../assets/images/clients/31.png";
// import src32 from "../../assets/images/clients/32.png";
// import src33 from "../../assets/images/clients/33.png";
// import src34 from "../../assets/images/clients/34.png";

// import src41 from "../../assets/images/clients/41.png";
// import src42 from "../../assets/images/clients/42.png";
// import src43 from "../../assets/images/clients/43.png";
// import src44 from "../../assets/images/clients/44.png";

// import src51 from "../../assets/images/clients/51.png";
// import src52 from "../../assets/images/clients/52.png";
// import src53 from "../../assets/images/clients/53.png";




// import src61 from "../../assets/images/clients/61.png";
// import src62 from "../../assets/images/clients/62.png";

// import src71 from "../../assets/images/clients/71.png";
// import src72 from "../../assets/images/clients/72.png";
// import src73 from "../../assets/images/clients/73.png";

import { IClient } from "../Client/Client";
export const getClinets = (task: number) => {

    const arrCat0: IClient[] = [
        {
            id: "01",
            category: 0,
            img: clientsImg(0, 0),
            check: "wait",
            timeClass: "waitTime",
            classIcon: "01"
        },
        {
            id: "02",
            category: 0,
            img: clientsImg(0, 1),
            check: "wait",
            timeClass: "waitTime",
        },
    ]

    const arrCat1: IClient[] = [
        {
            id: "11",
            category: 1,
            img: clientsImg(1, 0),
            check: "wait",
            timeClass: "waitTime",
            classIcon: "01"
        },
        {
            id: "12",
            category: 1,
            img: clientsImg(1, 1),
            check: "wait",
            timeClass: "waitTime",
        },
        {
            id: "13",
            category: 1,
            img: clientsImg(1, 2),
            check: "wait",
            timeClass: "waitTime",
        },

    ]

    const arrCat2: IClient[] = [
        {
            id: "21",
            category: 2,
            img: clientsImg(2, 0),
            check: "wait",
            timeClass: "waitTime",
        },
        {
            id: "22",
            category: 2,
            img: clientsImg(2, 1),
            check: "wait",
            timeClass: "waitTime",
            classIcon: "icon22"
        },
        {
            id: "23",
            category: 2,
            img: clientsImg(2, 2),
            check: "wait",
            timeClass: "waitTime",
        },
    ]
    const arrCat3: IClient[] = [
        {
            id: "31",
            category: 3,
            img: clientsImg(3, 0),
            check: "wait",
            timeClass: "waitTime",
            classIcon: "31"
        },
        {
            id: "32",
            category: 3,
            img: clientsImg(3, 1),
            check: "wait",
            timeClass: "waitTime",
        },
        {
            id: "33",
            category: 3,
            img: clientsImg(3, 2),
            check: "wait",
            timeClass: "waitTime",
        },
        {
            id: "34",
            category: 3,
            img: clientsImg(3, 3),
            check: "wait",
            timeClass: "waitTime",
        },


    ]

    const arrCat4: IClient[] = [
        {
            id: "41",
            category: 4,
            img: clientsImg(4, 0),
            check: "wait",
            timeClass: "waitTime",
        },
        {
            id: "42",
            category: 4,
            img: clientsImg(4, 1),
            check: "wait",
            timeClass: "waitTime",
        },
        {
            id: "43",
            category: 4,
            img: clientsImg(4, 2),
            check: "wait",
            timeClass: "waitTime",
        },
        {
            id: "44",
            category: 4,
            img: clientsImg(4, 3),
            check: "wait",
            timeClass: "waitTime",
        },


    ]


    const arrCat5: IClient[] = [
        {
            id: "51",
            category: 5,
            img: clientsImg(5, 0),
            check: "wait",
            timeClass: "waitTime",
        },
        {
            id: "52",
            category: 5,
            img: clientsImg(5, 1),
            check: "wait",
            timeClass: "waitTime",
        },
        {
            id: "53",
            category: 5,
            img: clientsImg(5, 2),
            check: "wait",
            timeClass: "waitTime",
        },

    ]

    const arrCat6: IClient[] = [
        {
            id: "61",
            category: 6,
            img: clientsImg(6, 0),
            check: "wait",
            timeClass: "waitTime",
        },
        {
            id: "62",
            category: 6,
            img: clientsImg(6, 1),
            check: "wait",
            timeClass: "waitTime",
        }

    ]

    const arrCat7: IClient[] = [
        {
            id: "71",
            category: 7,
            img: clientsImg(7, 0),
            check: "wait",
            timeClass: "waitTime",
        },
        {
            id: "72",
            category: 7,
            img: clientsImg(7, 1),
            check: "wait",
            timeClass: "waitTime",
        },
        {
            id: "73",
            category: 7,
            img: clientsImg(7, 2),
            check: "wait",
            timeClass: "waitTime",
        },
    ]


    const arrTask1: IClient[] = [
        {
            id: "1",
            category: 0,
            img: clientsImg(-1, 0),
            check: "wait",
            timeClass: "waitTime"
        },
        {
            id: "2",
            category: 7,
            img: clientsImg(-1, 1),
            check: "wait",
            timeClass: "waitTime",
            classIcon: "icon2"
        },
        {
            id: "3",
            category: 1,
            img: clientsImg(-1, 2),
            check: "wait",
            timeClass: "waitTime",
            classIcon: "icon3"
        }
    ]
    const arrTask2: IClient[] = [
        arrCat3[1],
        arrCat2[0],
        arrCat5[1],
        arrCat1[2],


        arrCat0[0],
        arrCat1[0],
        arrCat2[2],
        arrCat3[3],

        arrCat5[0],
        arrCat6[0],
        arrCat7[0],
        arrCat3[2],
        arrCat2[1],
        arrCat5[2],
        arrCat0[1],
    ]


    const arrTask3 = [
        arrCat4[1],
        arrCat6[0],
        arrCat3[2],
        arrCat1[0],


        arrCat6[1],
        arrCat3[1],
        arrCat4[0],
        arrCat5[1],

        arrCat7[0],
        arrCat0[0],
        arrCat4[3],
        arrCat2[0],


        arrCat1[1],
        arrCat4[2],
        arrCat3[0]

    ]

    const arrTask4 = [
        arrCat4[2],
        arrCat6[1],
        arrCat3[3],
        arrCat1[2],


        arrCat0[0],
        arrCat3[2],
        arrCat4[3],
        arrCat5[2],

        arrCat7[2],
        arrCat0[1],
        arrCat4[2],

        arrCat5[1],
        arrCat4[0],
        arrCat3[0]

    ]





    const arrClientsTask = [
        arrTask1,
        arrTask2,
        arrTask3,
        arrTask4,
    ]
    return arrClientsTask[task]
}