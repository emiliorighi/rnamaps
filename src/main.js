import { createApp } from 'vue'
import App from './App.vue'
import { createVuestic,
    // createVuesticEssential,VaImage,VaPagination,VaDivider, VaButton,VaDataTable,VaCard,VaCardTitle,VaCardContent,VaNavbar,VaNavbarItem,VaIcon,VaSidebar,VaSidebarItem,VaSidebarItemContent,VaSidebarItemTitle 
} from 'vuestic-ui' // <-
import 'vuestic-ui/dist/vuestic-ui.css'
import {createPinia} from 'pinia'
import router from './router'

createApp(App)
// .use(createVuesticEssential({
//     components:{VaDataTable,VaButton,VaDivider,VaPagination,VaCard,VaCardTitle,VaCardContent,VaNavbar,VaNavbarItem,VaIcon,VaImage,VaSidebar,VaSidebarItem,VaSidebarItemContent,VaSidebarItemTitle}
// }))
.use(createPinia())
.use(createVuestic())
.use(router)
.mount('#app')
