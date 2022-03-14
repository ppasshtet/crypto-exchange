<template>
    <div class="card-exchange" :class="{'custom-input__update--loading': isLoading}">
        <div class="card-exchange__header text text--24">
            <slot name="header"></slot>
        </div>
        <hr>
        <div class="card-exchange__main-wrapper">
            <div  v-if="showInput" class="main-wrapper__input">
                    <div class="input-field">
                        <CustomInput
                        :title="'You Pay'"
                        :input-options="{
                            placeholder: 'Pay Amount'
                        }"
                        :currency="currency"
                        @input="converValue($event)"
                        v-model="baseValue"
                        >
                        <template v-slot:button>
                            <select 
                                class="custom-select"
                                v-model="baseSelected"
                                @change="changeBaseSelected"
                                >
                                <option
                                v-for="(currency, index) of currency"
                                :key="index"
                                :currency="currency"
                                :index="index"
                                >
                                {{currency.curCode}}
                                </option>
                            </select>
                        </template>
                        </CustomInput>
                    </div> 
                    <div class="input-field">
                        <CustomInput
                        :title="'You Get'"
                        :input-options="{
                            placeholder: 'Get Amount'
                        }"
                        :currency="currency"
                        @input="unConvertValue($event)"
                        v-model="quoteValue"
                        >
                        <template v-slot:button>
                        <select 
                                class="custom-select"
                                v-model="quoteSelected"
                                @change="changeQuoteSelected"
                                >
                                <option
                                v-for="(currency, index) of currency"
                                :key="index"
                                :currency="currency"
                                :index="index"
                                >
                                {{currency.curCode}}
                                </option>
                            </select>
                        </template>
                        </CustomInput>
                    </div> 
            </div>
            <div v-else class="main-wrapper__info">
                <div class="info-block">
                    <div class="info-block__item">
                        <span class="info-ttile text text--14">Your {{baseSelected}} Balance</span>
                        0  {{baseSelected}}
                    </div>
                    <div class="info-block__item">
                        <span class="info-ttile text text--14">Your {{quoteSelected}} Balance</span>
                        0 {{quoteSelected}}
                    </div>
                    <div class="info-block__item">
                        <span class="info-ttile text text--14">Exchange Rate</span>
                        1 {{baseSelected}} = {{rate}} {{quoteSelected}}
                    </div>
                    <div class="info-block__item">
                        <span class="info-ttile text text--14">Next Update</span>
                        30 seconds
                    </div>
                </div>
                <div class="info-btn">
                    <Button @click="showModal">
                        
                        <template>
                            Exchange
                        </template>
                    </Button>
                    <ModalWindow ref="modal"  />
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    props: {
        showInput: {
            type: Boolean,
            default: true
        }
    },

    data() {
        return {
            currency: [],
            isLoading: true,
            baseValue: null,
            quoteValue: null,
            baseCourse: '',
            quoteCourse: '',
            persent: [1, 2, 3, 4, 5],
            baseSelected: '',
            quoteSelected: '',
            rate: null
        }
    },

    methods: {

        showModal(){
            this.$refs.modal.show = true
        },

        converValue(baseValue) {

            if (baseValue) {
                 return this.quoteValue = (baseValue / this.baseCourse) - ((baseValue / this.baseCourse) / 100 * this.persent[2])
            } else {
                return this.quoteValue = null
            }
           
        },

        unConvertValue(quoteValue) {

            if (quoteValue) {
                return this.baseValue = this.quoteCourse * (quoteValue - (quoteValue / 100 * this.persent[2]))
            } else {
                return this.baseValue = null
            }
            
        },

        changeInterval(){
            setInterval(() => {
                setTimeout(() => {
                    this.isLoading = false;
                }, 1000) 
                this.isLoading = true;
            },30000)
        },

        changeBaseSelected() {
            let indexBaseCur = this.currency.findIndex(el => el.curCode === this.baseSelected)
            this.baseCourse = this.currency[indexBaseCur].curAmount

            if (this.baseValue) {
                this.converValue(this.baseValue)
            }

        },

        changeQuoteSelected() {
            let indexQuoteCur = this.currency.findIndex(el => el.curCode === this.quoteSelected)
            this.quoteCourse = this.currency[indexQuoteCur].curAmount
            
            if (this.baseValue) {
                this.unConvertValue(this.quoteValue)
            }

        },
    },

    async mounted() {
        await axios
        .get('https://62262b482dfa524018fe0448.mockapi.io/currencyValute')
        .then(response => (this.currency = response.data))
        this.baseSelected = await this.currency[0].curCode
        this.quoteSelected = await this.currency[1].curCode
        this.baseCourse = await this.currency[0].curAmount
        this.quoteCourse = await this.currency[1].curAmount
        this.isLoading = false;
        this.changeInterval()
    },

}

</script>


<style lang="scss" scoped>
    .card-exchange {
        border: 1px solid $border-gray;
        width: 400px;
        height: 380px;
        background-color: $total-white;
        border-radius: 4px;
        padding: 40px;
    }

    .card-exchange__header {
        width: 100%;
        height: 30px;
        color: $text-black;
        margin-bottom: 20px;
    }

    .card-exchange__main-wrapper {
        margin: 20px 0px 8px 0px;
    }


    .info-block {
        width: 100%;
        padding-bottom: 34px;
    }

    .info-block__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 16px;
    }

    .info-ttile {
        color: $text-black;
    }

    .custom-input__update--loading {
      opacity: 0.2;
    }

    .input-pay__btn {
    height: 40px;
    width: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $button-main;
    border-radius: 0px 4px 4px 0px;
}

.custom-select {
    background: transparent;
    color: $total-white;
    border: none;

}

option {
    color: $brand;
    
}

.info-btn {
    width: 100%;
    min-height: 100%;
    
}
   
</style>