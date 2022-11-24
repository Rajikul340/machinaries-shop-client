import { useLathe } from "../../Auth/Auth";
import {useState} from 'react';
import LatheMachineCard from "./LatheMachineCard";

const LatheMachine = () => {
const[latheData, setLatheData] = useState([])
    useLathe()
    .then(data=>{
        console.log(data);
        setLatheData(data)
    })
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 mt-8 ">
            {
                latheData.map(latheSingleData=>
                <LatheMachineCard
                key={latheSingleData._id}
                latheSingleData={latheSingleData}
                ></LatheMachineCard>)
            }
        </div>
    );
};

export default LatheMachine;