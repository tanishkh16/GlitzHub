import React,{useContext} from 'react'

import Layout from '../../Components/Layout/layout'
import MyContext from '../../Context/data/MyContext'
import HeroSection from '../../Components/heroSection/HeroSection'
import Filter from '../../Components/filter/Filter'
import ProductCard from '../../Components/productCard/ProductCard'
import Track from '../../Components/track/Track'
import Testimonials from '../../Components/testimonials/Testimonials'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart,deleteFromCart } from '../../Redux/CartSlice'
import { Link } from 'react-router-dom'

export default function Home() {
  const dispatch=useDispatch()
  const cartItem = useSelector((state)=> state.cart)
  console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart("shirt"));
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  }

    const context=useContext(MyContext)
    const {mode,toggle}=context
    console.log(mode)
    
  return (
    <Layout>
        <HeroSection/>
        <Filter/>
        <ProductCard/>
        <div className='flex justify-center -mt-10 mb-4'>
          <Link to='/allproducts'>
            <button className='bg-gray-300 px-5 py-2 rounded-xl focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300'>See More</button>
          </Link>
        </div>
        <Track/>
        <Testimonials/>
    </Layout>
  )
}
