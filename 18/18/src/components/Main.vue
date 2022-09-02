<template>
  <div class="main">
    <main class="main">
      <div class="main__wrapper">
        <div class="main__card card">
          <div class="card-item">
            <div class="card-item--front front">
              <div class="front__wrapper">
                <div class="front__top top">
                  <div class="top__chip">
                    <img
                      src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                    />
                  </div>
                  <div class="top__type">
                    <img
                      v-bind:src="
                        'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' +
                        getCardType +
                        '.png'
                      "
                      v-if="getCardType"
                      v-bind:key="getCardType"
                      alt=""
                    />
                  </div>
                </div>
                <label for="cardNumber" class="front__number" ref="cardNumber">
                  <span v-for="(n, $index) in cardMask" :key="$index">
                    <transition name="slide-fade-up">
                      <div
                        class="front__numberItem"
                        v-if="
                          $index > 4 &&
                          $index < 15 &&
                          cardNumber.length > $index &&
                          n.trim() !== ''
                        "
                      >
                        *
                      </div>
                      <div
                        class="front__numberItem"
                        :class="{ '--hidden': n.trim() === '' }"
                        :key="$index"
                        v-else-if="cardNumber.length > $index"
                      >
                        {{ cardNumber[$index] }}
                      </div>
                      <div
                        class="front__numberItem"
                        :class="{ '--hidden': n.trim() === '' }"
                        v-else
                        :key="$index + 1"
                      >
                        {{ n }}
                      </div>
                    </transition>
                  </span>
                </label>
                <div class="front__bottom bottom">
                  <label for="cardHolder" class="bottom__holder holder">
                    <div class="holder__title">Card Holder</div>
                    <transition name="slide-fade-up">
                      <div
                        class="holder__name"
                        v-if="cardHolder.length"
                        key="1"
                      >
                        <transition-group name="slide-fade-right">
                          <span
                            class="holder__nameItem"
                            v-for="(n, $index) in filteredCardHolder"
                            v-bind:key="$index + 1"
                            >{{ n }}</span
                          >
                        </transition-group>
                      </div>
                      <div class="holder__name" v-else key="2">Full Name</div>
                    </transition>
                  </label>
                  <div class="bottom__date date">
                    <label for="cardMonth" class="date__title">Expires</label>
                    <div class="date__mon-year">
                      <label for="cardMonth" class="date__dateItem">
                        <transition name="slide-fade-up">
                          <span v-if="cardMonth" v-bind:key="cardMonth">{{
                            cardMonth
                          }}</span>
                          <span v-else key="2">MM</span>
                        </transition>
                      </label>
                      /
                      <label for="cardYear" class="date__dateItem">
                        <transition name="slide-fade-up">
                          <span v-if="cardYear" v-bind:key="cardYear">{{
                            String(cardYear).slice(2, 4)
                          }}</span>
                          <span v-else key="2">YY</span>
                        </transition>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-item--back back">
              <div class="back__wrapper">
                <div class="back__badge"></div>

                <div class="back__cvv cvv">
                  <div class="cvv__title">CVV</div>
                  <div class="cvv__band">
                    <span v-for="(n, $index) in cardCvv" :key="$index">
                      *
                    </span>
                  </div>
                </div>
                <div class="back__type">
                  <img
                    v-bind:src="
                      'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' +
                      getCardType +
                      '.png'
                    "
                    v-if="getCardType"
                    class="card-item__typeImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main__form form">
          <form
            @submit="checkForm"
            action=""
            method="post"
            onsubmit="return false;"
          >
            <div class="form__container">
              <div class="mb-3">
                <label for="cardNumber" class="form-label">Card Number</label>
                <input
                  id="cardNumber"
                  v-model="cardNumber"
                  v-mask="cardMask"
                  type="text"
                  class="form-control"
                  autocomplete="off"
                />
              </div>
              <div class="mb-3">
                <label for="cardHolder" class="form-label">Card Holder</label>
                <input
                  id="cardHolder"
                  type="text"
                  class="form-control"
                  autocomplete="off"
                  v-model="cardHolder"
                  :maxlength="cardNameLength"
                />
              </div>

              <div class="row">
                <div class="col">
                  <label for="cardMonth">Expiration Date</label>
                </div>
                <div class="col"></div>
                <div class="col">
                  <label for="cardCvv" class="form-label">CVV</label>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <select
                    class="form-select"
                    id="cardMonth"
                    v-model="cardMonth"
                  >
                    <option value="" disabled selected>Month</option>
                    <option
                      v-for="n in 12"
                      v-bind:value="checkMonthNum(n)"
                      v-bind:disabled="n < minCardMonth"
                      v-bind:key="n"
                    >
                      {{ checkMonthNum(n)}}
                    </option>
                  </select>
                </div>
                <div class="col">
                  <select class="form-select" id="cardYear" v-model="cardYear">
                    <option value="" disabled selected>Year</option>
                    <option
                      v-bind:value="$index + minCardYear"
                      v-for="(n, $index) in 12"
                      v-bind:key="n"
                    >
                      {{ $index + minCardYear }}
                    </option>
                  </select>
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    id="cardCvv"
                    v-mask="cvvMask"
                    maxlength="4"
                    v-model="cardCvv"
                    v-on:focus="flipCard(true)"
                    v-on:blur="flipCard(false)"
                    autocomplete="off"
                  />
                </div>
              </div>

              <div class="mb-3 mt-3">
                <button class="btn btn-primary form-control" @click="checkForm">
                  Submit
                </button>
              </div>
              <div v-if="errors.length">
                <div class="alert alert-danger" role="alert">
                  <ul>
                    <li v-for="(error, index) in errors" v-bind:key="index">
                      {{ error }}
                    </li>
                  </ul>
                </div>
              </div>
              <div v-if="isSuccess">
                <div class="alert alert-success" role="alert">All ok</div>
              </div>
              <span id="scrollAnch"></span>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
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
    };
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
    filteredCardHolder() {
      return this.cardHolder.replace(/\s\s+/g, " ");
    },
  },
  watch: {
    isCardFlipped() {
      $(".card-item").toggleClass("flipCard");
    },
    isScroll() {
      this.$nextTick().then(() =>
        document.querySelector("#scrollAnch")?.scrollIntoView("smooth")
      );
      this.isScroll = false;
    },
  },
  methods: {
    checkForm(e) {
      this.isScroll = true;
      this.isSuccess = false;
      this.errors = [];

      if (!this.cardHolder) {
        this.errors.push("Card holder required");
      }
      if (!this.cardHolder.match(this.holderRegEx)) {
        this.errors.push("Card holder must contains only latin symbols");
      }

      if (!this.cardNumber) {
        this.errors.push("Number required");
      }
      if (!this.cardMonth) {
        this.errors.push("Month required");
      }
      if (!this.cardYear) {
        this.errors.push("Year required");
      }

      if (!this.cardCvv) {
        this.errors.push("CVV required");
      }

      if (this.cardCvv.length < 3) {
        this.errors.push("CVV must contains from 3 to 4 digits");
      }

      if (this.cardNumber.replace(/\s+/g,"").length < 16) {
        console.log(this.cardNumber.replace(/\s+/g,""));
        this.errors.push("Card number must contains 16 digits");
      }

      if (this.errors.length === 0) {
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
    },
    checkMonthNum(n){
      let num = n < 10 ? "0" + n : n;
      return num;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
