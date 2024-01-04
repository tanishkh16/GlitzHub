import React from 'react'
import { useState } from 'react';
import MyContext from './MyContext'
import { Timestamp, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { collection, addDoc } from 'firebase/firestore';
import { fireDb } from '../../Firebase/FirebaseConfig';
import { useEffect } from 'react';
import { onSnapshot, orderBy, query } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore';
import { deleteDoc } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';




export default function MyState(props) {
    const [mode, setMode] = useState('light')
    const toggleMode=()=>{
        if(mode==='light'){
            setMode('dark')
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';
            
        }
        else{
            setMode('light')
            document.body.style.backgroundColor = 'white';
            
        }
    }
    const [loading, setLoading] = useState(false)
    const [product,setProduct]=useState([]);

    const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
          "en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }
        )
})

const addProduct=async()=>{
if(products.title==='' || products.price==='' || products.imageUrl==='' || products.category==='' || products.description===''){
    toast.error('Please fill all the fields');
}
const productRef = collection(fireDb, "products")
setLoading(true)
try{
    await addDoc(productRef, products);
    toast.success("Product Added Successfully")
    setTimeout(() => {
        window.location.href='/dashboard'
    },800);

    getProductData()

    
    setLoading(false)
}catch(err){
    console.log(err);
    toast.error(err.message);
    setLoading(false);  
}
setProducts("")
}

const getProductData=async()=>{
    setLoading(true)
      try{
        const q = query(
            collection(fireDb, "products"),
            orderBy("time"),
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productsArray = [];
                QuerySnapshot.forEach((doc) => {
                  productsArray.push({ ...doc.data(), id: doc.id });
                });
                setProduct(productsArray)
                setLoading(false);
              });
              return () => data;
            } catch (error) {
              console.log(error)
              setLoading(false)
            }
          }
        
          
          const edithandle=(item)=>{
            setProducts(item);
          }
          
          const updateProduct=async()=>{
            setLoading(true)
            try{
              await setDoc(doc(fireDb, "products", products.id), products);
              toast.success("Product Updated Successfully")
              getProductData();
              setTimeout(() => {
                window.location.href='/dashboard'
              },800);
              setLoading(false)
              
              
            }
            catch(err){
              console.log(err);
              toast.error(err.message);
              setLoading(false);  
            }
          }
          
          
          const deleteProduct=async(item)=>{
            setLoading(true)
                try{
                await deleteDoc(doc(fireDb, "products", item.id));
                toast.success("Product Deleted Successfully")
                setLoading(false)
                getProductData()
              }catch(err){
                console.log(err);
                toast.error(err.message);
                setLoading(false)
                }
              }
              
              const [order,setOrder]=useState([]);
              
              const getOrderData=async()=>{
                setLoading(true)
                try{
                  const result = await getDocs(collection(fireDb, "orders"))
                  
                  const orderArray= [];
                  
                  const ordersArray = [];
                  result.forEach((doc) => {
                    ordersArray.push(doc.data());
                    setLoading(false)
                  });
                  setOrder(ordersArray)
                  setLoading(false)
                  
                }catch(err){
                  console.log(err);
                  setLoading(false)
                  
                  
                }
              }

              const [user,setUser]=useState([]);
              const getUserData=async()=>{
                setLoading(true)
                try{
                  const result=await getDocs(collection(fireDb, "users"))
                  const userArray=[];
                result.forEach((doc) => {
                  userArray.push(doc.data());
                  setLoading(false)   
                })
                setUser(userArray)
                setLoading(false)
        

                }catch(err){
                  console.log(err);
                  setLoading(false)
                  
                  
                }
              }
              useEffect(() => {
                getProductData();
                getOrderData();
                getUserData();
              }, []);
              const [searchkey, setSearchkey] = useState('')
              const [filterType, setFilterType] = useState('')
              const [filterPrice, setFilterPrice] = useState('')

        


  return (
    <MyContext.Provider value={{mode,toggleMode,loading,setLoading,product,products,setProducts,addProduct,edithandle,updateProduct,deleteProduct,order,user,searchkey,setSearchkey,filterPrice,setFilterPrice,filterType,setFilterType}}>
        {props.children}

    </MyContext.Provider>
   
  )
}
