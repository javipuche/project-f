import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install (Vue) {
        const HelloWorld = () => import(/* webpackChunkName: "HelloWorld" */ './HelloWorld.vue')
        registerComponent(Vue, HelloWorld)
    }
}

use(Plugin)

export default Plugin
