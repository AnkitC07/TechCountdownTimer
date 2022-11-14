import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from '@shopify/polaris'

// import './cssfile/custom_style.css'
// import '../src/cssfile/App.css'
import '../cssfile/custom_style.css'
import '../cssfile/App.css'
import { TitleBar } from '@shopify/app-bridge-react'
import MainPage from '../components/HomePage'

import { trophyImage } from '../assets'

import { ProductsCard } from '../components'

export default function HomePage() {
  return <MainPage />
}
