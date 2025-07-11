import type { ApplicationConfig } from '@angular/core'
import { mergeApplicationConfig } from '@angular/core'
import { provideServerRendering, withRoutes } from '@angular/ssr'

import { appConfig } from '@/app/app.config'
import { serverRoutes } from '@/app/app.routes.server'

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(serverRoutes))],
}

export const config = mergeApplicationConfig(appConfig, serverConfig)
