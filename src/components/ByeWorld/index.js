import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install (Vue) {
        const ByeWorld = () => import(/* webpackChunkName: "ByeWorld" */ './ByeWorld.vue')
        registerComponent(Vue, ByeWorld)
    }
}

use(Plugin)

export default Plugin
