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
        footerData: {
            // twitterData: [
            //     {
            //         text: "lorem"
            //     }, {
            //         text: "lorem"
            //     },
            // ],
            // links:[
            // ]
        }
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