import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import HomeView from '../views/HomeView.vue'
import DestinationView from '@/views/DestinationView.vue'
// @ts-ignore
import TravelDurationView from '@/views/TravelDurationView.vue'
// @ts-ignore
import PersonalInformationView from '@/views/PersonalInformationView.vue'
// @ts-ignore
import TripDetailsView from '@/views/TripDetailsView.vue'
// @ts-ignore
import PaymentDetailsView from '@/views/PaymentDetailsView.vue'
import FeedbackView from '@/views/FeedbackView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/destination',
      name: 'destination',
      component: DestinationView
    },
    {
      path: '/travel-duration',
      name: 'travelDuration',
      component: TravelDurationView
    },
    {
      path: '/personal-information',
      name: 'personalInformation',
      component: PersonalInformationView
    },
    {
      path: '/trip-details',
      name: 'tripDetailsView',
      component: TripDetailsView
    },
    {
      path: '/payment-details',
      name: 'paymentDetails',
      component: PaymentDetailsView
    },
    {
      path: '/feedback',
      name: 'feedBack',
      component: FeedbackView
    }
  ]
})

export default router
