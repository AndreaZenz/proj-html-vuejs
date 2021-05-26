new Vue({
    el: "#app",
    data: {
        isHidden: false,
        navbarLinks: [{
            text: "HOME",
            link: "#"
        }, {
            text: "ELEMENT",
            link: "#"
        }, {
            text: "FEATURES",
            link: "#"
        }, {
            text: "PAGES",
            link: "#"
        }, {
            text: "PORTFOLIO",
            link: "#"
        }, {
            text: "BLOG",
            link: "#"
        }, {
            text: "SHOP",
            link: "#"
        },],
        tags: [{
            text: "GADGETS",
        }, {
            text: "PHOTOGRAPHY",
        }, {
            text: "LIFESTYLE",
        }, {
            text: "FASHION",
        }, {
            text: "RECIPES",
        }, {
            text: "TRAVEL",
        }, {
            text: "BUSINESS",
        },{
            text: "ARCHITECTURE",
        },{
            text: "REVIEWS",
        },{
            text: "SPORTS",
        },{
            text: "VIDEOS",
        },{
            text: "TECHNOLOGY",
        },{
            text: "DESIGN",
        },],
    },
    methods: {
        toggleInput() {
            if (this.isHidden == false) {
                this.isHidden = true;
            } else {
                this.isHidden = false;
            }
        },
    },
})