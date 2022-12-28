import { createApp } from 'vue'
import App from './App.vue'
import { createVuestic,
    createIconsConfig
    // createVuesticEssential,VaImage,VaPagination,VaDivider, VaButton,VaDataTable,VaCard,VaCardTitle,VaCardContent,VaNavbar,VaNavbarItem,VaIcon,VaSidebar,VaSidebarItem,VaSidebarItemContent,VaSidebarItemTitle 
} from 'vuestic-ui' // <-
import 'vuestic-ui/dist/vuestic-ui.css'
import {createPinia} from 'pinia'
import router from './router'
import './assets/overrides.css'
import FlyLogo from './components/FlyLogo.vue'
import WomanLogo from './components/WomanLogo.vue'

const aliases = [
    {
        name: 'fly',
        component: FlyLogo,
        color: 'primary',
    },
    {
        name: 'custom-woman',
        component: WomanLogo,
        color: 'primary',
    }
]

createApp(App)
// .use(createVuesticEssential({
//     components:{VaDataTable,VaButton,VaDivider,VaPagination,VaCard,VaCardTitle,VaCardContent,VaNavbar,VaNavbarItem,VaIcon,VaImage,VaSidebar,VaSidebarItem,VaSidebarItemContent,VaSidebarItemTitle}
// }))
.use(createPinia())
.use(createVuestic({
    config:{
        colors:{
            variables:{
                primary: '#3F3F37',
                secondary: '#7B287D',
                info: '#ffffff',
                tertiary:'#BC96E6'
                


            }
        },
        icons: createIconsConfig({aliases:aliases})
    }
}))
.use(router)
.mount('#app')
