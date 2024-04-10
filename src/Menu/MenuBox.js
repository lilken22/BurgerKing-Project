import React  from 'react'
import { Menubox } from '../components/List';
// import { http } from '../components/Axios'



export default function MenuBox() {

    // const [menuImgList, setImgList] = useState(null)

    // useEffect(() => {
    //     http.get('Menubox')
    //     .then(res =>setImgList (res.menuImgList))
    // }, [])
    const menuImgList = Menubox 

  return (
    <main className='bg-[rgb(245,235,220)]'>

    <div className='grid sm:grid-cols-3 md:items-center gap-2 my-1'>
        {
          
            menuImgList.map((m, i) => (
             <div key={m.id} className='rounded-lg shadow-md overflow-hidden'>
                <img src={m.imgUrl} alt={m.Title} className='w-full h-[200px]' />

                <h2 className='h-[45px] text-center text-[rgb(43,2,0)] font-bold font-serif text-2xl bg-white flex items-center justify-center'>{m.Title}</h2>

             </div>

            )) 
        }
    </div>
    </main>
  )
}
