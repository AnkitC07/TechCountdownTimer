import {createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthenticatedFetch } from "../hooks";

export const PlanCon = createContext()

const PlanContext = ({children}) =>{
    const navigate = useNavigate()
    const [banner,bannerState] = useState(false)
    const [plan,planState] = useState({
        type:"Free",
        price:0,
        id:null,
        days:0
    })
    const fetch = useAuthenticatedFetch()
    useEffect(()=>{
        fetch('/api/getstore').then(x=>x.json()).then(res=>{
            if(res.status == 200){
                console.log(res,"plan checking data")
                if(res.data.plan.type == "Free" && res.data.plan.days <= 0){
                    navigate('/plan')
                }else{
                    bannerState(res.data.banner)
                    planState(res.data.plan)
                }
            }
        })
        console.log("plan context running ")
    },[])

    if(plan.type == "Essential"){
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/614048f4d326717cb68152c0/1gjdrc24h';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
    }

    return(
        <>
        <PlanCon.Provider value={{plan,planState,banner,bannerState}}>
            {children}
        </PlanCon.Provider>
        </>
    )
}

export default PlanContext
