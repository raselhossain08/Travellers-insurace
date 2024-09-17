<template>
    <div class="flex flex-col items-center justify-start h-screen destination">
        <!-- Header Section -->
        <div class="flex items-center justify-between w-full max-w-md p-4 relative header-area h-[64px]">
            <button class="text-gray-600 relative z-10" @click="BackButton()">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <div class="content absolute top-0 left-0 w-full flex justify-center h-full items-center">
                <h1 class="text-lg font-semibold text-center">Select your destination</h1>
            </div>
        </div>

        <!-- Progress Bar Container -->
        <div class="w-full">
            <!-- Progress Bar Fill with Gradient -->
            <div class="progress-container">
                <div class="progress-bar" style="width: 20%"></div>
            </div>
        </div>

        <!-- Description Text -->
        <div class="content max-w-md py-4 px-4">
            <p class="mt-4 text-center text-gray-600 description-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </p>
        </div>

        <!-- Destination Input -->
        <div class="w-full max-w-md px-4 py-4 form-content relative">
            <label class="block">Destination</label>
            <input 
                type="text" 
                v-model="searchQuery"
                @input="filterLocations"
                placeholder="Type and select destination"
                class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
            />

            <!-- Location Suggestions -->
            <div class="absolute w-full left-0 right-0 px-4 z-20" v-if="filteredLocations.length">
                <div class="searching-dropdown mt-2">
                    <ul>
                        <li 
                            v-for="location in filteredLocations" 
                            :key="location" 
                            @click="addLocation(location)"
                        >
                            {{ location }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Selected Destinations -->
        <div class="selected-destinations max-w-md w-full px-4 py-4">
            <h1>Selected Destinations</h1>
            <div class="content">
                <ul class="flex flex-wrap justify-start items-center">
                    <li v-for="(location, index) in selectedLocations" :key="index" class="p-2 my-3 mr-2">
                        <button type="button" class="flex items-center capitalize">
                            <span class="offline block mr-2"></span> 
                            {{ location }} 
                            <span class="mx-2"> |</span>
                            <font-awesome-icon :icon="['fas', 'xmark']" @click="removeLocation(index)" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Continue Button -->
        <div class="footer-content fixed bottom-0 left-0 right-0 w-full pb-10">
            <div class="relative w-full">
                <img src="@/assets/img/effect3.svg" alt="effect2" class="absolute left-0 bottom-0">
                <div class="continue-button px-8 max-w-md w-full mx-auto ">
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
import { destinationStore } from '@/stores/counter';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const searchQuery = ref('');
const locations = ref([
    'Bahamas', 
    'Korea, Republic of (South Korea)', 
    'French Southern Territories', 
    'Northern Mariana Islands', 
    'French Southern Territories'
]);
const filteredLocations = ref([]);
const selectedLocations = ref([]);
const router = useRouter()
const useLocation = destinationStore()
// Filters the location list based on the user's input
function filterLocations() {
    if (searchQuery.value) {
        filteredLocations.value = locations.value.filter(location => 
            location.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    } else {
        filteredLocations.value = [];
    }
}

// Adds a location to the selected list
function addLocation(location) {
    if (!selectedLocations.value.includes(location)) {
        selectedLocations.value.push(location);
    }
    searchQuery.value = '';
    filteredLocations.value = [];
}

// Removes a location from the selected list
function removeLocation(index) {
    selectedLocations.value.splice(index, 1);
}

function BackButton(){
    router.push('/home')
}

function continueButton() {
    useLocation.setLocation(selectedLocations.value)
    router.push('/travel-duration')
}
</script>

<style scoped lang="scss">
.destination {
    background: rgba(255, 255, 255, 1);
}

.header-area {
    h1 {
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        font-weight: 600;
        line-height: 12px;
        letter-spacing: 0.015em;
        text-align: center;
        color: rgba(30, 30, 32, 1);
    }
}

.description-text {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    text-align: left;
    color: rgba(137, 145, 154, 1);
    word-break: break-all;
}

.form-content {
    background: transparent;

    label {
        font-family: "Inter", sans-serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 12px;
        letter-spacing: 0.015em;
        text-align: left;
        color: rgba(64, 64, 73, 1);
        margin-bottom: 14px;
    }

    input {
        background: rgba(247, 247, 248, 1);
        border: none;
        height: 52px;
        font-family: "Inter", sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 0.015em;
        text-align: left;
    }
}

.progress-container {
    height: 6px;
    background: rgba(208, 208, 209, 1);
}

.progress-bar {
    box-shadow: none;
    -webkit-box-shadow: none;
    background: linear-gradient(90deg, #66377B -1.07%, #DD005C 167.38%);
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
    background-color: #fff;
    border-radius: 1000px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(221, 0, 92, 1);

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
        background: linear-gradient(90deg, #66377b 0%, #dd005c 100%);
        color: #fff;
    }

    &:hover::after {
        display: none;
    }
}

.searching-dropdown {
    height: 248px;
    padding: 18px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 1);
    box-shadow: 2px 8px 20px 0px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 1);
    ul {
        list-style: none;
        li {
            font-family: "Inter", sans-serif;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            text-align: left;
            border-bottom: 1px solid rgba(247, 247, 248, 1);
            color: rgba(85, 93, 102, 1);
            padding: 12px 0;
            cursor: pointer;
        }
    }
}

.selected-destinations {
    h1 {
        font-family: "Inter", sans-serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 14px;
        text-align: left;
        color: rgba(64, 64, 73, 1);
    }

    .offline {
        background: rgba(102, 55, 123, 1);
        height: 6px;
        width: 6px;
        border-radius: 100px;
    }

    button {
        padding: 8px 14px 8px 14px;
        border-radius: 10px;
        background: rgba(247, 247, 248, 1);
    }
}
</style>
