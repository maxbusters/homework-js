
new Vue({
    el: "#app",
    data() {
        return {
            errors: [],
            cardHolder: "",
            cardNumber: "",
            cardMonth: "",
            cardYear: "",
            cardCvv: "",
            cardNameLength: 25,
            minCardYear: new Date().getFullYear(),
            cardMask: "#### #### #### ####",
            cvvMask: "####",
            isCardFlipped: false,
            isSuccess: false,
            holderRegEx: /^[a-z ,.'-]+$/i,
            isError: false,
            isScroll: false,
            isSuccess: false,
        }
    },
    mounted() {
        $("#cardNumber").focus();
    },
    computed: {
        minCardMonth() {
            if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
            return 1;
        },
        getCardType() {
            let number = this.cardNumber;
            let re = new RegExp("^4");
            if (number.match(re) != null) return "visa";

            re = new RegExp("^5[1-5]");
            if (number.match(re) != null) return "mastercard";

            return "visa";
        },
    },
    watch: {
        isCardFlipped() {
            $(".card-item").toggleClass('flipCard');
        },
        isScroll() {
            this.$nextTick().then(() => document.querySelector('#scrollAnch')?.scrollIntoView("smooth"));
            this.isScroll = false;
        }
    },
    methods: {
        checkForm(e) {
            this.isScroll = true;
            this.isSuccess = false;
            this.errors = [];
            
            if (!this.cardHolder) {
                this.errors.push('Card holder required');
            }
            if(!this.cardHolder.match(this.holderRegEx)){
                this.errors.push('Card holder must contains only latin symbols'); 
            }
            
            if (!this.cardNumber) {
                this.errors.push('Number required');
            }
            if (!this.cardMonth) {
                this.errors.push('Month required');
            }
            if (!this.cardYear) {
                this.errors.push('Year required');
            }

            if(!this.cardCvv){
                this.errors.push('CVV required');
            }

            if(this.cardCvv.length < 3){
                this.errors.push('CVV must contains from 3 to 4 digits');
            }
            
            if(this.errors.length === 0){
                this.isScroll = true;
                this.isSuccess = true;
                e.preventDefault();
                return true;
            } else {
                this.isScroll == true;
                e.preventDefault();
            }
            
            
        },
        flipCard(state) {
            this.isCardFlipped = state;
        }
    },
});
