import { useEffect } from "react"
import { GetBlockIdsDrinkRequest } from "../connection/vendor-drinks/requests"
import { useLazyGetIdsBlockStatusDrinkQuery } from "../connection/vendor-drinks/vendorDrinksApi"

export const SetBlockedIds = (request: GetBlockIdsDrinkRequest) => {
    const [getBlockIds] = useLazyGetIdsBlockStatusDrinkQuery()
    
    useEffect(() => {
        getBlockIds( {ids: request.ids} as GetBlockIdsDrinkRequest)
        .unwrap()
        .then(fulfilled => {
            localStorage.setItem('drink-ids-blocked', JSON.stringify(fulfilled.ids as string[])) 
        })
        .catch(reject => {
            localStorage.setItem('drink-ids-blocked', JSON.stringify([] as string[])) 
        })
        .finally(() => {
            const data = localStorage.getItem('drink-ids-blocked')
            
            if(data) {
                if((JSON.parse(data) as string[]).length === 0) 
                    localStorage.setItem('drink-ids-blocked', JSON.stringify([] as string[]))
            }
            else localStorage.setItem('drink-ids-blocked', JSON.stringify([] as string[]))
        })  
    }, [])
}