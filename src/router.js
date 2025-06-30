import { createRouter, createWebHistory } from 'vue-router'

import { HorrifiedRoutes } from './routes/Horrified'
import { MiscRoutes } from './routes/Misc'
import { ScytheRoutes } from './routes/Scythe'
import { StardewRoutes } from './routes/Stardew'
import { WizardRoutes } from './routes/Wizard'


export const routes = [
  HorrifiedRoutes,
  MiscRoutes,
  ScytheRoutes,
  StardewRoutes,
  WizardRoutes
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

