import { BrowserRouter, Route } from 'react-router-dom'
import { NavigationMenu } from '@shopify/app-bridge-react'
import Routes from './Routes'

import { AppBridgeProvider, QueryProvider, PolarisProvider } from './components'
import { ProductProvider } from './context/ProductContext'
import { TopBottomContext, TopBottomProvider } from './context/Top_Bottom_Context'
import { LandingProvider } from './context/LandingContext'
import { CartPageProvider } from './context/CartPageContext'
// import Homepage from './components/HomePage'

// import { TimerType } from './components/TimerType/TimerType'
// import { ProductPage } from './components/Product/ProductPage'
// import Content from './components/Content'
// import Design from './components/Design'
// import Placement from './components/Placement'
// import Content_top from './components/Top_Bottom/Content_top'
// import Design_top from './components/Top_Bottom/Design_top'
// import Placement_top from './components/Top_Bottom/Placement_top'
// import Top_BottomPage from './components/Top_Bottom/Top_BottomPage'
// import LandingPage from './components/LandingPage/LandingPage'
// import Content_land from './components/LandingPage/Content_land'
// import Design_land from './components/LandingPage/Design_land'
// import Placement_land from './components/LandingPage/Placement_land'


export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager('./pages/**/!(*.test.[jt]sx)*.([jt]sx)')

  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/614048f4d326717cb68152c0/1gjdrc24h';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
  return (
    <>
    <PolarisProvider>
      <BrowserRouter>
        <ProductProvider>
          <TopBottomProvider >
            <LandingProvider>
              <CartPageProvider>
                <AppBridgeProvider>
                  <QueryProvider>
                    <NavigationMenu
                      navigationLinks={[
                        {
                          label: 'Timers',
                          destination: '/',
                        },
                        {
                          label: 'Suggestion',
                          destination: '/Suggestion',
                        },
                        {
                          label: 'Help',
                          destination: '/Help',
                        },
                      ]}
                    />
                    <Routes pages={pages} />
                  </QueryProvider>
                </AppBridgeProvider>
              </CartPageProvider>
            </LandingProvider>
          </TopBottomProvider>
        </ProductProvider>
      </BrowserRouter>
    </PolarisProvider>
  
</>
  )
}
