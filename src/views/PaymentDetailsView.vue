<template>
    <div class="flex flex-col items-center justify-start destination">
        <!-- Header Section -->
        <div class="flex items-center justify-between w-full max-w-md p-4 relative header-area h-[64px]">
            <button class="text-gray-600 relative z-10" @click="BackButton()">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <div class="content absolute top-0 left-0 w-full flex justify-center h-full items-center">
                <h1 class="text-lg font-semibold text-center">Payment details</h1>
            </div>
        </div>

        <!-- Progress Bar Container -->
        <div class="w-full">
            <!-- Progress Bar Fill with Gradient -->
            <div class="progress-container">
                <div class="progress-bar" style="width: 100%"></div>
            </div>
        </div>

        <!-- Description Text -->
        <div class="content max-w-md py-4 px-4">
            <p class="mt-4 text-center text-gray-600 description-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
            </p>
        </div>
        <div class="max-w-md py-4 px-4">
            <div class="flex flex-wrap invoice-content">
                <div class="w-2/4">
                    <h2 class="invoice">Invoice number</h2>
                </div>
                <div class="w-2/4">
                    <h3>1212314123</h3>
                </div>
                <div class="w-2/4">
                    <h2 class="receiver">Receiver</h2>
                </div>
                <div class="w-2/4">
                    <h3>1212314123</h3>
                </div>
                <div class="w-2/4">
                    <h2 class="payment-amount">Payment amount</h2>
                </div>
                <div class="w-2/4">
                    <h3>1212314123</h3>
                </div>
            </div>
            <div class="qr-code flex items-center justify-center py-7">
                <img src="../assets/img/qr.png" alt="qr" />
            </div>
            <div class="bank-apps">
                <h1>Bank apps</h1>
                <div class="app-grid flex items-center flex-wrap py-4">
                    <div class="app-item w-3/12 flex flex-col justify-center items-center py-3"
                        v-for="(app, index) in bankApps" :key="index">
                        <a :href="app.url" target="_blank" rel="noopener noreferrer">
                            <img :src="app.image" :alt="app.name" class="app-icon" />
                            <span class="app-name pt-3">{{ app.name }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- End Date -->
        <!-- Continue Button -->
        <div class="footer-content w-full pb-10 pt-8">
            <div class="relative w-full">
                <img src="../assets/img/effect3.svg" alt="effect2" class="absolute left-0 bottom-0" />
                <div class="continue-button px-8 max-w-md w-full mx-auto">
                    <button type="button" class="primary-btn" @click="continueButton()">
                        Continue
                        <font-awesome-icon :icon="['fas', 'arrow-right']" class="mx-2" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MBankIcon from '../assets/img/MBank.png'
import XacBankIcon from '../assets/img/Xac.png'
import KhanBankIcon from '../assets/img/KhanBank.png'
import StateBankIcon from '../assets/img/StateBank.png'
import TDBOnlineIcon from '../assets/img/TDBOnline.png'
import BogdBankIcon from '../assets/img/BogdBank.png'
import SocialPayIcon from '../assets/img/SocialPay.png'
import CapitronBankIcon from '../assets/img/CapitronBank.png'
import NIBankIcon from '../assets/img/NIBank.png'
import QPAYWalletIcon from '../assets/img/QPAYwallet.png'
import ChinggisKhaanIcon from '../assets/img/ChinggisKhaan.png'
import MonpayIcon from '../assets/img/Monpay.png'
import TransbankIcon from '../assets/img/Transbank.png'
import MostMoneyIcon from '../assets/img/MostMoney.png'
import ArdAppIcon from '../assets/img/Ardapp.png'

import { destinationStore } from '@/stores/counter'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Datepicker from 'vue3-datepicker'
const picked = ref(new Date())
const router = useRouter()
const location = destinationStore()
const bankApps = ref([
    { name: 'M Bank', image: MBankIcon, url: 'https://m-bank.com' },
    { name: 'Xac Bank', image: XacBankIcon, url: 'https://xacbank.com' },
    { name: 'Khan Bank', image: KhanBankIcon, url: 'https://khanbank.com' },
    { name: 'State Bank 3.0', image: StateBankIcon, url: 'https://statebank.com' },
    { name: 'TDB Online', image: TDBOnlineIcon, url: 'https://tdb-online.com' },
    { name: 'Bogd Bank', image: BogdBankIcon, url: 'https://bogdbank.com' },
    { name: 'Social Pay', image: SocialPayIcon, url: 'https://socialpay.com' },
    { name: 'Capitron Bank', image: CapitronBankIcon, url: 'https://capitronbank.com' },
    { name: 'NIBank', image: NIBankIcon, url: 'https://nibank.com' },
    { name: 'QPAY Wallet', image: QPAYWalletIcon, url: 'https://qpay.com' },
    { name: 'Chinggis Khaan', image: ChinggisKhaanIcon, url: 'https://chinggiskhaan.com' },
    { name: 'Monpay', image: MonpayIcon, url: 'https://monpay.com' },
    { name: 'Transbank', image: TransbankIcon, url: 'https://transbank.com' },
    { name: 'Most Money', image: MostMoneyIcon, url: 'https://mostmoney.com' },
    { name: 'Ard App', image: ArdAppIcon, url: 'https://ardapp.com' }
])

function BackButton() {
    router.push('/trip-details')
}

function continueButton() {
    router.push('/feedback')
}
</script>

<style scoped lang="scss">
.destination {
    background: rgba(255, 255, 255, 1);
}

.header-area {
    h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 600;
        line-height: 12px;
        letter-spacing: 0.015em;
        text-align: center;
        color: rgba(30, 30, 32, 1);
    }
}

.destination {
    h1 {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 12px;
        letter-spacing: 0.015em;
        text-align: left;
        color: rgba(64, 64, 73, 1);
    }
}

.description-text {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    text-align: left;
    color: rgba(137, 145, 154, 1);
    word-break: break-all;
}

.progress-container {
    height: 6px;
    background: rgba(208, 208, 209, 1);
}

.progress-bar {
    box-shadow: none;
    -webkit-box-shadow: none;
    background: linear-gradient(90deg, #66377b -1.07%, #dd005c 167.38%);
    height: 100% !important;
}

.primary-btn {
    font-family: 'Circe Bold', sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.015em;
    text-align: center;
    padding: 1em 2em;
    display: block;
    width: 100%;
    border-radius: 44px;
    box-shadow: 0px 20px 20px -10px rgba(102, 55, 123, 0.15);
    background-color: linear-gradient(90deg, #66377b 0%, #dd005c 100%);
    border-radius: 1000px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    z-index: 1;

    &::after {
        content: '';
        position: absolute;
        height: 108%;
        width: 101%;
        border-radius: 1000px;
        background-image: linear-gradient(90deg, #66377b 0%, #dd005c 100%);
        z-index: -1;
    }

    &:hover {
        color: #fff;
    }

    &:hover::after {
        display: block;
    }
}

.invoice-content {
    h2 {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 12px;
        letter-spacing: 0.015em;
        text-align: left;
        color: rgba(137, 145, 154, 1);
    }

    h3 {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 16px;
        text-align: left;
        color: rgba(30, 30, 32, 1);
    }
}

.bank-apps {
    h1 {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 12px;
        letter-spacing: 0.015em;
        text-align: left;
        color: rgba(64, 64, 73, 1);
    }

    .app-item {
        img {
            width: 68px;
            height: 68px;
            gap: 0px;
            border-radius: 16px;
            object-fit: cover;
            display: block;
        }

        span {
            font-family: 'Inter', sans-serif;
            font-size: 12px;
            font-weight: 500;
            line-height: 12px;
            text-align: center;
            display: block;
            color: rgba(85, 93, 102, 1);
        }
    }
}
</style>
