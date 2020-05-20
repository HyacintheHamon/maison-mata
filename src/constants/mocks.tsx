const location = {
    latitude: 40.73978092263567,
    longitude: -73.87333547273988,
    latitudeDelta: 0.06,
    longitudeDelta: 0.06,
}

const products = [
    {
        id: 0,
        imgSource: require("../assets/img/product1.png"),
        mask: require("../assets/img/mask1.png"),
        productTitle: "PERSONALITY",
        colors: ['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']
    },
    {
        id: 1,
        imgSource: require("../assets/img/product2.png"),
        mask: require("../assets/img/mask2.png"),
        productTitle: "SMART",
        colors: ['#f9ca24', '#f0932b', '#eb4d4b', '#8E44AD', '#6ab04c', '#e056fd', '#4834d4']
    },
    {
        id: 2,
        imgSource: require("../assets/img/product3.png"),
        mask: require("../assets/img/mask3.png"),
        productTitle: "ELEGANCE",
        colors: ['#16A085', '#28CE7A', '#2ECC71']
    },
    {
        id: 3,
        imgSource: require("../assets/img/product4.png"),
        mask: require("../assets/img/mask4.png"),
        productTitle: "ALLURE",
        colors: ['#f9ca24', '#BDC3C7', '#95A5A6', '#2C3E50', '#2980B9']
    },
    {
        id: 4,
        imgSource: require("../assets/img/product5.png"),
        mask: require("../assets/img/mask5.png"),
        productTitle: "CREATIVE",
        colors: ['#F1C40F', '#F39C12', '#E67E22', '#D35400']
    },
    {
        id: 5,
        imgSource: require("../assets/img/product6.png"),
        mask: require("../assets/img/mask6.png"),
        productTitle: "CHARISMA",
        colors: ['#f9ca24', '#f0932b', '#eb4d4b', '#8E44AD', '#6ab04c', '#e056fd', '#4834d4']
    }
];


export { location, products };
