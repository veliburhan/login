import useApi from "../Hooks/useApi"
import {useState,useEffect} from "react"
import Box_item from "../components/Box_item"



function Home() {

    const api = useApi()
    const [boxes,setBoxes]=useState([])
    const dizi=["beyaz","kırmızı","yeşil","sarı"]

   useEffect(()=>{
    api.get("/public/categories/listMainCategories")
    .then(response => {
        const tempCategory=[]
        
        response.data.data.map((item,index)=>{
            tempCategory.push(<Box_item key={index} id={item.id} name={item.name} image={item.image} slug={item.slug} />)
            

        })

        setBoxes(tempCategory)
    })
   },[])


    return (
        <main>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal">Hizmet Bulma Sitesi</h1>
                <p className="fs-5 text-muted">Bu alanda arama yaparak istediğiniz hizmete ulaşabilirsiniz.</p>

            </div>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {boxes}
                
            </div>
            
            
        </main>

    )
}

export default Home