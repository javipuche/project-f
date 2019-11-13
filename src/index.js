import * as components from './components'
import { use } from './utils/plugins'

const ComponentLibrary = {
    install (Vue, options = {}) {
        for (const componentKey in components) {
            Vue.use(components[componentKey])
        }
    }
}

use(ComponentLibrary)

export * from './components'
export default ComponentLibrary
